import { TreeView } from "@primer/react";
import { type TreeNode } from "../../util/types";
import Icons from "../Icons";
import { memo, useMemo } from "react";
import { crateTree, type Crate } from "../../crate";
import { findPathToNode } from "../../util/fileTree";

export interface FileTreeProps {
  crate: Crate;
  // The path of the item that is marked as the current one. No item is marked without it.
  currentPath?: string;
  // Called with the path of the file or folder the user selects.
  onSelect: (path: string) => void;
}

function isXlsxFile(name: string): boolean {
  return name.endsWith(".xlsx");
}

const MemoRenderNode = memo(function RenderNode({
  node,
  currentPath,
  expandedFolderIds = [],
  onSelect,
}: {
  node: TreeNode;
  currentPath: string | undefined;
  expandedFolderIds?: string[];
  onSelect: (path: string) => void;
}) {
  const isFolder = node.type === "folder";
  const isCurrent = node.id === currentPath;
  const shouldExpand = expandedFolderIds.includes(node.id);

  return (
    <TreeView.Item
      key={node.id}
      id={node.id}
      current={isCurrent}
      defaultExpanded={shouldExpand}
      onSelect={() => onSelect(node.id)}
    >
      <TreeView.LeadingVisual>
        {isFolder ? (
          <TreeView.DirectoryIcon />
        ) : isXlsxFile(node.name) ? (
          <Icons.XlsxIcon />
        ) : (
          <Icons.FileIcon />
        )}
      </TreeView.LeadingVisual>
      {node.name}
      {isFolder && node.children && node.children.length > 0 && (
        <TreeView.SubTree>
          {node.children.map((child) => (
            <RenderNode
              key={child.id}
              node={child}
              currentPath={currentPath}
              expandedFolderIds={expandedFolderIds}
              onSelect={onSelect}
            />
          ))}
        </TreeView.SubTree>
      )}
    </TreeView.Item>
  );
}, (nodePropsPrev, nodePropsNext) => {
  return (
    nodePropsPrev.node === nodePropsNext.node &&
    nodePropsPrev.currentPath === nodePropsNext.currentPath &&
    nodePropsPrev.expandedFolderIds === nodePropsNext.expandedFolderIds &&
    nodePropsPrev.onSelect === nodePropsNext.onSelect
  );
});

// The folders and files of a crate as a tree. It holds no navigation of its own: the owner passes the
// current path and gets each selection.
export default function FileTree({
  crate,
  currentPath,
  onSelect,
}: FileTreeProps) {
  const tree = crateTree(crate);

  const expandedFolderIds = useMemo(() => {
    return currentPath
      ? findPathToNode(tree.children || [], currentPath) ?? []
      : [];
  }, [tree, currentPath]);

  if (!tree.children || tree.children.length === 0) {
    return <div>No files to display</div>;
  }

  return (
    <TreeView aria-label="File Tree">{tree.children.map(node =>
      <MemoRenderNode
        key={node.id}
        node={node}
        currentPath={currentPath}
        expandedFolderIds={expandedFolderIds}
        onSelect={onSelect}
      />
    )}</TreeView>
  );
}
