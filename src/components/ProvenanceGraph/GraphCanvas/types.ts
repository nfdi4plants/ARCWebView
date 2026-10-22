import type { AnnotationCategory, DatasetKind } from '../../../provenance/types'

// Input of the graph canvas. Colors use the DatasetKind of the provenance model and pill
// categories use its AnnotationCategory. Everything else is plain data, and the explorer
// maps provenance query results onto these shapes.

export type CanvasColor = DatasetKind | 'neutral'

export interface CanvasPill {
  key: string
  // 'property' pills are "name: value unit" with a category color,
  // 'process' pills name a process, 'count' pills show a bare number or text.
  kind: 'property' | 'process' | 'count'
  name?: string
  value: string | null
  unit?: string | null
  category?: AnnotationCategory
  // Hover text and accessible name for 'process' and 'count' pills.
  tooltip?: string
}

export interface CanvasNode {
  id: string
  title: string
  subtitle?: string
  color: CanvasColor
  dashed?: boolean
  mono?: boolean
  selected?: boolean
  emphasized?: boolean
  pills?: CanvasPill[]
  tooltip?: string
  ariaLabel: string
  // Set to false to render the node without button semantics. Without an onNodeClick
  // handler no node is a button.
  clickable?: boolean
}

export interface CanvasEdge {
  id: string
  from: string
  to: string
  color: CanvasColor
  highlighted?: boolean
  // Always visible on the edge.
  pills: CanvasPill[]
  // Hidden behind a "+N" pill until the user expands the edge.
  morePills?: CanvasPill[]
  tooltip?: string
}

export interface GraphCanvasProps {
  nodes: CanvasNode[]
  edges: CanvasEdge[]
  ariaLabel: string
  onNodeClick?: (id: string) => void
  // Scroll this node into the center after layout (used by the lineage view).
  centerNodeId?: string
  // Changing it resets expanded edges and the scroll position (a new view).
  resetKey: string
  // Focus the canvas once after its first layout and after each resetKey change. A canvas that
  // mounts fresh for a new view never sees the key change, so its parent sets this. When it is
  // unset, a resetKey change leaves the focus alone.
  focusOnMount?: boolean
}
