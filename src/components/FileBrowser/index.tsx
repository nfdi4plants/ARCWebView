import { useMemo, useState, type JSX, type ReactNode } from "react";
import { type ARC } from "@nfdi4plants/arctrl";
import { Stack } from "@primer/react";
import FileViewer from "../FileViewer";
import FileTable from "../FileTable";
import FileBreadcrumbs from "../FileBreadcrumbs";
import TreeSearch from "../TreeSearch";
import AnnotationTable from "../AnnotationTable";
import AssayMetadata from "../Metadata/AssayMetadata";
import StudyMetadata from "../Metadata/StudyMetadata";
import ARCMetadata from "../Metadata/ARCMetadata";
import RunMetadata from "../Metadata/RunMetadata";
import WorkflowMetadata from "../Metadata/WorkflowMetadata";
import { FileCacheProvider } from "../../ContextProvider";
import {
    crateArc,
    crateId,
    crateTree,
    landingLocation,
    type Crate,
    type FileLocation,
} from "../../crate";
import { findNodeAtPath } from "../../util/fileTree";
import { buildSearchCache } from "../../util/searchCache";
import { type ContentType, type TreeNode } from "../../util/types";

async function fetchFileByNode(tree: TreeNode, arc: ARC) {
    console.warn(
        "Fetching file by node not implemented yet: fetchFileByNode",
        tree,
        arc
    );
    return "This feature is not implemented yet. At the moment you can only view metadata files.";
}

// Threads the open tab of an isa file through the viewers: the annotation table whose tab is open, and a
// callback for each tab that the user selects.
interface TableTabProps {
    table?: string;
    onSelectTab?: (table: string | undefined) => void;
}

function FileViewerAssay({
    currentTreeNode,
    arc,
    table,
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
                    table: table.Name,
                    contentType: "jsx" as ContentType,
                    component: <AnnotationTable table={table} />,
                })),
            ]}
            table={table}
            onSelectTab={onSelectTab}
        />
    );
}

function FileViewerStudy({
    currentTreeNode,
    arc,
    table,
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
                    table: table.Name,
                    contentType: "jsx" as ContentType,
                    component: <AnnotationTable table={table} />,
                })),
            ]}
            table={table}
            onSelectTab={onSelectTab}
        />
    );
}

function FileViewerRun({
    currentTreeNode,
    arc,
    table,
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
                    table: table.Name,
                    contentType: "jsx" as ContentType,
                    component: <AnnotationTable table={table} />,
                })),
            ]}
            table={table}
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
    table,
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
                    table={table}
                    onSelectTab={onSelectTab}
                />
            );
        case "isa.assay.xlsx":
            return (
                <FileViewerAssay
                    currentTreeNode={currentTreeNode}
                    arc={arc}
                    table={table}
                    onSelectTab={onSelectTab}
                />
            );
        case "isa.run.xlsx":
            return (
                <FileViewerRun
                    currentTreeNode={currentTreeNode}
                    arc={arc}
                    table={table}
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

export interface FileBrowserProps {
    crate: Crate;
    // The place the browser shows. With it the owner holds the place: the browser shows what it is given
    // and asks for every change through onLocationChange. Without it the browser holds the place itself.
    location?: FileLocation;
    // Where a browser that holds its own place starts. The default is the landing place of the crate.
    defaultLocation?: FileLocation;
    // Called with the place the user navigates to, in either mode.
    onLocationChange?: (location: FileLocation) => void;
    // Shown in the header before the search box.
    headerStart?: ReactNode;
    // Shown in the header after the breadcrumbs.
    headerActions?: ReactNode;
}

function Browser({
    crate,
    location,
    defaultLocation,
    onLocationChange,
    headerStart,
    headerActions,
}: FileBrowserProps) {
    const tree = crateTree(crate);
    const arc = crateArc(crate);
    const searchCache = useMemo(() => buildSearchCache(tree, arc), [tree, arc]);

    const [ownLocation, setOwnLocation] = useState<FileLocation>(
        () => defaultLocation ?? landingLocation(crate)
    );
    const current = location ?? ownLocation;
    // null for a path the crate does not have.
    const currentTreeNode = findNodeAtPath(tree, current.path);

    const open = (next: FileLocation) => {
        if (location === undefined) setOwnLocation(next);
        onLocationChange?.(next);
    };

    const navigateTo = (path: string) => {
        const target = findNodeAtPath(tree, path);
        if (target === null) {
            console.warn(`Node not found for path: ${path}`);
            return;
        }
        // The file that is already open keeps its tab.
        if (target.id !== currentTreeNode?.id) open({ path: target.id });
    };

    return (
        <Stack>
            <div className="bgColor-default py-2 position-sticky top-0 z-1 d-flex flex-items-start">
                <Stack
                    className="flex-column flex-sm-row flex-items-start flex-sm-items-center"
                    style={{ width: "100%" }}
                >
                    <div
                        className="d-flex flex-row"
                        style={{ gap: "0.5rem" }}
                    >
                        {headerStart}
                        <TreeSearch cache={searchCache} navigateTo={navigateTo} />
                    </div>
                    <FileBreadcrumbs
                        currentTreeNode={currentTreeNode ?? tree}
                        navigateTo={navigateTo}
                        title={arc.Title || arc.Identifier}
                    />
                    {headerActions}
                </Stack>
            </div>
            {currentTreeNode === null ? (
                <p className="fgColor-muted" role="status">
                    {current.path} is not part of this crate.
                </p>
            ) : currentTreeNode.type === "file" ? (
                <RenderFileComponentByName
                    key={currentTreeNode.id}
                    currentTreeNode={currentTreeNode}
                    arc={arc}
                    table={current.table}
                    onSelectTab={(table) =>
                        open(
                            table === undefined
                                ? { path: currentTreeNode.id }
                                : { path: currentTreeNode.id, table }
                        )
                    }
                />
            ) : (
                <FileTable
                    loading={false}
                    currentTreeNode={currentTreeNode}
                    navigateTo={navigateTo}
                />
            )}
        </Stack>
    );
}

// The files of a crate: search, breadcrumbs, the listing of a folder and the content of a file. It brings
// no file tree and no page layout. The file cache belongs to one crate, so another crate starts a new
// browser with an empty cache.
export default function FileBrowser(props: FileBrowserProps) {
    return (
        <FileCacheProvider key={crateId(props.crate)}>
            <Browser {...props} />
        </FileCacheProvider>
    );
}
