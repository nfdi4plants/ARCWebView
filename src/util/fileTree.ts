import { ROCrate } from "@nfdi4plants/arctrl";
import type { LoadedCrate } from "./crateLoader";
import type { TreeNode } from "./types";

interface ARCExportMetadata {
    sha256: string;
    contentSize: string | undefined;
}

function normalizePath(path: string): string {
    return path.replace(/\\/g, "/").replace(/^.?\/+/, "");
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

// The file tree of a crate. The sha256 and the size of a file come from its entity in the crate, when it has one.
export function buildFileTree(loaded: LoadedCrate): TreeNode {
    const context = loaded.ldGraph.TryGetContext() as any;
    const files = loaded.ldGraph.Nodes.filter((n) =>
        ROCrate.LDFile.validate(n, context)
    );
    const fileIdExportMetadataMap = new Map<string, ARCExportMetadata>();
    files.forEach((file) => {
        const id = file.id;
        const sha =
            file.TryGetProperty("http://schema.org/sha256", context) ||
            file.TryGetProperty("https://schema.org/sha256", context);
        if (id && sha) {
            const contentSize = file.TryGetProperty("contentSize");
            fileIdExportMetadataMap.set(normalizePath(id), {
                sha256: sha,
                contentSize: contentSize
                    ? formatFileSize(contentSize)
                    : undefined,
            });
        }
    });
    return pathsToFileTree(loaded.paths, fileIdExportMetadataMap);
}

// The node at a path, or null when the tree has none. The empty path is the root.
export function findNodeAtPath(tree: TreeNode, targetPath: string): TreeNode | null {
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

// Helper to find the path to the currentId (returns list of folder IDs)
export function findPathToNode(
    tree: TreeNode[],
    targetId: string,
    path: string[] = []
): string[] | null {
    for (const node of tree) {
        if (node.id === targetId) {
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
