import type { ARC, ArcTable } from '@nfdi4plants/arctrl'
import type {
  Annotation,
  AnnotationCategory,
  DatasetKind,
  GroupEdge,
  IoGroup,
  IoKind,
  ProcessSignature,
  ProvenanceDataset,
  ProvenanceIndex,
  ProvenanceNode,
  ProvenanceProcess,
  ProvenanceRow,
} from './types'

type Header = ArcTable['Headers'][number]
type Cell = ReturnType<ArcTable['GetRow']>[number]

interface DatasetEntry extends ProvenanceDataset {
  tables: ArcTable[]
}

function unwrap<T>(option: T | { value: T } | undefined): T | undefined {
  return option as T | undefined
}

function textOrNull(text: string | undefined): string | null {
  return text ? text : null
}

function nonEmptyOr(value: unknown, fallback: string): string {
  return typeof value === 'string' && value.length > 0 ? value : fallback
}

function unique<T>(values: T[]): T[] {
  return [...new Set(values)]
}

function pushUnique<T>(target: T[], value: T) {
  if (!target.includes(value)) target.push(value)
}

// Annotations

const compareText = (a: string, b: string) => (a < b ? -1 : a > b ? 1 : 0)

function compareAnnotations(a: Annotation, b: Annotation): number {
  return (
    compareText(a.name, b.name) ||
    compareText(a.value ?? '', b.value ?? '') ||
    compareText(a.unit ?? '', b.unit ?? '') ||
    compareText(a.accession ?? '', b.accession ?? '') ||
    compareText(a.category, b.category)
  )
}

// Two annotations are the same when all five fields match.
function annotationKey(annotation: Annotation): string {
  const { name, value, unit, accession, category } = annotation
  return JSON.stringify([name, value, unit, accession, category])
}

function annotationUnion(lists: Annotation[][]): Annotation[] {
  const byKey = new Map<string, Annotation>()
  for (const list of lists) for (const annotation of list) byKey.set(annotationKey(annotation), annotation)
  return [...byKey.values()].sort(compareAnnotations)
}

function single(category: AnnotationCategory, name: string, value: string): Annotation {
  return { name, value, unit: null, accession: null, category }
}

// Cells

// The term name, the value of a unitized cell, the data name or the free text.
// An empty cell gives null.
function cellText(cell: Cell): string | null {
  if (cell.isTerm) return textOrNull(cell.AsTerm.Name)
  if (cell.isUnitized) return textOrNull(cell.AsUnitized[0])
  if (cell.isData) return textOrNull(cell.AsData.Name)
  return textOrNull(cell.AsFreeText)
}

// Value and unit come from the cell. The accession comes from the column term,
// which is where the crate keeps it (propertyID), so a cell term adds none.
function termAnnotation(header: Header, cell: Cell, category: AnnotationCategory): Annotation {
  const term = header.ToTerm()
  return {
    name: term.NameText,
    value: cellText(cell),
    unit: cell.isUnitized ? textOrNull(cell.AsUnitized[1].Name) : null,
    accession: term.TANInfo ? term.TermAccessionAndOntobeeUrlIfShort : null,
    category,
  }
}

function stepText(category: AnnotationCategory, name: string, cell: Cell): Annotation | undefined {
  const text = cellText(cell)
  return text === null ? undefined : single(category, name, text)
}

// Nodes

// The ids of arctrl's IOType: 0 Source, 1 Sample, 2 Data, 3 Material, 4 FreeText.
// Data and FreeText both give 'data'.
function ioKindOf(header: Header): IoKind {
  switch (unwrap(header.TryIOType())?.tag) {
    case 0:
      return 'source'
    case 1:
      return 'sample'
    case 3:
      return 'material'
    default:
      return 'data'
  }
}

// Inputs and outputs connect across the whole ARC by their name without a leading "./".
function nodeIdOf(cell: Cell): string | null {
  return textOrNull(cellText(cell)?.replace(/^\.\//, ''))
}

interface NodeInfo {
  kind: IoKind
  characteristics: Map<string, Annotation>
  factors: Map<string, Annotation>
}

// Merges the characteristics and factors of all rows that mention one node.
// Annotations that agree in every field count once.
function mergeAnnotations(target: Map<string, Annotation>, annotations: Annotation[]) {
  for (const annotation of annotations) {
    const key = annotationKey(annotation)
    if (!target.has(key)) target.set(key, annotation)
  }
}

function nodeInfoFor(infos: Map<string, NodeInfo>, id: string, kind: IoKind): NodeInfo {
  let info = infos.get(id)
  if (!info) {
    info = { kind, characteristics: new Map(), factors: new Map() }
    infos.set(id, info)
  }
  return info
}

// Datasets and rows

// Studies, then assays, then runs, each in the order of the ARC.
function readDatasets(arc: ARC): DatasetEntry[] {
  const owners: { kind: DatasetKind; directory: string; items: { Identifier: string; Tables: ArcTable[] }[] }[] = [
    { kind: 'study', directory: 'studies', items: arc.Studies },
    { kind: 'assay', directory: 'assays', items: arc.Assays },
    { kind: 'run', directory: 'runs', items: arc.Runs },
  ]
  return owners.flatMap(({ kind, directory, items }) =>
    items.map((item) => ({
      id: `${directory}/${item.Identifier}/`,
      kind,
      identifier: item.Identifier,
      tables: item.Tables,
    })),
  )
}

// Rows without inputs and outputs are kept, so that their process exists and
// lists them. They take no part in signatures and groups. The characteristics
// of a row go to its input node, the factors to its output node, and the other
// columns become step annotations in the order protocol, parameters,
// components, performer, date, comments. The protocol type, description, URI
// and version columns give no annotation.
//
// ownIo gets the characteristics and factors of this row alone, sorted, under
// the id of the row. Signatures compare these. The annotations of a node merge
// over every table that mentions it, so a Characteristic column in another
// table would otherwise split the signatures of this one.
function readRow(
  table: ArcTable,
  rowIndex: number,
  process: ProvenanceProcess,
  infos: Map<string, NodeInfo>,
  ownIo: Map<string, Annotation[]>,
): ProvenanceRow {
  const rowId = `${process.key}#${rowIndex}`
  const cells = table.GetRow(rowIndex, true)
  let input: { id: string; kind: IoKind } | undefined
  let output: { id: string; kind: IoKind } | undefined
  let protocol: Annotation | undefined
  let performer: Annotation | undefined
  let date: Annotation | undefined
  const characteristics: Annotation[] = []
  const factors: Annotation[] = []
  const parameters: Annotation[] = []
  const components: Annotation[] = []
  const comments: Annotation[] = []

  table.Headers.forEach((header, column) => {
    const cell = cells[column]
    if (header.isInput || header.isOutput) {
      const id = nodeIdOf(cell)
      if (id === null) return
      if (header.isInput) input = { id, kind: ioKindOf(header) }
      else output = { id, kind: ioKindOf(header) }
    } else if (header.isCharacteristic) {
      characteristics.push(termAnnotation(header, cell, 'characteristic'))
    } else if (header.isFactor) {
      factors.push(termAnnotation(header, cell, 'factor'))
    } else if (header.isParameter) {
      parameters.push(termAnnotation(header, cell, 'parameter'))
    } else if (header.isComponent) {
      components.push(termAnnotation(header, cell, 'component'))
    } else if (header.isProtocolREF) {
      protocol = stepText('protocol', 'Protocol', cell)
    } else if (header.isPerformer) {
      performer = stepText('performer', 'Performer', cell)
    } else if (header.isDate) {
      date = stepText('date', 'Date', cell)
    } else if (header.isComment) {
      // The only field of a Comment header is its key.
      const comment = stepText('comment', nonEmptyOr(header.fields[0], 'Comment'), cell)
      if (comment) comments.push(comment)
    }
  })

  if (input) mergeAnnotations(nodeInfoFor(infos, input.id, input.kind).characteristics, characteristics)
  if (output) mergeAnnotations(nodeInfoFor(infos, output.id, output.kind).factors, factors)
  ownIo.set(rowId, [...(input ? annotationUnion([characteristics]) : []), ...(output ? annotationUnion([factors]) : [])])

  return {
    id: rowId,
    name: `${table.Name}_${rowIndex}`,
    processKey: process.key,
    datasetId: process.datasetId,
    inputs: input ? [input.id] : [],
    outputs: output ? [output.id] : [],
    annotations: [
      ...(protocol ? [protocol] : []),
      ...parameters.sort(compareAnnotations),
      ...components.sort(compareAnnotations),
      ...(performer ? [performer] : []),
      ...(date ? [date] : []),
      ...comments,
    ],
  }
}

// One process per table with at least one row, in the order of the ARC. The
// processes come back without signatures and groups.
function readProcesses(datasets: DatasetEntry[]): {
  processes: ProvenanceProcess[]
  rows: ProvenanceRow[]
  infos: Map<string, NodeInfo>
  ownIo: Map<string, Annotation[]>
} {
  const processes: ProvenanceProcess[] = []
  const rows: ProvenanceRow[] = []
  const infos = new Map<string, NodeInfo>()
  const ownIo = new Map<string, Annotation[]>()
  for (const dataset of datasets) {
    for (const table of dataset.tables) {
      if (table.RowCount === 0) continue
      const process: ProvenanceProcess = {
        key: `${dataset.id}::${table.Name}`,
        name: table.Name,
        datasetId: dataset.id,
        rowIds: [],
        signatures: [],
        inputGroups: [],
        outputGroups: [],
        groupEdges: [],
      }
      processes.push(process)
      for (let rowIndex = 0; rowIndex < table.RowCount; rowIndex++) {
        const row = readRow(table, rowIndex, process, infos, ownIo)
        process.rowIds.push(row.id)
        rows.push(row)
      }
    }
  }
  return { processes, rows, infos, ownIo }
}

// Signatures, groups and edges

// "A" to "Z", then "AA", "AB", and so on.
function letters(index: number): string {
  let label = ''
  for (let n = index + 1; n > 0; n = Math.floor((n - 1) / 26)) {
    label = String.fromCharCode(65 + ((n - 1) % 26)) + label
  }
  return label
}

// Sorting the comments gives two rows with the same comments in a different
// order the same signature.
function sortedStep(annotations: Annotation[]): Annotation[] {
  return [
    ...annotations.filter((annotation) => annotation.category !== 'comment'),
    ...annotations.filter((annotation) => annotation.category === 'comment').sort(compareAnnotations),
  ]
}

// Annotations that share a category and a name, e.g. all values of one parameter.
function groupByCategoryAndName(annotations: Annotation[]): Map<string, Annotation[]> {
  const grouped = new Map<string, Annotation[]>()
  for (const annotation of annotations) {
    const key = `${annotation.category}|${annotation.name}`
    const list = grouped.get(key) ?? []
    list.push(annotation)
    grouped.set(key, list)
  }
  return grouped
}

// Rows share a signature when their annotations are identical. These are the
// step annotations plus the characteristics and factors from the cells of the
// row itself (ownIo).
function buildSignatures(
  process: ProvenanceProcess,
  processRows: ProvenanceRow[],
  ownIo: Map<string, Annotation[]>,
): { signatures: ProcessSignature[]; signatureOfRow: Map<string, number> } {
  const signatures: ProcessSignature[] = []
  const indexByKey = new Map<string, number>()
  const signatureOfRow = new Map<string, number>()
  for (const row of processRows) {
    const annotations = [...sortedStep(row.annotations), ...(ownIo.get(row.id) ?? [])]
    const key = JSON.stringify(annotations.map(annotationKey))
    let index = indexByKey.get(key)
    if (index === undefined) {
      index = signatures.length
      indexByKey.set(key, index)
      signatures.push({ id: `${process.key}$${index}`, rowIds: [], annotations, distinguishing: [] })
    }
    signatures[index].rowIds.push(row.id)
    signatureOfRow.set(row.id, index)
  }

  // An annotation distinguishes when its category and name occur with different
  // values across the signatures.
  const grouped = signatures.map((signature) => groupByCategoryAndName(signature.annotations))
  const differing = unique(grouped.flatMap((named) => [...named.keys()])).filter(
    (key) => new Set(grouped.map((named) => JSON.stringify((named.get(key) ?? []).map(annotationKey)))).size > 1,
  )
  signatures.forEach((signature, index) => {
    signature.distinguishing = differing.flatMap((key) => grouped[index].get(key) ?? [])
  })
  return { signatures, signatureOfRow }
}

// Nodes that take part in exactly the same signatures form one group, so a node
// that feeds several signatures appears once.
function buildGroups(
  signaturesOfNode: Map<string, Set<number>>,
  process: ProvenanceProcess,
  side: IoGroup['side'],
  signatures: ProcessSignature[],
): IoGroup[] {
  const groupBySignatures = new Map<string, IoGroup>()
  const groups: IoGroup[] = []
  for (const [nodeId, indexes] of signaturesOfNode) {
    const sorted = [...indexes].sort((a, b) => a - b)
    const key = sorted.join(',')
    let group = groupBySignatures.get(key)
    if (!group) {
      group = {
        id: `${process.key}#${side === 'inputs' ? 'in' : 'out'}${groups.length}`,
        side,
        label: `${side === 'inputs' ? 'Inputs' : 'Outputs'} ${letters(groups.length)}`,
        nodeIds: [],
        signatureIds: sorted.map((index) => signatures[index].id),
      }
      groupBySignatures.set(key, group)
      groups.push(group)
    }
    group.nodeIds.push(nodeId)
  }
  return groups
}

function fillProcess(process: ProvenanceProcess, allRows: ProvenanceRow[], ownIo: Map<string, Annotation[]>) {
  const processRows = allRows.filter((row) => row.inputs.length > 0 || row.outputs.length > 0)
  const { signatures, signatureOfRow } = buildSignatures(process, processRows, ownIo)

  // Map keys keep first-seen order, which fixes the order of nodes and groups.
  const signaturesOfInput = new Map<string, Set<number>>()
  const signaturesOfOutput = new Map<string, Set<number>>()
  const record = (target: Map<string, Set<number>>, id: string, signatureIndex: number) => {
    const indexes = target.get(id) ?? new Set<number>()
    indexes.add(signatureIndex)
    target.set(id, indexes)
  }
  for (const row of processRows) {
    const signatureIndex = signatureOfRow.get(row.id)!
    for (const id of row.inputs) record(signaturesOfInput, id, signatureIndex)
    for (const id of row.outputs) record(signaturesOfOutput, id, signatureIndex)
  }
  const inputGroups = buildGroups(signaturesOfInput, process, 'inputs', signatures)
  const outputGroups = buildGroups(signaturesOfOutput, process, 'outputs', signatures)
  const inputGroupOf = new Map<string, string>()
  const outputGroupOf = new Map<string, string>()
  for (const group of inputGroups) for (const id of group.nodeIds) inputGroupOf.set(id, group.id)
  for (const group of outputGroups) for (const id of group.nodeIds) outputGroupOf.set(id, group.id)

  // An edge joins an input group to an output group for one signature and lists
  // the rows behind it.
  const edgeByKey = new Map<string, GroupEdge>()
  const groupEdges: GroupEdge[] = []
  for (const row of processRows) {
    const signature = signatures[signatureOfRow.get(row.id)!]
    for (const from of unique(row.inputs.map((id) => inputGroupOf.get(id)!))) {
      for (const to of unique(row.outputs.map((id) => outputGroupOf.get(id)!))) {
        const key = JSON.stringify([from, to, signature.id])
        let edge = edgeByKey.get(key)
        if (!edge) {
          edge = { id: `${process.key}@${groupEdges.length}`, from, to, signatureId: signature.id, rowIds: [] }
          edgeByKey.set(key, edge)
          groupEdges.push(edge)
        }
        edge.rowIds.push(row.id)
      }
    }
  }

  process.signatures = signatures
  process.inputGroups = inputGroups
  process.outputGroups = outputGroups
  process.groupEdges = groupEdges
}

function readNodes(rows: ProvenanceRow[], infos: Map<string, NodeInfo>): ProvenanceNode[] {
  const nodeById = new Map<string, ProvenanceNode>()
  const ensure = (id: string): ProvenanceNode => {
    let node = nodeById.get(id)
    if (!node) {
      const info = infos.get(id)
      node = {
        id,
        kind: info?.kind ?? 'data',
        annotations: [...(info?.characteristics.values() ?? []), ...(info?.factors.values() ?? [])],
        datasetIds: [],
        processKeys: [],
      }
      nodeById.set(id, node)
    }
    return node
  }
  for (const row of rows) {
    for (const id of [...row.inputs, ...row.outputs]) {
      const node = ensure(id)
      pushUnique(node.datasetIds, row.datasetId)
      pushUnique(node.processKeys, row.processKey)
    }
  }
  return [...nodeById.values()]
}

function indexRowsByNode(rows: ProvenanceRow[], side: 'inputs' | 'outputs'): Map<string, string[]> {
  const byNode = new Map<string, string[]>()
  for (const row of rows) {
    for (const id of row[side]) {
      const list = byNode.get(id) ?? []
      list.push(row.id)
      byNode.set(id, list)
    }
  }
  return byNode
}

// Builds the provenance index of one ARC from the tables of its studies,
// assays and runs. The result is plain data and holds no arctrl objects.
export function buildProvenanceIndex(arc: ARC): ProvenanceIndex {
  const datasetEntries = readDatasets(arc)
  const { processes, rows, infos, ownIo } = readProcesses(datasetEntries)
  const nodes = readNodes(rows, infos)
  const nodeById = new Map(nodes.map((node) => [node.id, node]))

  const rowsByProcess = new Map<string, ProvenanceRow[]>()
  for (const row of rows) {
    const list = rowsByProcess.get(row.processKey) ?? []
    list.push(row)
    rowsByProcess.set(row.processKey, list)
  }
  for (const process of processes) fillProcess(process, rowsByProcess.get(process.key) ?? [], ownIo)

  const datasets: ProvenanceDataset[] = datasetEntries.map(({ id, kind, identifier }) => ({ id, kind, identifier }))
  const groups = processes.flatMap((process) => [...process.inputGroups, ...process.outputGroups])
  return {
    datasets,
    processes,
    rows,
    nodes,
    datasetById: new Map(datasets.map((dataset) => [dataset.id, dataset])),
    processByKey: new Map(processes.map((process) => [process.key, process])),
    rowById: new Map(rows.map((row) => [row.id, row])),
    nodeById,
    groupById: new Map(groups.map((group) => [group.id, group])),
    producedBy: indexRowsByNode(rows, 'outputs'),
    consumedBy: indexRowsByNode(rows, 'inputs'),
  }
}
