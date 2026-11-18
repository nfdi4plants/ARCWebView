import type { FileTypes, FileViewerContent } from "../../util/types";
import {SkeletonText, UnderlinePanels} from '@primer/react/experimental'
import { useCachedFiles } from "../../hooks/useCachedFiles";
import {useId} from "react";

interface FileViewerContentProps {
  file: FileTypes;
}

interface FileViewerProps {
  nodes: FileViewerContent[]
  // The annotation table whose tab is open. Without a match the first tab is open. The owner holds the
  // selection when it passes onSelectTab. Without onSelectTab the viewer holds it and ignores this prop.
  table?: string
  // Called with the annotation table of the tab the user selects, whichever way they select it (click,
  // Enter, Space, arrow keys, Home or End). A tab that shows no table reports undefined.
  onSelectTab?: (table: string | undefined) => void
}

function FileViewerContent({ file }: FileViewerContentProps) {
  return (
    <div>
      {/* {file && (typeof file === "jsx") && file} */}
      {(typeof file === "string") && <div>{file}</div>}
      {(file instanceof File) &&
        <div>
          <strong>File:</strong> {file.name} ({file.type}, {file.size} bytes)
        </div>
      }
      {(file instanceof Blob && !(file instanceof File)) &&
        <div>
          <strong>Blob:</strong> {file.type} ({file.size} bytes)
        </div>
      }
    </div>
  );
}

export default function FileViewer ({nodes, table, onSelectTab}: FileViewerProps) {

  const id = useId();
  const filteredNodes = nodes.filter(node => !!node.content);

  const { files, loading, errors } = useCachedFiles(
    filteredNodes.map(node => node.node.id),
    async (key: string) => {
      const node = filteredNodes.find(node => node.node.id === key);
      if (!node) {
        throw new Error(`Node with id ${key} not found`);
      }
      return node.content ? await node.content() : await (async () => "none")();
    }
  )

  const tableIndex = table === undefined ? -1 : nodes.findIndex(node => node.table === table);

  // Primer's onChange also reports the changes that keyboard navigation makes, which never call the
  // onSelect of a Tab. The values are tab positions, because two tabs can carry the same name (a table
  // named "Metadata") and Primer rejects duplicate values. A tab is matched and reported by its table, so
  // the metadata tab is never taken for a table of the same name.
  return (
    <div className="border rounded-2">
      {loading
        ? <SkeletonText lines={10} />
        : <UnderlinePanels
            className="border-bottom"
            aria-label="Select a file"
            id={id}
            value={onSelectTab ? String(Math.max(tableIndex, 0)) : undefined}
            onChange={({ value }) => onSelectTab?.(nodes[Number(value)]?.table)}
          >
          {nodes.map((node, index) => (
            <UnderlinePanels.Tab key={index} value={String(index)}>{node.name || node.node.name}</UnderlinePanels.Tab>
          ))}
          {nodes.map((node, index) => (
            <UnderlinePanels.Panel key={index} value={String(index)} className="p-5">
              {
                errors[node.node.id]
                  ? <div className="text-danger">Error loading file: {errors[node.node.id].message}</div>
                  : node.component
                  ? node.component
                  : <FileViewerContent file={files[node.node.id]} />
              }
            </UnderlinePanels.Panel>
          ))}
        </UnderlinePanels>
      }
    </div>
  )
}
