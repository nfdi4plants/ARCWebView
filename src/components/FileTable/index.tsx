import { lazy, Suspense, useState } from 'react'
import {IconButton, Link, Spinner, Truncate, useResponsiveValue } from '@primer/react'
import {Table, DataTable, Dialog} from '@primer/react/experimental'
import { JsonController } from '@nfdi4plants/arctrl'
import { type TreeNode } from '../../util/types'
import Icons from '../Icons'

const FileProvenanceViewer = lazy(() => import('../FileProvenanceViewer'))

type LDGraph = ReturnType<typeof JsonController.LDGraph.fromROCrateJsonString>;


function sortTreeNode(node: TreeNode | undefined): TreeNode[] {
  if (!node) return [];
  if (!node.children) return [];

  return [...node.children].sort((a, b) => {
    if (a.type === b.type) return a.name.localeCompare(b.name);
    return a.type === "folder" ? -1 : 1;
  });
}

interface HeaderProps {
  navigateTo: (path: string) => void;
  responsiveValue: "narrow" | "regular" | "wide"
  onShowProvenance?: (file: TreeNode) => void;
}

const mkHeader = ({navigateTo, responsiveValue, onShowProvenance}: HeaderProps) => {
    return [
      {
        id: 'icon',
        width: 'auto',
        minWidth: '50px',
        header: () => (
            <div
              style={{
                clipPath: 'inset(50%)',
                height: '1px',
                overflow: 'hidden',
                position: 'absolute',
                whiteSpace: 'nowrap',
                width: '1px',
              }}
            >
              icon
            </div>
        ),
        renderCell: (row: TreeNode) => {
          const isFile = row.type === 'file';
          const label = isFile ? 'File' : 'Folder';
          const isXlsx = row.name.endsWith('.xlsx');

          return (
            <span
              aria-label={label}
              // title={label}
              role="img"
            >
              {isXlsx ? <Icons.XlsxIcon /> : isFile ? <Icons.FileIcon aria-hidden="true" /> : <Icons.FolderIcon aria-hidden="true" />}
            </span>
          );
        }
      },
      {
        header: 'Name',
        field: 'name',
        rowHeader: true,
        renderCell: (row: TreeNode) => {
          return (
            <Link href="#" style={{color: 'inherit'}} onClick={() => navigateTo(row.id)}>
              <Truncate title={row.name} maxWidth="200px" expandable>{row.name}</Truncate >
            </Link>
          );
        }
      },
      ...(
        responsiveValue !== 'narrow' ? [{
          header: 'Path',
          field: 'id',
          renderCell: (row: TreeNode) => {
            return (
              <div style={{width: "content-min"}}>
                <Truncate title={row.id} maxWidth="200px">{row.id}</Truncate >
              </div>
            );
          }
        }] : []
      ),
      {
        id: 'fileSize',
        width: 'auto',
        minWidth: '50px',
        align: 'end',
        header: "File Size",
        renderCell: (row: TreeNode) => {
          return (
            row.contentSize
              ? <div style={{width: "content-min"}}>
                <Truncate title={row.contentSize} maxWidth="200px">{row.contentSize}</Truncate >
              </div>
              : null
          )
        },
      },
      {
        id: 'provenance',
        width: 'auto',
        minWidth: '50px',
        align: 'end',
        header: 'Provenance',
        renderCell: (row: TreeNode) => {
          return row.sha256 ? (
            <button
              aria-label={`Show provenance: ${row.name}`}
              title={`Show provenance: ${row.name}`}
              onClick={() => onShowProvenance?.(row)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                fontSize: '1.2em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              🔗
            </button>
          ) : null;
        },
      },
      {
        id: 'actions',
        width: 'auto',
        minWidth: '50px',
        align: 'end',
        header: 'Download',
        renderCell: (row: TreeNode) => {
          return (
            row.sha256
              ? <IconButton
                as="a"
                href={`https://lfs-resolver.nfdi4plants.org/presigned-url/?oid=${row.sha256}`}
                target='_blank'
                aria-label={`Download: ${row.name}`}
                title={`Download: ${row.name}`}
                icon={Icons.DownloadIcon}
                variant="invisible"
              />
              : null
          )
        },
      }
    ]
}

interface FileTableProps {
  loading: boolean;
  currentTreeNode: TreeNode | undefined;
  navigateTo: (path: string) => void;
  ldGraph?: LDGraph;
}

export default function FileTable({ loading, currentTreeNode, navigateTo, ldGraph }: FileTableProps) {
  const [showProvenance, setShowProvenance] = useState(false);
  const [selectedFileForProvenance, setSelectedFileForProvenance] = useState<TreeNode | undefined>();

  const handleShowProvenance = (file: TreeNode) => {
    setSelectedFileForProvenance(file);
    setShowProvenance(true);
  };

  const headerVal = useResponsiveValue(
    {
      narrow: mkHeader({ navigateTo, responsiveValue: 'narrow', onShowProvenance: handleShowProvenance }),
      regular: mkHeader({ navigateTo, responsiveValue: 'regular', onShowProvenance: handleShowProvenance }),
      wide: mkHeader({ navigateTo, responsiveValue: 'wide', onShowProvenance: handleShowProvenance }),
    },
    mkHeader({ navigateTo, responsiveValue: 'regular', onShowProvenance: handleShowProvenance })
  )

  return (
    <>
      <Table.Container>
        {/* <Table.Actions>
          <Button>Action</Button>
        </Table.Actions> */}
        { loading
          ? <Table.Skeleton
            aria-labelledby="repositories-loading"
            cellPadding="condensed"
            rows={10}
            //@ts-expect-error Too lazy to figure out why exactly the component is unhappy with the type
            columns={headerVal}
          />
          : <DataTable
            aria-labelledby="repositories-default-headerAction"
            aria-describedby="repositories-subtitle-headerAction"
            cellPadding="condensed"
            data={sortTreeNode(currentTreeNode)}
            //@ts-expect-error Too lazy to figure out why exactly the component is unhappy with the type
            columns={headerVal}
          />
        }
      </Table.Container>

      {showProvenance && selectedFileForProvenance && (
        <Dialog
          title="File Provenance"
          subtitle={selectedFileForProvenance.name}
          onClose={() => setShowProvenance(false)}
          width="xlarge"
          height="large"
        >
          <Suspense fallback={<div style={{ padding: '24px', textAlign: 'center' }}><Spinner /></div>}>
            <FileProvenanceViewer
              fileNode={selectedFileForProvenance}
              ldGraph={ldGraph}
            />
          </Suspense>
        </Dialog>
      )}
    </>
  )
}
