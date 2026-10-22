import type {
  Annotation,
  DatasetGraph,
  DetailEdge,
  DetailNode,
  GroupGraph,
  GroupGraphNode,
  IoKind,
  LineageGraph,
  ProcessDetailGraph,
  ProcessGraph,
  ProvenanceIndex,
  ProvenanceRow,
} from '../../../provenance/types'
import { lineageRows } from '../../../provenance/queries'
import type { CanvasColor, CanvasEdge, CanvasNode, CanvasPill, GraphCanvasProps } from '../GraphCanvas/types'
import type { ProvenanceView } from './Legend'

// One pure mapping per view, from the result of a provenance query to the generic canvas input.

export type CanvasGraph = Pick<GraphCanvasProps, 'nodes' | 'edges'>

export type LineageCanvas = CanvasGraph & { centerNodeId: string }

export const LINEAGE_NODE_LIMIT = 80

const IO_KIND_ORDER: IoKind[] = ['source', 'sample', 'material', 'data']

function plural(count: number, word: string): string {
  return `${count} ${word}${count === 1 ? '' : 's'}`
}

function valueText(annotation: Annotation): string {
  const text = [annotation.value, annotation.unit].filter(Boolean).join(' ')
  return text || '(empty)'
}

function propertyPills(annotations: Annotation[], prefix: string): CanvasPill[] {
  return annotations.map((annotation, index) => ({
    key: `${prefix}${index}:${annotation.category}:${annotation.name}`,
    kind: 'property',
    name: annotation.name,
    value: annotation.value,
    unit: annotation.unit,
    category: annotation.category,
  }))
}

// Datasets and processes connect through shared nodes, and the edge shows how many.
function countEdges(edges: DatasetGraph['edges']): CanvasEdge[] {
  return edges.map((edge) => {
    const count = edge.sharedNodeIds.length
    const tooltip = count === 1 ? '1 shared input or output' : `${count} shared inputs and outputs`
    return {
      id: edge.id,
      from: edge.from,
      to: edge.to,
      color: 'neutral',
      pills: [{ key: 'count', kind: 'count', value: String(count), tooltip }],
    }
  })
}

export function datasetsToCanvas(graph: DatasetGraph): CanvasGraph {
  return {
    nodes: graph.nodes.map((node) => ({
      id: node.id,
      title: node.label,
      color: node.kind,
      tooltip: `${node.label} (${node.kind})`,
      ariaLabel: `${node.label}, ${node.kind}, select to show its processes`,
    })),
    edges: countEdges(graph.edges),
  }
}

export function processesToCanvas(graph: ProcessGraph): CanvasGraph {
  return {
    nodes: graph.nodes.map((node): CanvasNode => {
      const common = {
        id: node.key,
        title: node.label,
        color: node.datasetKind,
        tooltip: `${node.label} (${node.datasetLabel})`,
      }
      if (node.external) {
        return {
          ...common,
          subtitle: node.datasetLabel,
          dashed: true,
          ariaLabel: `${node.label}, ${node.datasetLabel}, other dataset, select to show its groups`,
        }
      }
      const rows = plural(node.rowCount, 'row')
      return {
        ...common,
        subtitle: rows,
        ariaLabel: `${node.label}, ${node.datasetLabel}, ${rows}, select to show its groups`,
      }
    }),
    edges: countEdges(graph.edges),
  }
}

// "3 samples · 2 data". Only the word "data" has no plural form.
function kindSummary(counts: GroupGraphNode['kindCounts']): string {
  const parts: string[] = []
  for (const kind of IO_KIND_ORDER) {
    const count = counts[kind] ?? 0
    if (count > 0) parts.push(kind === 'data' ? `${count} data` : plural(count, kind))
  }
  return parts.join(' · ')
}

export function groupsToCanvas(graph: GroupGraph): CanvasGraph {
  return {
    nodes: graph.nodes.map((node): CanvasNode => {
      const summary = kindSummary(node.kindCounts)
      return {
        id: node.id,
        title: node.label,
        ...(summary ? { subtitle: summary } : {}),
        color: graph.datasetKind,
        tooltip: summary ? `${node.label} (${summary})` : node.label,
        ariaLabel: `${node.label}${summary ? `, ${summary}` : ''}, select to list its nodes`,
      }
    }),
    edges: graph.edges.map((edge) => ({
      id: edge.id,
      from: edge.from,
      to: edge.to,
      color: graph.datasetKind,
      pills: propertyPills(edge.differing, 'd'),
      morePills: propertyPills(edge.shared, 's'),
    })),
  }
}

function annotationKey(annotation: Annotation): string {
  return JSON.stringify([annotation.category, annotation.name, annotation.value, annotation.unit])
}

// Annotations that every node of the graph carries identically. A single node has nothing to
// compare against, so all of its annotations stay as pills.
function commonAnnotationKeys(nodes: DetailNode[]): Set<string> {
  if (nodes.length < 2) return new Set()
  const common = new Set(nodes[0].annotations.map(annotationKey))
  for (const node of nodes.slice(1)) {
    const own = new Set(node.annotations.map(annotationKey))
    for (const key of common) if (!own.has(key)) common.delete(key)
  }
  return common
}

function categoryLabel(annotation: Annotation): string {
  return annotation.category.charAt(0).toUpperCase() + annotation.category.slice(1)
}

function detailNodes(
  nodes: DetailNode[],
  color: CanvasColor,
  describe: (node: DetailNode) => string,
  selectedId?: string,
): CanvasNode[] {
  const common = commonAnnotationKeys(nodes)
  // A node shows its kind only in a graph where the kinds differ.
  const showKind = new Set(nodes.map((node) => node.kind)).size > 1
  return nodes.map((node) => {
    const moved = node.annotations.filter((annotation) => common.has(annotationKey(annotation)))
    const own = node.annotations.filter((annotation) => !common.has(annotationKey(annotation)))
    const movedText = moved.map((a) => `${categoryLabel(a)} · ${a.name}: ${valueText(a)}`).join(' · ')
    const tooltip = `${node.id} (${node.kind})`
    return {
      id: node.id,
      title: node.id,
      ...(showKind ? { subtitle: node.kind } : {}),
      color,
      mono: true,
      ...(selectedId === undefined ? {} : { selected: node.id === selectedId }),
      emphasized: node.emphasized,
      pills: propertyPills(own, 'p'),
      tooltip: movedText ? `${tooltip}: ${movedText}` : tooltip,
      ariaLabel: `${node.id}, ${node.kind}${movedText ? `, ${movedText}` : ''}${describe(node)}`,
    }
  })
}

function detailEdges(
  edges: DetailEdge[],
  showProcess: boolean,
  isHighlighted?: (edge: DetailEdge) => boolean,
): CanvasEdge[] {
  return edges.map((edge) => {
    const processPill: CanvasPill[] = showProcess ? [{ key: 'process', kind: 'process', value: edge.processName, tooltip: `Process ${edge.processName}` }] : []
    return {
      id: edge.id,
      from: edge.from,
      to: edge.to,
      color: edge.datasetKind,
      ...(isHighlighted ? { highlighted: isHighlighted(edge) } : {}),
      pills: [...processPill, ...propertyPills(edge.differing, 'd')],
      morePills: propertyPills(edge.shared, 's'),
    }
  })
}

export function detailToCanvas(graph: ProcessDetailGraph): CanvasGraph {
  // All edges of one process belong to one dataset, so the first edge gives the nodes their color.
  const color: CanvasColor = graph.edges[0]?.datasetKind ?? 'neutral'
  return {
    nodes: detailNodes(
      graph.nodes,
      color,
      (node) => `${node.emphasized ? `, member of ${graph.group.label}` : ''}, select to show its lineage`,
    ),
    edges: detailEdges(graph.edges, false),
  }
}

export function lineageToCanvas(graph: LineageGraph, selectedProcess?: string): LineageCanvas {
  const showProcess = new Set(graph.edges.map((edge) => edge.processKey)).size > 1
  return {
    nodes: detailNodes(
      graph.nodes,
      'neutral',
      (node) => (node.id === graph.nodeId ? ', selected lineage node' : ', select to center the lineage on it'),
      graph.nodeId,
    ),
    edges: detailEdges(graph.edges, showProcess, (edge) => edge.processKey === selectedProcess),
    centerNodeId: graph.nodeId,
  }
}

// Keeps the nodes closest to the selected one. The distance ignores edge direction, and nodes
// at equal distance keep the order of the graph.
export function limitLineage(
  graph: LineageGraph,
  max: number = LINEAGE_NODE_LIMIT,
): { graph: LineageGraph; total: number } {
  const total = graph.nodes.length
  if (total <= max) return { graph, total }

  const neighbors = new Map<string, string[]>()
  const link = (a: string, b: string) => {
    const list = neighbors.get(a)
    if (list) list.push(b)
    else neighbors.set(a, [b])
  }
  for (const { from, to } of graph.edges) {
    link(from, to)
    link(to, from)
  }
  const distance = new Map([[graph.nodeId, 0]])
  const queue = [graph.nodeId]
  for (let i = 0; i < queue.length; i++) {
    for (const next of neighbors.get(queue[i]) ?? []) {
      if (distance.has(next)) continue
      distance.set(next, (distance.get(queue[i]) ?? 0) + 1)
      queue.push(next)
    }
  }

  const kept = new Set(
    graph.nodes
      .map((node, order) => ({ id: node.id, order, distance: distance.get(node.id) ?? Infinity }))
      .sort((a, b) => a.distance - b.distance || a.order - b.order)
      .slice(0, max)
      .map((entry) => entry.id),
  )
  return {
    total,
    graph: {
      ...graph,
      nodes: graph.nodes.filter((node) => kept.has(node.id)),
      edges: graph.edges.filter((edge) => kept.has(edge.from) && kept.has(edge.to)),
    },
  }
}

// Rows that are not finished

// The rows of a view that have no output or no input yet. A row with neither counts in both.
// Work in progress ARCs have such rows. They keep their nodes but get no edge.
export interface IncompleteRows {
  missingOutputs: number
  missingInputs: number
}

// The level of a view together with the ids selected on the way down to it.
export interface ViewSelection {
  view: ProvenanceView
  selectedDataset?: string
  selectedProcess?: string
  selectedGroup?: string
}

export function countIncomplete(rows: Iterable<ProvenanceRow>): IncompleteRows {
  let missingOutputs = 0
  let missingInputs = 0
  for (const row of rows) {
    if (row.outputs.length === 0) missingOutputs++
    if (row.inputs.length === 0) missingInputs++
  }
  return { missingOutputs, missingInputs }
}

function lookup<T>(map: Map<string, T>, key: string | undefined): T | undefined {
  return key === undefined ? undefined : map.get(key)
}

// The incomplete rows that belong to a view. The datasets view counts all rows. The processes view counts the
// rows of the dataset, and the groups view counts the rows of the process. The detail view counts the rows that
// the detail graph shows, the rows of the process that have a member of the selected group on the side of the group.
// The lineage view counts the rows of the walk from the node of the lineage graph that touch a node of that
// graph. The caller passes the graph after the cut. An id that the index does not know counts no row.
export function incompleteRows(
  index: ProvenanceIndex,
  selection: ViewSelection,
  lineageGraph?: LineageGraph,
): IncompleteRows {
  const rowsOf = (rowIds: string[]) => rowIds.flatMap((id) => index.rowById.get(id) ?? [])

  switch (selection.view) {
    case 'datasets':
      return countIncomplete(index.rows)
    case 'processes':
      return countIncomplete(index.rows.filter((row) => row.datasetId === selection.selectedDataset))
    case 'groups': {
      const process = lookup(index.processByKey, selection.selectedProcess)
      return countIncomplete(process ? rowsOf(process.rowIds) : [])
    }
    case 'detail': {
      const process = lookup(index.processByKey, selection.selectedProcess)
      const group = lookup(index.groupById, selection.selectedGroup)
      if (!process || !group) return countIncomplete([])
      const members = new Set(group.nodeIds)
      return countIncomplete(rowsOf(process.rowIds).filter((row) => row[group.side].some((id) => members.has(id))))
    }
    case 'lineage': {
      if (!lineageGraph) return countIncomplete([])
      const shown = new Set(lineageGraph.nodes.map((node) => node.id))
      return countIncomplete(
        lineageRows(index, lineageGraph.nodeId).filter(
          (row) => row.inputs.some((id) => shown.has(id)) || row.outputs.some((id) => shown.has(id)),
        ),
      )
    }
  }
}

// The note for unfinished rows, such as "3 rows have no output yet." Empty when no row is unfinished.
export function incompleteNote(counts: IncompleteRows): string {
  const sentence = (count: number, missing: string) =>
    count === 0 ? null : count === 1 ? `1 row has no ${missing} yet.` : `${count} rows have no ${missing} yet.`
  return [sentence(counts.missingOutputs, 'output'), sentence(counts.missingInputs, 'input')]
    .filter((text): text is string => text !== null)
    .join(' ')
}
