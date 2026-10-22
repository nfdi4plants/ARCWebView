import type { ContentType, FileTypes, FileViewerContent } from "../../util/types";
import {SkeletonText, UnderlinePanels} from '@primer/react/experimental'
import { useCachedFiles } from "../../hooks/useCachedFiles";
import {lazy, Suspense} from "react";
const MarkdownRender = lazy(() => import("../MarkdownRender"));

interface FileViewerContentProps {
  file: FileTypes;
  contentType: ContentType;
}

interface FileViewerProps {
  nodes: FileViewerContent[]
  // The name of the tab that is open when the viewer mounts. Without a match the first tab opens.
  initialTable?: string
  // Called with the name of the tab that becomes visible, whichever way the user changes it (click, Enter,
  // Space, arrow keys, Home or End). A tab without a name reports undefined.
  onSelectTab?: (name: string | undefined) => void
}

function FileViewerContent({ file, contentType }: FileViewerContentProps) {
  return (
    <div>
      {/* {file && (typeof file === "jsx") && file} */}
      {file && (typeof file === "string") &&
        contentType === "markdown" 
          ? <Suspense fallback={<SkeletonText lines={10} />}><MarkdownRender content={file as string} /></Suspense>
          : <div>{file as string}</div>
      }
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

export default function FileViewer ({nodes, initialTable, onSelectTab}: FileViewerProps) {

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

  const initialIndex = initialTable === undefined ? -1 : nodes.findIndex(node => node.name === initialTable);

  // UnderlinePanels keeps the selection itself. Its onChange also reports the changes that keyboard
  // navigation makes, which never call the onSelect of a Tab. The values are tab positions, because two
  // tabs can carry the same name (a table named "Metadata") and Primer rejects duplicate values.
  return (
    <div className="border rounded-2">
      {loading  
        ? <SkeletonText lines={10} />
        : <UnderlinePanels
            className="border-bottom"
            aria-label="Select a file"
            id="panels"
            defaultValue={initialIndex >= 0 ? String(initialIndex) : undefined}
            onChange={({ value }) => onSelectTab?.(nodes[Number(value)]?.name)}
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
                  : <FileViewerContent
                    file={files[node.node.id]}
                    contentType={node.contentType || "text"}
                  />
              }
            </UnderlinePanels.Panel>
          ))}
        </UnderlinePanels>
      }
    </div>
  )
}