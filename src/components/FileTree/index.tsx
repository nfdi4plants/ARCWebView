import { TreeView } from "@primer/react";
import { type TreeNode } from "../../util/types";
import Icons from "../Icons";
import { memo, useCallback, useMemo, useState } from "react";
import { type Crate } from "../../crate";
import { crateTree } from "../../crateData";
import { findPathToNode } from "../../util/fileTree";

export interface FileTreeProps {
  crate: Crate;
  // The path of the item that is marked as the current one. No item is marked without it. The folders
  // above it open, so the marked item is in view.
  currentPath?: string;
  // Called with the path of the file or folder the user selects.
  onSelect: (path: string) => void;
  // Whether the user can select the item at a path. Without it every item can be selected. A folder that
  // cannot be selected opens and closes on a click. A file that cannot be selected is shown muted.
  isSelectable?: (path: string) => boolean;
}

function isXlsxFile(name: string): boolean {
  return name.endsWith(".xlsx");
}

const MemoRenderNode = memo(function RenderNode({
  node,
  currentPath,
  expanded,
  onExpandedChange,
  onSelect,
  isSelectable,
}: {
  node: TreeNode;
  currentPath: string | undefined;
  expanded: ReadonlySet<string>;
  onExpandedChange: (id: string, open: boolean) => void;
  onSelect: (path: string) => void;
  isSelectable?: (path: string) => boolean;
}) {
  const isFolder = node.type === "folder";
  const isCurrent = node.id === currentPath;
  const selectable = isSelectable ? isSelectable(node.id) : true;

  return (
    <TreeView.Item
      key={node.id}
      id={node.id}
      current={isCurrent}
      // The tree holds the open folders, so it can open the ones above a new current path.
      expanded={isFolder ? expanded.has(node.id) : undefined}
      onExpandedChange={isFolder ? (open) => onExpandedChange(node.id, open) : undefined}
      // Without onSelect, Primer opens and closes a folder on a click of its row.
      onSelect={selectable ? () => onSelect(node.id) : undefined}
      aria-disabled={!selectable && !isFolder ? true : undefined}
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
      {selectable || isFolder ? node.name : <span className="fgColor-muted">{node.name}</span>}
      {isFolder && node.children && node.children.length > 0 && (
        <TreeView.SubTree>
          {node.children.map((child) => (
            <RenderNode
              key={child.id}
              node={child}
              currentPath={currentPath}
              expanded={expanded}
              onExpandedChange={onExpandedChange}
              onSelect={onSelect}
              isSelectable={isSelectable}
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
    nodePropsPrev.expanded === nodePropsNext.expanded &&
    nodePropsPrev.onExpandedChange === nodePropsNext.onExpandedChange &&
    nodePropsPrev.onSelect === nodePropsNext.onSelect &&
    nodePropsPrev.isSelectable === nodePropsNext.isSelectable
  );
});

// The folders and files of a crate as a tree. It holds no navigation of its own: the owner passes the
// current path and gets each selection.
export default function FileTree({
  crate,
  currentPath,
  onSelect,
  isSelectable,
}: FileTreeProps) {
  const tree = crateTree(crate);

  // The folders above the current path.
  const ancestors = useMemo(() => {
    return currentPath
      ? findPathToNode(tree.children || [], currentPath) ?? []
      : [];
  }, [tree, currentPath]);

  const [expanded, setExpanded] = useState<ReadonlySet<string>>(() => new Set(ancestors));
  // A new current path opens the folders above it and leaves the other folders as the user has them.
  // Another crate starts with only those folders open. React lets a component adjust state while it
  // renders, so the tree never draws the new path inside closed folders.
  const [seen, setSeen] = useState({ tree, ancestors });
  if (seen.tree !== tree) {
    setSeen({ tree, ancestors });
    setExpanded(new Set(ancestors));
  } else if (seen.ancestors !== ancestors) {
    setSeen({ tree, ancestors });
    if (ancestors.some((id) => !expanded.has(id))) {
      setExpanded(new Set([...expanded, ...ancestors]));
    }
  }

  const onExpandedChange = useCallback((id: string, open: boolean) => {
    setExpanded((current) => {
      if (current.has(id) === open) return current;
      const next = new Set(current);
      if (open) next.add(id);
      else next.delete(id);
      return next;
    });
  }, []);

  if (!tree.children || tree.children.length === 0) {
    return <div>No files to display</div>;
  }

  return (
    <TreeView aria-label="File Tree">{tree.children.map(node =>
      <MemoRenderNode
        key={node.id}
        node={node}
        currentPath={currentPath}
        expanded={expanded}
        onExpandedChange={onExpandedChange}
        onSelect={onSelect}
        isSelectable={isSelectable}
      />
    )}</TreeView>
  );
}
