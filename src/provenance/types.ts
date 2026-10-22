// Plain data describing the provenance graph of one ARC. It is built from the
// parsed ARC and never holds arctrl objects.

export type DatasetKind = 'study' | 'assay' | 'run'

export type IoKind = 'source' | 'sample' | 'material' | 'data'

export type AnnotationCategory =
  | 'characteristic'
  | 'factor'
  | 'parameter'
  | 'component'
  | 'protocol'
  | 'performer'
  | 'date'
  | 'comment'

export interface Annotation {
  name: string
  value: string | null
  unit: string | null
  accession: string | null
  category: AnnotationCategory
}

export interface ProvenanceDataset {
  id: string
  kind: DatasetKind
  identifier: string
}

// One input or output. Inputs and outputs connect across the whole ARC by
// their name (a leading "./" is removed), so `id` is that normalized name.
export interface ProvenanceNode {
  id: string
  kind: IoKind
  // Characteristics and factors of the node, merged over all its occurrences.
  annotations: Annotation[]
  datasetIds: string[]
  processKeys: string[]
}

// One row of an annotation table.
export interface ProvenanceRow {
  id: string
  name: string
  processKey: string
  datasetId: string
  inputs: string[]
  outputs: string[]
  // Annotations of the step itself: protocol, parameters, components,
  // performer, date and comments.
  annotations: Annotation[]
}

// Rows of one process with identical annotations on their own step
// (step annotations plus input characteristics and output factors).
export interface ProcessSignature {
  id: string
  rowIds: string[]
  annotations: Annotation[]
  // Annotations whose values differ between the signatures of the process.
  distinguishing: Annotation[]
}

// Inputs (or outputs) of one process that take part in exactly the same set
// of signatures.
export interface IoGroup {
  id: string
  side: 'inputs' | 'outputs'
  label: string
  nodeIds: string[]
  signatureIds: string[]
}

export interface GroupEdge {
  id: string
  from: string
  to: string
  signatureId: string
  rowIds: string[]
}

// One annotation table of a dataset.
export interface ProvenanceProcess {
  key: string
  name: string
  datasetId: string
  rowIds: string[]
  signatures: ProcessSignature[]
  inputGroups: IoGroup[]
  outputGroups: IoGroup[]
  groupEdges: GroupEdge[]
}

export interface ProvenanceIndex {
  datasets: ProvenanceDataset[]
  processes: ProvenanceProcess[]
  rows: ProvenanceRow[]
  nodes: ProvenanceNode[]
  datasetById: Map<string, ProvenanceDataset>
  processByKey: Map<string, ProvenanceProcess>
  rowById: Map<string, ProvenanceRow>
  nodeById: Map<string, ProvenanceNode>
  groupById: Map<string, IoGroup>
  // node id -> ids of the rows that produce or consume it
  producedBy: Map<string, string[]>
  consumedBy: Map<string, string[]>
}

// Results of the query functions, one per detail level. They hold plain data
// only (no Map or Set).

export interface DatasetGraph {
  nodes: { id: string; kind: DatasetKind; label: string }[]
  edges: { id: string; from: string; to: string; sharedNodeIds: string[] }[]
}

export interface ProcessGraphNode {
  key: string
  label: string
  datasetId: string
  datasetKind: DatasetKind
  datasetLabel: string
  external: boolean
  rowCount: number
}

export interface ProcessGraph {
  dataset: ProvenanceDataset
  nodes: ProcessGraphNode[]
  edges: { id: string; from: string; to: string; sharedNodeIds: string[] }[]
}

export interface GroupGraphNode {
  id: string
  side: 'inputs' | 'outputs'
  label: string
  kindCounts: Partial<Record<IoKind, number>>
}

export interface GroupGraph {
  process: ProvenanceProcess
  datasetKind: DatasetKind
  nodes: GroupGraphNode[]
  // `differing` are the signature's distinguishing annotations, `shared` the rest.
  edges: { id: string; from: string; to: string; differing: Annotation[]; shared: Annotation[] }[]
}

export interface DetailNode {
  id: string
  kind: IoKind
  annotations: Annotation[]
  // True for members of the selected group (process detail) or the selected node (lineage).
  emphasized: boolean
}

// One row as an edge. `differing` holds the step annotations that vary
// between the edges of the same process in this graph, `shared` the rest.
export interface DetailEdge {
  id: string
  from: string
  to: string
  processKey: string
  processName: string
  datasetKind: DatasetKind
  differing: Annotation[]
  shared: Annotation[]
}

export interface ProcessDetailGraph {
  process: ProvenanceProcess
  group: IoGroup
  nodes: DetailNode[]
  edges: DetailEdge[]
}

// All paths through one node: everything upstream plus everything downstream.
export interface LineageGraph {
  nodeId: string
  nodes: DetailNode[]
  edges: DetailEdge[]
}
