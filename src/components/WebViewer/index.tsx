import { useEffect, useMemo, useRef, useState, type JSX } from "react";
import {
    JsonController,
    type ARC,
    type OntologyAnnotation,
    type ArcInvestigation,
    ROCrate,
} from "@nfdi4plants/arctrl";
import FileViewer from "../FileViewer";
import FileTable from "../FileTable";
import FileBreadcrumbs from "../FileBreadcrumbs";
import ProvenanceGraph from "../ProvenanceGraph";
import { errorMessage } from "../ProvenanceGraph/errorMessage";
import { buildProvenanceIndex } from "../../provenance/buildIndex";
import {
    buildDataNodePaths,
    graphToViewerTarget,
    viewerToNavigation,
    type ViewerTarget,
} from "../../provenance/linking";
import { START_NAVIGATION, type Navigation } from "../../provenance/navigation";
import {
    SplitPageLayout,
    Stack,
    Button,
    IconButton,
    useResponsiveValue,
    Dialog,
    Banner,
    Heading
} from "@primer/react";
import {
    type ContentType,
    type SearchCache,
    type TreeNode,
} from "../../util/types";
import TreeSearch from "../TreeSearch";
import { useSearchCacheContext } from "../../contexts";
import AnnotationTable from "../AnnotationTable";
import AssayMetadata from "../Metadata/AssayMetadata";
import StudyMetadata from "../Metadata/StudyMetadata";
import ARCMetadata from "../Metadata/ARCMetadata";
import RunMetadata from "../Metadata/RunMetadata";
import WorkflowMetadata from "../Metadata/WorkflowMetadata";
import FileTree from "../FileTree";
import Icons from "../Icons";
import { ChevronDownIcon, ChevronUpIcon, XCircleIcon } from "@primer/octicons-react";
import { useMemoAsync } from "../../hooks/useMemoAsync";

function normalizePath(path: string): string {
    return path.replace(/\\/g, "/").replace(/^.?\/+/, "");
}

function pathsToFileTree(
    paths: string[],
    exportMetadataMap: Map<string, ARCExportMetadata>
) {
    const root: TreeNode = {
        name: "root",
        id: "",
        type: "folder",
        children: [],
    };

    const preFilteredPaths = paths.filter((p) => !p.endsWith(".gitkeep"));

    for (const path of preFilteredPaths) {
        const parts = path.split("/");
        let current = root;

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            const isFile = i === parts.length - 1;

            if (!current.children) current.children = [];

            let existing = current.children.find(
                (child) => child.name === part
            );

            if (!existing) {
                const pathSoFar = parts.slice(0, i + 1).join("/");
                existing = {
                    name: part,
                    id: pathSoFar,
                    sha256:
                        exportMetadataMap.get(pathSoFar)?.sha256 || undefined, // Use sha256 if available
                    contentSize:
                        exportMetadataMap.get(pathSoFar)?.contentSize ||
                        undefined, // Use contentSize if available
                    ...(isFile
                        ? { type: "file" }
                        : { type: "folder", children: [] }),
                };
                current.children.push(existing);
            }

            current = existing;
        }
    }

    return root;
}

function findNodeAtPath(tree: TreeNode, targetPath: string): TreeNode | null {
    const parts = targetPath.split("/").filter(Boolean);
    let current: TreeNode = tree;

    for (const part of parts) {
        if (!current.children) return null;
        const next = current.children.find((child) => child.name === part);
        if (!next) return null;
        current = next;
    }

    return current;
}

// async function findReadme(tree: TreeNode): Promise<string> {
//   if (tree.name !== "root")
//     return "No Readme found";
//   return readme;
// }

async function fetchFileByNode(tree: TreeNode, arc: ArcInvestigation) {
    console.warn(
        "Fetching file by node not implemented yet: fetchFileByNode",
        tree,
        arc
    );
    return "This feature is not implemented yet. At the moment you can only view metadata files.";
}

function flattenTreeToSearchCache(
    node: TreeNode,
    path: SearchCache[] = []
): SearchCache[] {
    if (node.type === "file") {
        return [{ name: node.name, path: node.id, type: "file" }];
    }

    if (node.type === "folder" && node.children) {
        return [
            ...node.children.flatMap((child) =>
                flattenTreeToSearchCache(child, path)
            ),
        ];
    }

    return [];
}

async function asyncDataToSearchCache(
    tree: TreeNode,
    arc: ARC,
    setCache: React.Dispatch<React.SetStateAction<SearchCache[]>>
): Promise<void> {
    const treeCache = flattenTreeToSearchCache(tree);
    setCache(treeCache);
    const headers = new Set<SearchCache>();
    arc.Assays.forEach((assay) => {
        const path = `assays/${assay.Identifier}/isa.assay.xlsx`;
        headers.add({ name: assay.Identifier, path, type: "isa-title" });
        assay.Performers.forEach((contact) => {
            if (contact.ORCID) {
                headers.add({ name: contact.ORCID, path, type: "person" });
            }
            const name = [
                contact.FirstName,
                contact.MidInitials,
                contact.LastName,
            ]
                .filter(Boolean)
                .join(" ");
            if (name) {
                headers.add({ name, path, type: "person" });
            }
        });
        assay.tables.forEach((table) => {
            headers.add({ name: table.Name, path, type: "isa-table" });
            table.Headers.forEach((header) => {
                const term = header.TryGetTerm();
                if (!term) {
                    headers.add({
                        name: header.toString(),
                        path,
                        type: "header",
                    });
                }
                if (term) {
                    const nametext = (term as OntologyAnnotation).NameText;
                    if (nametext) {
                        headers.add({ name: nametext, path, type: "header" });
                    }
                }
            });
        });
    });
    arc.Studies.forEach((study) => {
        const path = `studies/${study.Identifier}/isa.study.xlsx`;
        headers.add({ name: study.Identifier, path, type: "isa-title" });
        study.Contacts.forEach((contact) => {
            if (contact.ORCID) {
                headers.add({ name: contact.ORCID, path, type: "person" });
            }
            const name = [
                contact.FirstName,
                contact.MidInitials,
                contact.LastName,
            ]
                .filter(Boolean)
                .join(" ");
            if (name) {
                headers.add({ name, path, type: "person" });
            }
        });
        study.tables.forEach((table) => {
            headers.add({ name: table.Name, path, type: "isa-table" });
            table.Headers.forEach((header) => {
                const term = header.TryGetTerm();
                if (!term) {
                    headers.add({
                        name: header.toString(),
                        path,
                        type: "header",
                    });
                }
                if (term) {
                    const nametext = (term as OntologyAnnotation).NameText;
                    if (nametext) {
                        headers.add({ name: nametext, path, type: "header" });
                    }
                }
            });
        });
    });
    const investigationPath = `isa.investigation.xlsx`;
    arc.Contacts.forEach((contact) => {
        if (contact.ORCID) {
            headers.add({
                name: contact.ORCID,
                path: investigationPath,
                type: "person",
            });
        }
        const name = [contact.FirstName, contact.MidInitials, contact.LastName]
            .filter(Boolean)
            .join(" ");
        if (name) {
            headers.add({ name, path: investigationPath, type: "person" });
        }
    });
    arc.Runs.forEach((run) => {
        const path = `runs/${run.Identifier}/isa.run.xlsx`;
        headers.add({ name: run.Identifier, path, type: "isa-title" });
        run.Performers.forEach((performer) => {
            if (performer.ORCID) {
                headers.add({ name: performer.ORCID, path, type: "person" });
            }
            const name = [
                performer.FirstName,
                performer.MidInitials,
                performer.LastName,
            ]
                .filter(Boolean)
                .join(" ");
            if (name) {
                headers.add({ name, path, type: "person" });
            }
        });
        run.Tables.forEach((table) => {
            headers.add({ name: table.Name, path, type: "isa-table" });
            table.Headers.forEach((header) => {
                const term = header.TryGetTerm();
                if (!term) {
                    headers.add({
                        name: header.toString(),
                        path,
                        type: "header",
                    });
                }
                if (term) {
                    const nametext = (term as OntologyAnnotation).NameText;
                    if (nametext) {
                        headers.add({ name: nametext, path, type: "header" });
                    }
                }
            });
        });
    });
    arc.Workflows.forEach((workflow) => {
        const path = `workflows/${workflow.Identifier}/isa.workflow.xlsx`;
        headers.add({ name: workflow.Identifier, path, type: "isa-title" });
        workflow.Contacts.forEach((contact) => {
            if (contact.ORCID) {
                headers.add({ name: contact.ORCID, path, type: "person" });
            }
            const name = [
                contact.FirstName,
                contact.MidInitials,
                contact.LastName,
            ]
                .filter(Boolean)
                .join(" ");
            if (name) {
                headers.add({ name, path, type: "person" });
            }
        });
    });
    setCache((prevCache) => [...prevCache, ...Array.from(headers)]);
    return;
}

// Threads the open tab of an isa file through the viewers: the tab to open first, and a callback for each
// tab that the user selects.
interface TableTabProps {
    initialTable?: string;
    onSelectTab?: (name: string | undefined) => void;
}

function FileViewerAssay({
    currentTreeNode,
    arc,
    initialTable,
    onSelectTab,
}: {
    currentTreeNode: TreeNode;
    arc: ARC;
} & TableTabProps): JSX.Element {
    const assayIdent = currentTreeNode.id.match(
        /assays\/([^/]+)\/isa\.assay\.xlsx/
    );

    const assay = arc.Assays.find((a) => a.Identifier === assayIdent?.[1]);

    if (!assay) {
        return <div>Assay not found</div>;
    }

    return (
        <FileViewer
            nodes={[
                {
                    node: currentTreeNode,
                    name: "Metadata",
                    component: <AssayMetadata assay={assay} />,
                    contentType: "jsx",
                },
                ...assay.Tables.map((table) => ({
                    node: currentTreeNode,
                    name: table.Name,
                    contentType: "jsx" as ContentType,
                    component: <AnnotationTable table={table} />,
                })),
            ]}
            initialTable={initialTable}
            onSelectTab={onSelectTab}
        />
    );
}

function FileViewerStudy({
    currentTreeNode,
    arc,
    initialTable,
    onSelectTab,
}: {
    currentTreeNode: TreeNode;
    arc: ARC;
} & TableTabProps): JSX.Element {
    const studyIdent = currentTreeNode.id.match(
        /studies\/([^/]+)\/isa\.study\.xlsx/
    );

    const study = arc.Studies.find((s) => s.Identifier === studyIdent?.[1]);

    if (!study) {
        return <div>Study not found</div>;
    }

    return (
        <FileViewer
            nodes={[
                {
                    node: currentTreeNode,
                    component: <StudyMetadata study={study} />,
                    contentType: "jsx",
                },
                ...study.Tables.map((table) => ({
                    node: currentTreeNode,
                    name: table.Name,
                    contentType: "jsx" as ContentType,
                    component: <AnnotationTable table={table} />,
                })),
            ]}
            initialTable={initialTable}
            onSelectTab={onSelectTab}
        />
    );
}

function FileViewerRun({
    currentTreeNode,
    arc,
    initialTable,
    onSelectTab,
}: {
    currentTreeNode: TreeNode;
    arc: ARC;
} & TableTabProps): JSX.Element {
    const runIdent = currentTreeNode.id.match(
        /runs\/([^/]+)\/isa\.run\.xlsx/
    );

    const run = arc.Runs.find((r) => r.Identifier === runIdent?.[1]);

    if (!run) {
        return <div>Run not found</div>;
    }

    return (
        <FileViewer
            nodes={[
                {
                    node: currentTreeNode,
                    name: "Metadata",
                    component: <RunMetadata run={run} />,
                    contentType: "jsx",
                },
                ...run.Tables.map((table) => ({
                    node: currentTreeNode,
                    name: table.Name,
                    contentType: "jsx" as ContentType,
                    component: <AnnotationTable table={table} />,
                })),
            ]}
            initialTable={initialTable}
            onSelectTab={onSelectTab}
        />
    );
}

function FileViewerWorkflow({
    currentTreeNode,
    arc,
}: {
    currentTreeNode: TreeNode;
    arc: ARC;
}): JSX.Element {
    const workflowIdent = currentTreeNode.id.match(
        /workflows\/([^/]+)\/isa\.workflow\.xlsx/
    );

    const workflow = arc.Workflows.find((w) => w.Identifier === workflowIdent?.[1]);

    if (!workflow) {
        return <div>Workflow not found</div>;
    }

    return (
        <FileViewer
            nodes={[
                {
                    node: currentTreeNode,
                    component: <WorkflowMetadata workflow={workflow} />,
                    contentType: "jsx",
                },
            ]}
        />
    );
}

function FileViewerInvestigation({
    currentTreeNode,
    arc,
}: {
    currentTreeNode: TreeNode;
    arc: ARC;
}): JSX.Element {
    return (
        <FileViewer
            nodes={[
                {
                    node: currentTreeNode,
                    component: <ARCMetadata arc={arc} />,
                    contentType: "jsx",
                },
            ]}
        />
    );
}

function RenderFileComponentByName({
    currentTreeNode,
    arc,
    initialTable,
    onSelectTab,
}: {
    currentTreeNode: TreeNode;
    arc: ARC;
} & TableTabProps): JSX.Element {
    switch (currentTreeNode.name) {
        case "isa.investigation.xlsx":
            return (
                <FileViewerInvestigation
                    currentTreeNode={currentTreeNode}
                    arc={arc}
                />
            );
        case "isa.study.xlsx":
            return (
                <FileViewerStudy
                    currentTreeNode={currentTreeNode}
                    arc={arc}
                    initialTable={initialTable}
                    onSelectTab={onSelectTab}
                />
            );
        case "isa.assay.xlsx":
            return (
                <FileViewerAssay
                    currentTreeNode={currentTreeNode}
                    arc={arc}
                    initialTable={initialTable}
                    onSelectTab={onSelectTab}
                />
            );
        case "isa.run.xlsx":
            return (
                <FileViewerRun
                    currentTreeNode={currentTreeNode}
                    arc={arc}
                    initialTable={initialTable}
                    onSelectTab={onSelectTab}
                />
            );
        case "isa.workflow.xlsx":
            return (
                <FileViewerWorkflow currentTreeNode={currentTreeNode} arc={arc} />
            );
        default:
            return (
                <FileViewer
                    nodes={[
                        {
                            node: currentTreeNode,
                            content: () =>
                                fetchFileByNode(currentTreeNode, arc),
                        },
                    ]}
                />
            );
    }
}

interface SideSheetProps {
    close: () => void;
    children?: React.ReactNode;
}

function SideSheet({ close, children }: SideSheetProps) {
    return (
        <Dialog title="My Dialog" onClose={close} position="left">
            {children}
        </Dialog>
    );
}

// Helper to find the path to the currentId (returns list of folder IDs)
function findPathToNode(
    tree: TreeNode[],
    targetId: string,
    path: string[] = []
): string[] | null {
    for (const node of tree) {
        if (node.id === targetId) {
            console.log("Found node:", node);
            return path;
        }
        if (node.type === "folder" && node.children) {
            const result = findPathToNode(node.children, targetId, [
                ...path,
                node.id,
            ]);
            if (result) return result;
        }
    }
    return null;
}

function navigateToPathInTree(
    path: string,
    tree: TreeNode | undefined,
    setCurrentTreeNode: React.Dispatch<
        React.SetStateAction<TreeNode | undefined>
    >
) {
    if (!tree) return;
    const node = findNodeAtPath(tree, path);
    if (node) {
        setCurrentTreeNode(node);
    } else {
        console.warn(`Node not found for path: ${path}`);
    }
}

// The tooltip of the button that opens a place in the file viewer. The root has no path, so it shows as the
// title of the ARC.
function viewerTargetTitle(target: ViewerTarget, arcTitle: string | undefined): string {
    const place = target.path === "" ? arcTitle || "ARC root" : target.path;
    return target.table === undefined
        ? `Open ${place}`
        : `Open ${place}, table ${target.table}`;
}

interface WebViewerProps {
    jsonString: string;
    readmefetch?: () => Promise<string>;
    licensefetch?: () => Promise<string>;
    clearJsonCallback?: () => void;
}

function formatFileSize(input: string): string {
    const match = input.match(/^(\d+)(b|B)$/);
    if (!match) return input;

    const bytes = parseInt(match[1], 10);
    if (isNaN(bytes)) return input;

    const units = ["B", "KB", "MB", "GB", "TB", "PB"];
    let i = 0;
    let size = bytes;

    while (size >= 1024 && i < units.length - 1) {
        size /= 1024;
        i++;
    }

    return `${size.toFixed(2)} ${units[i]}`;
}

interface ARCExportMetadata {
    sha256: string;
    contentSize: string | undefined;
}

export default function WebViewer({
    jsonString,
    readmefetch,
    licensefetch,
    clearJsonCallback
}: WebViewerProps) {

    const { setCache } = useSearchCacheContext();

    const [sidebarActive, setSidebarActive] = useState(false);

    const isSmallScreen = useResponsiveValue(
        {
            narrow: true,
            regular: true,
            wide: false,
        },
        false
    );

    const ldGraph = useMemoAsync(async () => {
        const r = JsonController.LDGraph.fromROCrateJsonString(jsonString);
        return r;
    }, [jsonString]);

    const arc = useMemoAsync(async () => {
        return JsonController.ARC.fromROCrateJsonString(jsonString);
    }, [jsonString]);

    const tree = useMemoAsync(async () => {
        if (arc.value && ldGraph.value) {
            const files = ldGraph.value.Nodes.filter((n) =>
                ROCrate.LDFile.validate(
                    n,
                    ldGraph.value?.TryGetContext() as any
                )
            );
            console.log(files)
            const fileIdExportMetadataMap = new Map<
                string,
                ARCExportMetadata
            >();
            files.forEach((file) => {
                const id = file.id;
                const sha =
                    file.TryGetProperty(
                        "http://schema.org/sha256",
                        ldGraph.value?.TryGetContext() as any
                    ) ||
                    file.TryGetProperty(
                        "https://schema.org/sha256",
                        ldGraph.value?.TryGetContext() as any
                    );
                if (id && sha) {
                    const contentSize = file.TryGetProperty("contentSize");
                    const normalizedPathFromId = normalizePath(id);
                    fileIdExportMetadataMap.set(normalizedPathFromId, {
                        sha256: sha,
                        contentSize: contentSize
                        ? formatFileSize(contentSize)
                        : undefined,
                    });
                }
            });
            const paths = arc.value.FileSystem.Tree.ToFilePaths(true);
            const tree = pathsToFileTree(Array.from(paths), fileIdExportMetadataMap);
            return tree;
        } else {
            return undefined;
        }
    }, [arc, ldGraph]);

    const [currentTreeNode, setCurrentTreeNode] = useState<
        TreeNode | undefined
    >(tree.value);

    // The generation counts the indexes built so far. It keys the provenance graph, so a new ARC mounts a
    // fresh explorer with clean error, canvas, expansion and scroll state.
    const generation = useRef(0);
    // A new index counts as another ARC and resets the graph navigation, so the index keeps its identity
    // while the ARC stays the same.
    const built = useMemo(() => {
        if (!arc.value) return undefined;
        const key = ++generation.current;
        try {
            return { key, index: buildProvenanceIndex(arc.value) };
        } catch (error) {
            console.error("Could not build the provenance index", error);
            return { key, error: errorMessage(error) };
        }
    }, [arc.value]);
    const index = built?.index;
    const dataNodePaths = useMemo(
        () => (index ? buildDataNodePaths(index) : undefined),
        [index]
    );

    // The graph navigation lives here, so the viewer can set it. After a navigation that starts in the graph
    // its content takes focus. After one that starts in the viewer it does not.
    const [graphNav, setGraphNav] = useState<Navigation>(START_NAVIGATION);
    const [graphFocus, setGraphFocus] = useState(false);
    // A new index is another ARC, so the selection of the old one must not outlive it. React lets a
    // component reset state while it renders, so the explorer draws nothing of the old selection.
    const [seenIndex, setSeenIndex] = useState(index);
    if (seenIndex !== index) {
        setSeenIndex(index);
        setGraphNav(START_NAVIGATION);
        setGraphFocus(false);
    }

    // The name of the open tab of the current isa file. A request seeds the tab that a freshly mounted
    // file viewer opens, and its sequence number remounts the viewer for a new request.
    const [selectedTable, setSelectedTable] = useState<string | undefined>(
        undefined
    );
    const [tableRequest, setTableRequest] = useState<{
        table?: string;
        seq: number;
    }>({ seq: 0 });

    const currentTreeNodeId = currentTreeNode?.id;
    const navigateTo = useMemo(() => {
        return (path: string) => {
            if (!tree.value) return;
            const target = findNodeAtPath(tree.value, path);
            navigateToPathInTree(path, tree.value, setCurrentTreeNode);
            // The file that is already open keeps its tab, and a path the tree does not have changes nothing.
            if (target !== null && target.id !== currentTreeNodeId) {
                setSelectedTable(undefined);
                // An old request must not seed the tab of the next isa file that opens.
                setTableRequest((request) =>
                    request.table === undefined
                        ? request
                        : { ...request, table: undefined }
                );
            }
            if (isSmallScreen) {
                setSidebarActive(false);
            }
        };
    }, [tree, isSmallScreen, currentTreeNodeId]);

    const viewerRef = useRef<HTMLDivElement>(null);
    const provenanceRef = useRef<HTMLElement>(null);
    const provenanceHeadingRef = useRef<HTMLHeadingElement>(null);
    const viewerHeaderRef = useRef<HTMLDivElement>(null);
    const [graphVisible, setGraphVisible] = useState(true);

    const hasPath = useMemo(() => {
        return (path: string) =>
            tree.value !== undefined &&
            (path === "" || findNodeAtPath(tree.value, path) !== null);
    }, [tree.value]);

    // Where the "Show in file viewer" button leads, and where the "Show in provenance graph" button leads.
    const viewerTarget = useMemo(
        () => (index ? graphToViewerTarget(graphNav, index, hasPath) : undefined),
        [graphNav, index, hasPath]
    );
    const graphTarget = useMemo(
        () =>
            index && dataNodePaths && currentTreeNode
                ? viewerToNavigation(
                      currentTreeNode.id,
                      selectedTable,
                      index,
                      dataNodePaths
                  )
                : undefined,
        [index, dataNodePaths, currentTreeNode, selectedTable]
    );

    const openInViewer = (target: ViewerTarget) => {
        if (!tree.value) return;
        navigateToPathInTree(target.path, tree.value, setCurrentTreeNode);
        setSelectedTable(target.table);
        setTableRequest((request) => ({
            table: target.table,
            seq: request.seq + 1,
        }));
        if (isSmallScreen) {
            setSidebarActive(false);
        }
        viewerRef.current?.scrollIntoView({ block: "start" });
        viewerRef.current?.focus({ preventScroll: true });
    };

    const showInGraph = (target: Navigation) => {
        setGraphNav(target);
        setGraphFocus(false);
        setGraphVisible(true);
        // The sticky viewer header covers the top of the page, so the graph starts below it.
        const section = provenanceRef.current;
        if (section) {
            const headerHeight = viewerHeaderRef.current?.offsetHeight ?? 0;
            window.scrollTo({
                top: section.getBoundingClientRect().top + window.scrollY - headerHeight,
            });
        }
        provenanceHeadingRef.current?.focus({ preventScroll: true });
    };

    useEffect(() => {
        if (tree.value) {
            setCurrentTreeNode(tree.value);
        }
    }, [tree.value]);

    useEffect(() => {
        if (tree.value && arc.value) {
            asyncDataToSearchCache(tree.value, arc.value, setCache);
        }
    }, [tree, arc, setCache]);

    const expandedFolderIds = useMemo(() => {
        return currentTreeNode?.id
            ? findPathToNode(tree.value?.children || [], currentTreeNode.id) ??
                  []
            : [];
    }, [tree, currentTreeNode]);

    const renderedTree = useMemo(
        () => (
            <FileTree
                tree={tree.value}
                currentTreeNode={currentTreeNode}
                expandedFolderIds={expandedFolderIds}
                navigateTo={navigateTo}
            />
        ),
        [tree, currentTreeNode, expandedFolderIds, navigateTo]
    );

    const error: string | undefined =
        [ldGraph.error?.message, arc.error?.message, tree.error?.message]
            .filter(Boolean)
            .join("\n") || undefined;

    return error ? (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <div style={{ minWidth: "300px" }}>
                <Banner
                    aria-label="Error"
                    title="Error"
                    description={error}
                    variant="critical"
                    onDismiss={clearJsonCallback}
                />
            </div>
        </div>
    ) : (
        <div
            ref={viewerRef}
            role="region"
            aria-label="File viewer"
            tabIndex={-1}
        >
            <SplitPageLayout>
                {/* <SplitPageLayout.Header >
            </SplitPageLayout.Header> */}
                <div className="z-2">
                    {sidebarActive && (isSmallScreen as boolean) && (
                        <SideSheet close={() => setSidebarActive(false)}>
                            {renderedTree}
                        </SideSheet>
                    )}
                </div>
                <SplitPageLayout.Pane
                    aria-label="Sidebar"
                    resizable={true}
                    widthStorageKey={"arc-webviewer-sidebar-width"}
                    hidden={!sidebarActive || (isSmallScreen as boolean)}
                    sticky={true}
                >
                    {renderedTree}
                </SplitPageLayout.Pane>
                <SplitPageLayout.Content>
                    <Stack>
                        <div
                            ref={viewerHeaderRef}
                            className="bgColor-default py-2 position-sticky top-0 z-1 d-flex flex-items-start"
                        >
                            <Stack
                                className="flex-column flex-sm-row flex-items-start flex-sm-items-center"
                                style={{ width: "100%" }}
                            >
                                <div
                                    className="d-flex flex-row"
                                    style={{ gap: "0.5rem" }}
                                >
                                    <IconButton
                                        aria-label="Expand sidebar"
                                        variant="invisible"
                                        icon={
                                            sidebarActive
                                                ? Icons.SidebarCollapseIcon
                                                : Icons.SidebarExpandIcon
                                        }
                                        onClick={() =>
                                            setSidebarActive(!sidebarActive)
                                        }
                                    />
                                    <TreeSearch navigateTo={navigateTo} />
                                </div>
                                {currentTreeNode &&
                                    arc.value &&
                                    arc.value.Title && (
                                        <FileBreadcrumbs
                                            currentTreeNode={currentTreeNode}
                                            navigateTo={navigateTo}
                                            title={arc.value.Title}
                                        />
                                    )}
                                {graphTarget && (
                                    <Button
                                        size="small"
                                        onClick={() => showInGraph(graphTarget)}
                                    >
                                        Show in provenance graph
                                    </Button>
                                )}
                                {clearJsonCallback && (
                                    <IconButton
                                        style={{ marginLeft: "auto" }}
                                        aria-label="Clear loaded JSON and upload new"
                                        variant="danger"
                                        icon={XCircleIcon}
                                        onClick={() => clearJsonCallback()}
                                    />
                                )}
                            </Stack>
                        </div>
                        {currentTreeNode &&
                        currentTreeNode.type === "file" &&
                        arc.value ? (
                            <RenderFileComponentByName
                                key={currentTreeNode.id + "|" + tableRequest.seq}
                                currentTreeNode={currentTreeNode}
                                arc={arc.value}
                                initialTable={tableRequest.table}
                                onSelectTab={setSelectedTable}
                            />
                        ) : (
                            <FileTable
                                loading={arc.loading}
                                currentTreeNode={currentTreeNode}
                                navigateTo={navigateTo}
                            />
                        )}
                        {tree.value &&
                            currentTreeNode &&
                            currentTreeNode.name === "root" &&
                            currentTreeNode.type === "folder" &&
                            (readmefetch || licensefetch) && (
                                <FileViewer
                                    nodes={[
                                        {
                                            node: {
                                                id: currentTreeNode.name + "readme",
                                                name: "README.md",
                                                type: "file",
                                            },
                                            contentType: "markdown",
                                            content: readmefetch,
                                        },
                                        {
                                            node: {
                                                id:
                                                    currentTreeNode.name +
                                                    "license",
                                                name: "LICENSE.md",
                                                type: "file",
                                            },
                                            contentType: "markdown",
                                            content: licensefetch,
                                        },
                                    ]}
                                />
                            )}
                        {arc.value && (
                            <section
                                ref={provenanceRef}
                                aria-labelledby="provenance-graph-heading"
                                className="mt-4 pb-4"
                            >
                                <div className="d-flex flex-items-center mb-2" style={{ gap: "0.5rem" }}>
                                    <Heading
                                        ref={provenanceHeadingRef}
                                        as="h2"
                                        variant="medium"
                                        id="provenance-graph-heading"
                                        tabIndex={-1}
                                    >
                                        Provenance graph
                                    </Heading>
                                    <Button
                                        size="small"
                                        variant="invisible"
                                        leadingVisual={graphVisible ? ChevronUpIcon : ChevronDownIcon}
                                        aria-expanded={graphVisible}
                                        aria-controls="provenance-graph-body"
                                        onClick={() => setGraphVisible(!graphVisible)}
                                    >
                                        {graphVisible ? "Hide" : "Show"}
                                    </Button>
                                </div>
                                {graphVisible && (
                                    <div id="provenance-graph-body">
                                        {built?.error !== undefined && (
                                            <Banner
                                                variant="critical"
                                                title="The provenance graph could not be built."
                                                description={built.error}
                                            />
                                        )}
                                        {built?.index && (
                                            <ProvenanceGraph
                                                key={built.key}
                                                index={built.index}
                                                nav={graphNav}
                                                onNavChange={(next) => {
                                                    setGraphNav(next);
                                                    setGraphFocus(true);
                                                }}
                                                focusOnNavigation={graphFocus}
                                                actions={
                                                    viewerTarget ? (
                                                        <Button
                                                            size="small"
                                                            title={viewerTargetTitle(
                                                                viewerTarget,
                                                                arc.value.Title
                                                            )}
                                                            onClick={() => openInViewer(viewerTarget)}
                                                        >
                                                            Show in file viewer
                                                        </Button>
                                                    ) : undefined
                                                }
                                            />
                                        )}
                                    </div>
                                )}
                            </section>
                        )}
                    </Stack>
                </SplitPageLayout.Content>
            </SplitPageLayout>
        </div>
    );
}
