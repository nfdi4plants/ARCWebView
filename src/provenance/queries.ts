import type {
  Annotation,
  DatasetGraph,
  DatasetKind,
  DetailEdge,
  DetailNode,
  GroupGraph,
  GroupGraphNode,
  IoKind,
  LineageGraph,
  ProcessDetailGraph,
  ProcessGraph,
  ProcessGraphNode,
  ProvenanceIndex,
  ProvenanceProcess,
  ProvenanceRow,
} from './types'

// Pure functions from a ProvenanceIndex to the graph data of each detail level.
// None of them mutates the index.

type SharedNodeEdge = DatasetGraph['edges'][number]

interface RowLink {
  row: ProvenanceRow
  from: string
  to: string
}

// Annotations have no id. Two annotations are the same when all five fields match.
function annotationKey(annotation: Annotation): string {
  const { name, value, unit, accession, category } = annotation
  return JSON.stringify([name, value, unit, accession, category])
}

// The index lists a dataset for every row, so the 'run' fallback only covers a hand-built index.
function datasetKindOf(index: ProvenanceIndex, datasetId: string): DatasetKind {
  return index.datasetById.get(datasetId)?.kind ?? 'run'
}

// Inputs and outputs without a node entry count as data.
function ioKindOf(index: ProvenanceIndex, nodeId: string): IoKind {
  return index.nodeById.get(nodeId)?.kind ?? 'data'
}

// Edges between the owners of producing and consuming rows, with the distinct nodes passed along.
// Per node the distinct owners are collected first and crossed afterwards, so N producing rows
// and N consuming rows cost about 2N lookups.
function sharedNodeEdges(
  index: ProvenanceIndex,
  ownerOf: (row: ProvenanceRow) => string,
  keep: (from: string, to: string) => boolean,
): SharedNodeEdge[] {
  const ownersOf = (rowIds: string[] | undefined) => {
    const owners = new Set<string>()
    for (const rowId of rowIds ?? []) {
      const row = index.rowById.get(rowId)
      if (row) owners.add(ownerOf(row))
    }
    return owners
  }

  const edges = new Map<string, { id: string; from: string; to: string; shared: Set<string> }>()
  for (const [nodeId, producerIds] of index.producedBy) {
    const consumers = ownersOf(index.consumedBy.get(nodeId))
    for (const from of ownersOf(producerIds)) {
      for (const to of consumers) {
        if (from === to || !keep(from, to)) continue
        const id = `${from}->${to}`
        let edge = edges.get(id)
        if (!edge) {
          edge = { id, from, to, shared: new Set() }
          edges.set(id, edge)
        }
        edge.shared.add(nodeId)
      }
    }
  }
  return Array.from(edges.values(), ({ id, from, to, shared }) => ({ id, from, to, sharedNodeIds: [...shared] }))
}

export function datasetGraph(index: ProvenanceIndex): DatasetGraph {
  return {
    nodes: index.datasets.map((dataset) => ({ id: dataset.id, kind: dataset.kind, label: dataset.identifier })),
    edges: sharedNodeEdges(
      index,
      (row) => row.datasetId,
      () => true,
    ),
  }
}

export function processGraph(index: ProvenanceIndex, datasetId: string): ProcessGraph | undefined {
  const dataset = index.datasetById.get(datasetId)
  if (!dataset) return undefined

  const own = new Set(index.processes.filter((process) => process.datasetId === datasetId).map((process) => process.key))
  const edges = sharedNodeEdges(
    index,
    (row) => row.processKey,
    (from, to) => own.has(from) || own.has(to),
  )
  const connected = new Set(edges.flatMap((edge) => [edge.from, edge.to]))

  const nodes: ProcessGraphNode[] = index.processes
    .filter((process) => own.has(process.key) || connected.has(process.key))
    .map((process) => {
      const processDataset = index.datasetById.get(process.datasetId)
      return {
        key: process.key,
        label: process.name,
        datasetId: process.datasetId,
        datasetKind: processDataset?.kind ?? 'run',
        datasetLabel: processDataset?.identifier ?? process.datasetId,
        external: !own.has(process.key),
        rowCount: process.rowIds.length,
      }
    })
  return { dataset, nodes, edges }
}

export function processGroups(index: ProvenanceIndex, processKey: string): GroupGraph | undefined {
  const process = index.processByKey.get(processKey)
  if (!process) return undefined

  const signatures = new Map(process.signatures.map((signature) => [signature.id, signature]))
  const nodes: GroupGraphNode[] = [...process.inputGroups, ...process.outputGroups].map((group) => {
    const kindCounts: GroupGraphNode['kindCounts'] = {}
    for (const nodeId of group.nodeIds) {
      const kind = ioKindOf(index, nodeId)
      kindCounts[kind] = (kindCounts[kind] ?? 0) + 1
    }
    return { id: group.id, side: group.side, label: group.label, kindCounts }
  })
  const edges = process.groupEdges.map((edge) => {
    const signature = signatures.get(edge.signatureId)
    const differing = signature?.distinguishing ?? []
    const differingKeys = new Set(differing.map(annotationKey))
    const shared = (signature?.annotations ?? []).filter((annotation) => !differingKeys.has(annotationKey(annotation)))
    return { id: edge.id, from: edge.from, to: edge.to, differing, shared }
  })
  return { process, datasetKind: datasetKindOf(index, process.datasetId), nodes, edges }
}

// Splits the step annotations of the edges of one process. An annotation is shared when every
// list has it. The result has one entry per input list, in the same order, and keeps the
// annotation order of each list. A single list is shared completely.
export function splitSharedAnnotations(lists: Annotation[][]): { differing: Annotation[]; shared: Annotation[] }[] {
  if (lists.length === 0) return []
  const keySets = lists.map((list) => new Set(list.map(annotationKey)))
  const common = new Set([...keySets[0]].filter((key) => keySets.every((keys) => keys.has(key))))
  return lists.map((list) => {
    const differing: Annotation[] = []
    const shared: Annotation[] = []
    for (const annotation of list) (common.has(annotationKey(annotation)) ? shared : differing).push(annotation)
    return { differing, shared }
  })
}

// One edge per link. The shared/differing split is computed per process within the given links.
function toDetailEdges(index: ProvenanceIndex, links: RowLink[]): DetailEdge[] {
  const positionsByProcess = new Map<string, number[]>()
  links.forEach(({ row }, position) => {
    const positions = positionsByProcess.get(row.processKey)
    if (positions) positions.push(position)
    else positionsByProcess.set(row.processKey, [position])
  })

  const splits = new Array<ReturnType<typeof splitSharedAnnotations>[number]>(links.length)
  for (const positions of positionsByProcess.values()) {
    const result = splitSharedAnnotations(positions.map((position) => links[position].row.annotations))
    positions.forEach((position, i) => {
      splits[position] = result[i]
    })
  }

  return links.map(({ row, from, to }, position) => ({
    id: `${row.id}|${from}|${to}`,
    from,
    to,
    processKey: row.processKey,
    processName: index.processByKey.get(row.processKey)?.name ?? row.processKey,
    datasetKind: datasetKindOf(index, row.datasetId),
    differing: splits[position].differing,
    shared: splits[position].shared,
  }))
}

function toDetailNode(index: ProvenanceIndex, id: string, emphasized: boolean): DetailNode {
  const node = index.nodeById.get(id)
  return { id, kind: node?.kind ?? 'data', annotations: node?.annotations ?? [], emphasized }
}

// IoGroup has no reference to its process, so the group is looked up through the processes.
function processOfGroup(index: ProvenanceIndex, groupId: string): ProvenanceProcess | undefined {
  return index.processes.find(
    (process) =>
      process.inputGroups.some((group) => group.id === groupId) ||
      process.outputGroups.some((group) => group.id === groupId),
  )
}

export function processDetail(index: ProvenanceIndex, groupId: string): ProcessDetailGraph | undefined {
  const group = index.groupById.get(groupId)
  const process = group && processOfGroup(index, groupId)
  if (!group || !process) return undefined

  const members = new Set(group.nodeIds)
  const memberSide = group.side
  const links: RowLink[] = []
  const counterparts = new Set<string>()

  for (const rowId of process.rowIds) {
    const row = index.rowById.get(rowId)
    if (!row || !row[memberSide].some((id) => members.has(id))) continue
    // Only the member side is narrowed to the group. The other side keeps every node of the row.
    const inputs = memberSide === 'inputs' ? row.inputs.filter((id) => members.has(id)) : row.inputs
    const outputs = memberSide === 'outputs' ? row.outputs.filter((id) => members.has(id)) : row.outputs
    for (const id of memberSide === 'inputs' ? row.outputs : row.inputs) counterparts.add(id)
    for (const from of inputs) for (const to of outputs) if (from !== to) links.push({ row, from, to })
  }

  const nodes = [
    ...group.nodeIds.map((id) => toDetailNode(index, id, true)),
    ...Array.from(counterparts)
      .filter((id) => !members.has(id))
      .map((id) => toDetailNode(index, id, false)),
  ]
  return { process, group, nodes, edges: toDetailEdges(index, links) }
}

// Walks from the start node along producing rows (upstream) or consuming rows (downstream).
// The visited set stops the walk on cycles.
function walk(
  index: ProvenanceIndex,
  startId: string,
  rowIdsByNode: Map<string, string[]>,
  farSide: 'inputs' | 'outputs',
): { nodeIds: Set<string>; rows: Map<string, ProvenanceRow> } {
  const nodeIds = new Set([startId])
  const rows = new Map<string, ProvenanceRow>()
  const queue = [startId]
  for (let i = 0; i < queue.length; i++) {
    for (const rowId of rowIdsByNode.get(queue[i]) ?? []) {
      const row = index.rowById.get(rowId)
      if (!row) continue
      rows.set(row.id, row)
      for (const id of row[farSide]) {
        if (nodeIds.has(id)) continue
        nodeIds.add(id)
        queue.push(id)
      }
    }
  }
  return { nodeIds, rows }
}

// The rows of the upstream walk, then the rows of the downstream walk, each row once.
function walkedRows(upstream: { rows: Map<string, ProvenanceRow> }, downstream: { rows: Map<string, ProvenanceRow> }) {
  return [...new Map([...upstream.rows, ...downstream.rows]).values()]
}

// The rows that the lineage of a node walks over, in the order the lineage uses them. A row that only
// shares a node with the walk, such as another consumer of an upstream node, is not among them.
// A node that the index does not know has no rows.
export function lineageRows(index: ProvenanceIndex, nodeId: string): ProvenanceRow[] {
  return walkedRows(walk(index, nodeId, index.producedBy, 'inputs'), walk(index, nodeId, index.consumedBy, 'outputs'))
}

export function lineage(index: ProvenanceIndex, nodeId: string): LineageGraph | undefined {
  if (!index.nodeById.has(nodeId)) return undefined

  const upstream = walk(index, nodeId, index.producedBy, 'inputs')
  const downstream = walk(index, nodeId, index.consumedBy, 'outputs')
  const nodeIds = new Set([nodeId, ...upstream.nodeIds, ...downstream.nodeIds])

  const links: RowLink[] = []
  for (const row of walkedRows(upstream, downstream)) {
    for (const from of row.inputs) {
      if (!nodeIds.has(from)) continue
      // A row whose input and output share a name would draw as a loop on one node.
      for (const to of row.outputs) if (to !== from && nodeIds.has(to)) links.push({ row, from, to })
    }
  }

  return {
    nodeId,
    nodes: Array.from(nodeIds, (id) => toDetailNode(index, id, id === nodeId)),
    edges: toDetailEdges(index, links),
  }
}
