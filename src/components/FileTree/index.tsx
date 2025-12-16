import { TreeView } from "@primer/react";
import { type TreeNode } from "../../util/types";
import Icons from "../Icons";
import { memo } from "react";
interface FileTreeProps {
  tree: TreeNode | undefined;
  expandedFolderIds: string[];
  currentTreeNode: TreeNode | undefined;
  navigateTo: (path: string) => void;
}

function isXlsxFile(name: string): boolean {
  return name.endsWith(".xlsx");
}

const MemoRenderNode = memo(function RenderNode({
  node,
  currentTreeNode,
  expandedFolderIds = [],
  navigateTo,
}: {
  node: TreeNode;
  currentTreeNode: TreeNode | undefined;
  expandedFolderIds?: string[];
  navigateTo: (path: string) => void;
}) {
  const isFolder = node.type === "folder";
  const isCurrent = node.id === currentTreeNode?.id;
  const shouldExpand = expandedFolderIds.includes(node.id);

  return (
    <TreeView.Item
      key={node.id}
      id={node.id}
      current={isCurrent}
      defaultExpanded={shouldExpand}
      onSelect={() => navigateTo(node.id)}
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
              currentTreeNode={currentTreeNode}
              expandedFolderIds={expandedFolderIds}
              navigateTo={navigateTo}
            />
          ))}
        </TreeView.SubTree>
      )}
    </TreeView.Item>
  );
}, (nodePropsPrev, nodePropsNext) => {
  return (
    nodePropsPrev.node === nodePropsNext.node &&
    nodePropsPrev.currentTreeNode === nodePropsNext.currentTreeNode &&
    nodePropsPrev.expandedFolderIds === nodePropsNext.expandedFolderIds
  );
});

/// Can be improved by splitting "renderNode" into its own component with memoization. Accessing "currentNode" from a context. This would
export default function FileTree({
  tree,
  currentTreeNode,
  expandedFolderIds,
  navigateTo,
}: FileTreeProps) {


  if (!tree || !tree.children || !currentTreeNode) {
    return <div>No files to display</div>;
  }

  return (
    <TreeView aria-label="File Tree">{tree.children?.map(node =>
      
      <MemoRenderNode
        key={node.id}
        node={node}
        currentTreeNode={currentTreeNode}
        expandedFolderIds={expandedFolderIds}
        navigateTo={navigateTo}
      />
    )}</TreeView>
  );
}
