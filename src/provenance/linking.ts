// Maps between the places of the provenance explorer and the places of the file viewer. The functions are
// pure. The viewer passes in what it knows about its file tree.

import { START_NAVIGATION, type Navigation } from './navigation'
import type { ProvenanceDataset, ProvenanceIndex } from './types'

// A place in the file viewer. `table` is the name of an annotation table tab of the isa file at `path`.
export interface ViewerTarget {
  path: string
  table?: string
}

// ARCtrl trims "#" from both ends of a data name and splits the rest at "#" into a path and a selector
// (file.csv#col=1). Only a result with exactly two parts has a selector, so any other name is the path as a
// whole.
export function dataPathOf(nodeId: string): string {
  const trimmed = nodeId.replace(/^#+|#+$/g, '')
  const parts = trimmed.split('#')
  return parts.length === 2 ? parts[0] : trimmed
}

// The file tree drops empty segments, so "a//b" and "a/b/" both mean "a/b".
export function normalizePath(path: string): string {
  return path
    .split('/')
    .filter((segment) => segment !== '')
    .join('/')
}

// A dataset id is its folder with a trailing slash ("assays/X/").
export function datasetFolder(datasetId: string): string {
  return datasetId.endsWith('/') ? datasetId.slice(0, -1) : datasetId
}

export function isaFileOf(dataset: ProvenanceDataset): string {
  return `${datasetFolder(dataset.id)}/isa.${dataset.kind}.xlsx`
}

// The place in the file viewer that belongs to the current level of the explorer. `hasPath` tells whether
// the file tree has a path. The root path "" is always present.
export function graphToViewerTarget(
  nav: Navigation,
  index: ProvenanceIndex,
  hasPath: (path: string) => boolean,
): ViewerTarget | undefined {
  const present = (target: ViewerTarget | undefined) =>
    target !== undefined && (target.path === '' || hasPath(target.path)) ? target : undefined
  // The key of a process is not split. The record holds its dataset and its table name.
  const processTarget = (key: string | undefined): ViewerTarget | undefined => {
    const process = key === undefined ? undefined : index.processByKey.get(key)
    const dataset = process === undefined ? undefined : index.datasetById.get(process.datasetId)
    return process && dataset ? present({ path: isaFileOf(dataset), table: process.name }) : undefined
  }
  switch (nav.view) {
    case 'datasets':
      return { path: '' }
    case 'processes': {
      const dataset = nav.selectedDataset === undefined ? undefined : index.datasetById.get(nav.selectedDataset)
      return dataset ? present({ path: datasetFolder(dataset.id) }) : undefined
    }
    case 'groups':
    case 'detail':
      return processTarget(nav.selectedProcess)
    case 'lineage': {
      const node = nav.selectedNode === undefined ? undefined : index.nodeById.get(nav.selectedNode)
      if (node === undefined) return undefined
      if (node.kind === 'data') {
        // An empty path is no file. The root is not the place of a node.
        const path = normalizePath(dataPathOf(node.id))
        const found = path === '' ? undefined : present({ path })
        if (found) return found
      }
      // A node that is not a data file in the tree opens the table of one of its processes. The selected
      // process counts only when the node belongs to it, because a lineage can be open without a selection
      // or with the selection of another dataset. Otherwise the first process of the node applies.
      const selected = nav.selectedProcess
      return processTarget(selected !== undefined && node.processKeys.includes(selected) ? selected : node.processKeys[0])
    }
  }
}

// Normalized data path -> ids of the data nodes with that path, sorted. One file can have several nodes
// when the ids carry selectors (file.csv#col=1 and file.csv#col=2).
export function buildDataNodePaths(index: ProvenanceIndex): Map<string, string[]> {
  const paths = new Map<string, string[]>()
  for (const node of index.nodes) {
    if (node.kind !== 'data') continue
    const path = normalizePath(dataPathOf(node.id))
    const ids = paths.get(path)
    if (ids) ids.push(node.id)
    else paths.set(path, [node.id])
  }
  for (const ids of paths.values()) ids.sort()
  return paths
}

// The explorer level that belongs to a place in the file viewer, or undefined when the graph has nothing
// for it. The rules run in this order: root, isa file of a dataset, data node, dataset folder.
export function viewerToNavigation(
  path: string,
  table: string | undefined,
  index: ProvenanceIndex,
  dataNodePaths: Map<string, string[]>,
): Navigation | undefined {
  const p = normalizePath(path)
  if (p === '') return START_NAVIGATION

  const isaDataset = index.datasets.find((dataset) => isaFileOf(dataset) === p)
  if (isaDataset) {
    const key = table === undefined ? undefined : `${isaDataset.id}::${table}`
    return key !== undefined && index.processByKey.has(key)
      ? { view: 'groups', selectedDataset: isaDataset.id, selectedProcess: key }
      : { view: 'processes', selectedDataset: isaDataset.id }
  }

  // A file inside a data folder has no node of its own, so the search walks up to the folder that has one.
  const segments = p.split('/')
  for (let length = segments.length; length >= 1; length--) {
    const candidate = segments.slice(0, length).join('/')
    const ids = dataNodePaths.get(candidate)
    if (!ids) continue
    // The plain id is the one without a selector. It can still hold "//" or a trailing "/", so the search
    // compares its normalized form. Several selector variants without a plain node leave no single node to pick. The
    // search stops there and the dataset folder rule applies.
    const id = ids.find((each) => normalizePath(each) === candidate) ?? (ids.length === 1 ? ids[0] : undefined)
    if (id === undefined) break
    return { view: 'lineage', selectedNode: id }
  }

  const folderDataset = index.datasets.find((dataset) => {
    const folder = datasetFolder(dataset.id)
    return p === folder || p.startsWith(`${folder}/`)
  })
  return folderDataset ? { view: 'processes', selectedDataset: folderDataset.id } : undefined
}
