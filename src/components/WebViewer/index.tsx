import { useEffect, useMemo, useState, type JSX } from "react";
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
import {
  SplitPageLayout,
  Stack,
  IconButton,
  useResponsiveValue,
  Dialog,
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
import FileTree from "../FileTree";
import Icons from "../Icons";
import { XCircleIcon } from "@primer/octicons-react";
import { Banner } from "@primer/react/experimental";
import { useMemoAsync } from "../../hooks/useMemoAsync";

function pathsToFileTree(
  paths: string[],
  exportMetadataMap: Map<string, ARCExportMetadata>
) {
  const root: TreeNode = { name: "root", id: "", type: "folder", children: [] };

  const preFilteredPaths = paths.filter((p) => !p.endsWith(".gitkeep"));

  for (const path of preFilteredPaths) {
    const parts = path.split("/");
    let current = root;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isFile = i === parts.length - 1;

      if (!current.children) current.children = [];

      let existing = current.children.find((child) => child.name === part);

      if (!existing) {
        const pathSoFar = parts.slice(0, i + 1).join("/");
        existing = {
          name: part,
          id: pathSoFar,
          sha256: exportMetadataMap.get(pathSoFar)?.sha256 || undefined, // Use sha256 if available
          contentSize:
            exportMetadataMap.get(pathSoFar)?.contentSize || undefined, // Use contentSize if available
          ...(isFile ? { type: "file" } : { type: "folder", children: [] }),
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
      const name = [contact.FirstName, contact.MidInitials, contact.LastName]
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
          headers.add({ name: header.toString(), path, type: "header" });
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
      const name = [contact.FirstName, contact.MidInitials, contact.LastName]
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
          headers.add({ name: header.toString(), path, type: "header" });
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
  setCache((prevCache) => [...prevCache, ...Array.from(headers)]);
  return;
}

function FileViewerAssay({
  currentTreeNode,
  arc,
}: {
  currentTreeNode: TreeNode;
  arc: ARC;
}): JSX.Element {
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
    />
  );
}

function FileViewerStudy({
  currentTreeNode,
  arc,
}: {
  currentTreeNode: TreeNode;
  arc: ARC;
}): JSX.Element {
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
}: {
  currentTreeNode: TreeNode;
  arc: ARC;
}): JSX.Element {
  switch (currentTreeNode.name) {
    case "isa.investigation.xlsx":
      return (
        <FileViewerInvestigation currentTreeNode={currentTreeNode} arc={arc} />
      );
    case "isa.study.xlsx":
      return <FileViewerStudy currentTreeNode={currentTreeNode} arc={arc} />;
    case "isa.assay.xlsx":
      return <FileViewerAssay currentTreeNode={currentTreeNode} arc={arc} />;
    default:
      return (
        <FileViewer
          nodes={[
            {
              node: currentTreeNode,
              content: () => fetchFileByNode(currentTreeNode, arc),
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
  setCurrentTreeNode: React.Dispatch<React.SetStateAction<TreeNode | undefined>>
) {
  if (!tree) return;
  const node = findNodeAtPath(tree, path);
  if (node) {
    setCurrentTreeNode(node);
  } else {
    console.warn(`Node not found for path: ${path}`);
  }
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
  clearJsonCallback,
}: WebViewerProps) {
  // const [arc, setArc] = useState<ARC | null>(null);
  // const [tree, setTree] = useState<TreeNode | null>(null);
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
        ROCrate.LDFile.validate(n, ldGraph.value?.TryGetContext() as any)
      );
      const fileIdExportMetadataMap = new Map<string, ARCExportMetadata>();
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
          fileIdExportMetadataMap.set(id, {
            sha256: sha,
            contentSize: contentSize ? formatFileSize(contentSize) : undefined,
          });
        }
      });
      const paths = arc.value.FileSystem.Tree.ToFilePaths(true);
      const tree = pathsToFileTree(paths, fileIdExportMetadataMap);
      return tree;
    } else {
      return undefined;
    }
  }, [arc, ldGraph]);

  const [currentTreeNode, setCurrentTreeNode] = useState<TreeNode | undefined>(tree.value);

  const navigateTo = useMemo(() => {
    return (path: string) => {
      if (!tree.value) return;
      navigateToPathInTree(path, tree.value, setCurrentTreeNode);
      if (isSmallScreen) {
        setSidebarActive(false);
      }
    };
  }, [tree, isSmallScreen]);

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
      ? findPathToNode(tree.value?.children || [], currentTreeNode.id) ?? []
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

  const error: string | undefined = [
    ldGraph.error?.message,
    arc.error?.message,
    tree.error?.message,
  ]
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
          <div className="bgColor-default py-2 position-sticky top-0 z-1 d-flex flex-items-start">
            <Stack
              className="flex-column flex-sm-row flex-items-start flex-sm-items-center"
              style={{ width: "100%" }}
            >
              <div className="d-flex flex-row" style={{ gap: "0.5rem" }}>
                <IconButton
                  aria-label="Expand sidebar"
                  variant="invisible"
                  icon={
                    sidebarActive
                      ? Icons.SidebarCollapseIcon
                      : Icons.SidebarExpandIcon
                  }
                  onClick={() => setSidebarActive(!sidebarActive)}
                />
                <TreeSearch navigateTo={navigateTo} />
              </div>
              {currentTreeNode && arc.value && arc.value.Title && (
                <FileBreadcrumbs
                  currentTreeNode={currentTreeNode}
                  navigateTo={navigateTo}
                  title={arc.value.Title}
                />
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
          {currentTreeNode && currentTreeNode.type === "file" && arc.value ? (
            <RenderFileComponentByName
              currentTreeNode={currentTreeNode}
              arc={arc.value}
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
                      id: currentTreeNode.name + "license",
                      name: "LICENSE.md",
                      type: "file",
                    },
                    contentType: "markdown",
                    content: licensefetch,
                  },
                ]}
              />
            )}
        </Stack>
      </SplitPageLayout.Content>
    </SplitPageLayout>
  );
}
