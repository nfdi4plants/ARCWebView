import type { ELK, ElkLabel, ElkNode } from 'elkjs/lib/elk.bundled.js'
import {
  compactPillViews,
  edgePillViews,
  LABEL_PADDING,
  PILL_GAP,
  PILL_HEIGHT,
  pillBlock,
  rowWidth,
  toPillView,
  wrapPillRows,
  type MeasureText,
  type PillView,
} from './pills'
import type { CanvasEdge, CanvasNode } from './types'

// Builds the ELK graph from the canvas props and runs ELK. The result holds everything the renderer needs as plain numbers.

export interface Point {
  x: number
  y: number
}

// A pill with the position of its top left corner.
export interface PlacedPill {
  view: PillView
  x: number
  y: number
}

export interface LaidOutNode {
  node: CanvasNode
  x: number
  y: number
  width: number
  height: number
  titleText: string
  subtitleText: string
  // Positions relative to the node origin.
  titleY: number
  subtitleY: number
  pills: PlacedPill[]
}

export interface LaidOutEdge {
  edge: CanvasEdge
  route: Point[]
  path: string
  // Positions relative to the canvas origin. An expanded edge has several rows, the first one on the route.
  pills: PlacedPill[]
  // Smallest available width at which this edge can expand inline, see fitsInline.
  minInlineWidth: number
}

export interface GraphLayout {
  width: number
  height: number
  // Top to bottom with one chip per edge, see layoutGraph.
  compact: boolean
  nodes: LaidOutNode[]
  edges: LaidOutEdge[]
}

const NODE_MIN_WIDTH = 132
const NODE_TEXT_INSET = 15
// A node is at most 320px wide, which leaves 290px for a row of pills.
const PILL_ROW_WIDTH = 290
const TITLE_LIMIT = 42
const SUBTITLE_LIMIT = 48
// ELK spreads the ends of the edges evenly along a node side, so each end gets 28px.
const EDGE_END_SPACING = 28
const CORNER_RADIUS = 6

const ELK_OPTIONS = {
  'org.eclipse.elk.algorithm': 'layered',
  'org.eclipse.elk.direction': 'RIGHT',
  'org.eclipse.elk.edgeRouting': 'ORTHOGONAL',
  'org.eclipse.elk.layered.spacing.nodeNodeBetweenLayers': '40',
  'org.eclipse.elk.spacing.nodeNode': '24',
  'org.eclipse.elk.spacing.edgeNode': '12',
  'org.eclipse.elk.spacing.edgeEdge': '16',
  'org.eclipse.elk.layered.spacing.edgeNodeBetweenLayers': '12',
  'org.eclipse.elk.layered.spacing.edgeEdgeBetweenLayers': '12',
  'org.eclipse.elk.spacing.edgeLabel': '0',
  'org.eclipse.elk.layered.edgeLabels.centerLabelPlacementStrategy': 'MEDIAN_LAYER',
  'org.eclipse.elk.layered.edgeLabels.sideSelection': 'ALWAYS_DOWN',
  'org.eclipse.elk.randomSeed': '1',
  'org.eclipse.elk.layered.considerModelOrder.strategy': 'NODES_AND_EDGES',
  // Separate components are packed into rows by size, so widening one label would move whole nodes between layers.
  'org.eclipse.elk.separateConnectedComponents': 'false',
}

// ELK names the node alignments for the left to right layout. In the top to bottom layout RIGHTDOWN
// lines a parent up with its first child, so the main flow stays on the left and the other children
// fan out to the right. On random graphs it has the smallest mean x of the alignments.
const COMPACT_OPTIONS = {
  ...ELK_OPTIONS,
  'org.eclipse.elk.direction': 'DOWN',
  'org.eclipse.elk.layered.nodePlacement.bk.fixedAlignment': 'RIGHTDOWN',
}

// A one-row pill run sits on its edge. The label is as high as a pill and the edge runs through its middle.
const INLINE_LABEL_OPTIONS = {
  'org.eclipse.elk.edgeLabels.placement': 'CENTER',
  'org.eclipse.elk.edgeLabels.inline': 'true',
}

// The rows below the first one hang under the edge. ALWAYS_DOWN in ELK_OPTIONS keeps this label below it.
const BELOW_LABEL_OPTIONS = {
  'org.eclipse.elk.edgeLabels.placement': 'CENTER',
  'org.eclipse.elk.edgeLabels.inline': 'false',
}

// What ELK adds to the width of a two-layer graph besides the nodes and the label: its default 12px
// padding on both sides, and the 40px between each node layer and the label layer.
const TWO_LAYER_OVERHEAD = 2 * 12 + 2 * 40

// ELK is a large bundle, so it loads on the first layout. A failed import is dropped from the cache and the next layout retries it.
let elkPromise: Promise<ELK> | undefined
const getElk = () =>
  (elkPromise ??= import('elkjs/lib/elk.bundled.js')
    .then((m) => new m.default())
    .catch((error) => {
      elkPromise = undefined
      throw error
    }))

function shortText(text: string, max: number): string {
  return text.length <= max ? text : `${text.slice(0, max - 1)}…`
}

interface NodeBox {
  width: number
  height: number
  titleText: string
  subtitleText: string
  titleY: number
  subtitleY: number
  pills: PlacedPill[]
}

// Pills wrap into rows inside the node. A pill wider than a row widens the node, because pills are never cut.
function measureNode(node: CanvasNode, measure: MeasureText, busiestSide: number, compact: boolean): NodeBox {
  const titleText = shortText(node.title, TITLE_LIMIT)
  const subtitleText = node.subtitle ? shortText(node.subtitle, SUBTITLE_LIMIT) : ''
  const titleWidth = measure(titleText, 600, 13, node.mono)
  const subtitleWidth = subtitleText ? measure(subtitleText, 400, 12) : 0
  const textWidth = Math.ceil(Math.max(titleWidth, subtitleWidth) + 34)

  const views = (node.pills ?? []).map((pill) => toPillView(pill, measure))
  const rows = wrapPillRows(views, Math.max(PILL_ROW_WIDTH, ...views.map((view) => view.width)))
  const widest = Math.max(0, ...rows.map(rowWidth))

  const pillTop = subtitleText ? 62 : 46
  const pills = rows.flatMap((row, r) => {
    let x = NODE_TEXT_INSET
    return row.map((view): PlacedPill => {
      const placed = { view, x, y: pillTop + r * (PILL_HEIGHT + PILL_GAP) }
      x += view.width + PILL_GAP
      return placed
    })
  })
  const contentHeight = rows.length
    ? pillTop + rows.length * PILL_HEIGHT + (rows.length - 1) * PILL_GAP + 10
    : subtitleText
      ? 58
      : 42
  // The edge ends are spread along the side they use: the height in the left to right layout, the width in the compact one.
  const endsRoom = busiestSide > 1 ? EDGE_END_SPACING * (busiestSide + 1) : 0
  const height = compact ? contentHeight : Math.max(contentHeight, endsRoom)
  return {
    width: Math.max(NODE_MIN_WIDTH, textWidth, rows.length ? Math.ceil(widest + 30) : 0, compact ? endsRoom : 0),
    height,
    titleText,
    subtitleText,
    titleY: subtitleText || rows.length ? 23 : height / 2,
    subtitleY: 43,
    pills,
  }
}

function countBy(ids: string[]): Map<string, number> {
  const counts = new Map<string, number>()
  for (const id of ids) counts.set(id, (counts.get(id) ?? 0) + 1)
  return counts
}

function toNumber(value: number): number {
  return Math.round(value * 100) / 100
}

// Orthogonal route with rounded corners. The radius shrinks on short segments.
export function roundedPath(points: Point[], radius: number = CORNER_RADIUS): string {
  if (points.length < 2) return ''
  const at = (p: Point) => `${toNumber(p.x)} ${toNumber(p.y)}`
  let d = `M ${at(points[0])}`
  for (let i = 1; i < points.length - 1; i++) {
    const a = points[i - 1]
    const b = points[i]
    const c = points[i + 1]
    const before = Math.hypot(b.x - a.x, b.y - a.y)
    const after = Math.hypot(c.x - b.x, c.y - b.y)
    const r = Math.min(radius, before / 2, after / 2)
    if (r < 0.5) {
      d += ` L ${at(b)}`
      continue
    }
    const start = { x: b.x + ((a.x - b.x) / before) * r, y: b.y + ((a.y - b.y) / before) * r }
    const end = { x: b.x + ((c.x - b.x) / after) * r, y: b.y + ((c.y - b.y) / after) * r }
    d += ` L ${at(start)} Q ${at(b)} ${at(end)}`
  }
  return `${d} L ${at(points[points.length - 1])}`
}

// y of the horizontal route segment that runs under the label. When the route bends, ELK may
// offer several horizontal segments, so the one nearest to y wins.
function runY(route: Point[], label: ElkLabel, y: number): number {
  const left = label.x ?? 0
  const right = left + (label.width ?? 0)
  let best: number | undefined
  for (let i = 1; i < route.length; i++) {
    const a = route[i - 1]
    const b = route[i]
    if (Math.abs(a.y - b.y) > 0.5) continue
    if (Math.min(a.x, b.x) > left + 1 || Math.max(a.x, b.x) < right - 1) continue
    if (best === undefined || Math.abs(a.y - y) < Math.abs(best - y)) best = a.y
  }
  return best ?? y
}

// x of the vertical route segment that runs through the label, the counterpart of runY for compact mode.
function runX(route: Point[], label: ElkLabel): number {
  const top = label.y ?? 0
  const bottom = top + (label.height ?? 0)
  const middle = (label.x ?? 0) + (label.width ?? 0) / 2
  let best: number | undefined
  for (let i = 1; i < route.length; i++) {
    const a = route[i - 1]
    const b = route[i]
    if (Math.abs(a.x - b.x) > 0.5) continue
    if (Math.min(a.y, b.y) > top + 1 || Math.max(a.y, b.y) < bottom - 1) continue
    if (best === undefined || Math.abs(a.x - middle) < Math.abs(best - middle)) best = a.x
  }
  return best ?? middle
}

// An edge expands inline when its widest pill fits next to the widest nodes of both sides within
// availableWidth. An unmeasured box (width 0, as in jsdom) counts as wide enough.
export function fitsInline(minInlineWidth: number, availableWidth: number): boolean {
  return availableWidth <= 0 || availableWidth >= minInlineWidth
}

// The box the canvas is shown in. Both fields are optional because the layout also runs without one.
export interface LayoutBox {
  // Visible width, 0 while unknown (before the first measurement, and in jsdom).
  width?: number
  // The box is measured and taller than it is wide, judged by its border box so that a scrollbar does not change the shape.
  portrait?: boolean
}

const NOTHING_EXPANDED: ReadonlySet<string> = new Set()

// An expanded edge wraps its pills so that a graph of two layers (the groups and detail views) still fits
// box.width: the gap between the layers has to leave room for the widest node on each side. Deeper
// graphs have more gaps, so they may scroll, and an edge that does not fit stays collapsed. Without a
// width the rows are as wide as the widest pill.
//
// A portrait box gets the compact layout instead: top to bottom and left aligned, with one chip per
// edge. Only the border box of the box decides, so no layout (and no scrollbar it brings) can make the
// choice flip back and forth.
export async function layoutGraph(
  nodes: CanvasNode[],
  edges: CanvasEdge[],
  expanded: ReadonlySet<string>,
  measure: MeasureText,
  box: LayoutBox = {},
): Promise<GraphLayout> {
  const availableWidth = box.width ?? 0
  const compactBox = box.portrait === true
  const outgoing = countBy(edges.map((edge) => edge.from))
  const incoming = countBy(edges.map((edge) => edge.to))
  const boxes = nodes.map((node) =>
    measureNode(node, measure, Math.max(outgoing.get(node.id) ?? 0, incoming.get(node.id) ?? 0), compactBox),
  )

  const widthOf = new Map(nodes.map((node, i) => [node.id, boxes[i].width]))
  const widest = (ids: string[]) => Math.max(0, ...ids.map((id) => widthOf.get(id) ?? 0))
  const sideWidths = widest(edges.map((edge) => edge.from)) + widest(edges.map((edge) => edge.to))
  const labelSpace = sideWidths + TWO_LAYER_OVERHEAD + 2 * LABEL_PADDING
  const rowCap = Math.max(0, availableWidth - labelSpace)

  const minInlineWidths = edges.map((edge) => {
    const widestPill = Math.max(0, ...edgePillViews(edge, true, measure).map((view) => view.width))
    return edge.morePills?.length ? labelSpace + widestPill : 0
  })

  async function place(compact: boolean, open: ReadonlySet<string>): Promise<GraphLayout> {
    const blocks = edges.map((edge) => {
      if (compact) {
        const views = compactPillViews(edge, measure)
        return { block: pillBlock(views), views }
      }
      const isOpen = open.has(edge.id)
      const views = edgePillViews(edge, isOpen, measure)
      return { block: pillBlock(views, isOpen ? rowCap : undefined), views }
    })

    // Each edge with pills gets one label as wide as its widest pill row. ELK widens only that gap, and
    // expanding an edge changes only its label. The first row sits on the edge. When rows follow, the
    // label hangs under the edge and is as high as those rows plus the lower half of the first.
    const graph: ElkNode = {
      id: 'root',
      layoutOptions: compact ? COMPACT_OPTIONS : ELK_OPTIONS,
      children: nodes.map((node, i) => ({ id: node.id, width: boxes[i].width, height: boxes[i].height })),
      edges: edges.map((edge, i) => {
        const { block, views } = blocks[i]
        if (!views.length) return { id: edge.id, sources: [edge.from], targets: [edge.to] }
        const stacked = block.rows.length > 1
        return {
          id: edge.id,
          sources: [edge.from],
          targets: [edge.to],
          labels: [
            {
              id: `${edge.id}-pills`,
              text: 'pills',
              width: block.width,
              height: stacked ? block.height - PILL_HEIGHT / 2 : PILL_HEIGHT,
              layoutOptions: stacked ? BELOW_LABEL_OPTIONS : INLINE_LABEL_OPTIONS,
            },
          ],
        }
      }),
    }

    const laid = await (await getElk()).layout(graph)

    const positions = new Map((laid.children ?? []).map((child) => [child.id, child]))
    const routes = new Map((laid.edges ?? []).map((edge) => [edge.id, edge]))

    return {
      width: Math.ceil(laid.width ?? 0),
      height: Math.ceil(laid.height ?? 0),
      compact,
      nodes: nodes.map((node, i) => ({
        node,
        x: positions.get(node.id)?.x ?? 0,
        y: positions.get(node.id)?.y ?? 0,
        ...boxes[i],
      })),
      edges: edges.map((edge, i) => {
        const laidEdge = routes.get(edge.id)
        const section = laidEdge?.sections?.[0]
        const route = section ? [section.startPoint, ...(section.bendPoints ?? []), section.endPoint] : []
        const pills: PlacedPill[] = []
        const { block, views } = blocks[i]
        if (views.length) {
          const label = laidEdge?.labels?.[0]
          if (!label) throw new Error(`ELK returned no label for edge ${edge.id}`)
          if (compact) {
            pills.push({
              view: views[0],
              x: runX(route, label) - views[0].width / 2,
              y: (label.y ?? 0) + ((label.height ?? 0) - PILL_HEIGHT) / 2,
            })
          } else {
            const labelTop = label.y ?? 0
            const near = block.rows.length > 1 ? labelTop : labelTop + (label.height ?? 0) / 2
            const top = runY(route, label, near) - PILL_HEIGHT / 2
            block.rows.forEach((row, r) => {
              let x = (label.x ?? 0) + LABEL_PADDING
              for (const view of row) {
                pills.push({ view, x, y: top + r * (PILL_HEIGHT + PILL_GAP) })
                x += view.width + PILL_GAP
              }
            })
          }
        }
        return { edge, route, path: roundedPath(route), pills, minInlineWidth: minInlineWidths[i] }
      }),
    }
  }

  if (compactBox) return place(true, NOTHING_EXPANDED)
  const open = new Set(
    edges
      .filter((edge, i) => expanded.has(edge.id) && fitsInline(minInlineWidths[i], availableWidth))
      .map((edge) => edge.id),
  )
  return place(false, open)
}
