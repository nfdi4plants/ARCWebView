import type { AnnotationCategory } from '../../../provenance/types'
import type { CanvasEdge, CanvasPill } from './types'

// Pure text and size logic of the pills. Nothing here touches the DOM.

export const PILL_HEIGHT = 18
export const PILL_GAP = 6

// Characters that "name: value unit" of a property pill may use before the name gives way.
const TEXT_BUDGET = 36
const VALUE_LIMIT = 24
const MIN_NAME_BUDGET = 8
// Process names are the longest pill text, so they get their own limit.
const PROCESS_LIMIT = 28

const MONO_FAMILY = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'

export type MeasureText = (text: string, weight: number, size: number, mono?: boolean) => number

// Without a canvas (jsdom, old browsers) every character counts 7px, which keeps layouts deterministic.
export function estimateTextWidth(text: string): number {
  return text.length * 7
}

export function createTextMeasure(sansFamily: string): MeasureText {
  // OffscreenCanvas avoids a DOM element. jsdom has none, so tests get the estimate without
  // jsdom reporting an unimplemented canvas.
  const context = typeof OffscreenCanvas === 'undefined' ? null : new OffscreenCanvas(1, 1).getContext('2d')
  if (!context) return (text) => estimateTextWidth(text)
  return (text, weight, size, mono = false) => {
    context.font = `${weight} ${size}px ${mono ? MONO_FAMILY : sansFamily}`
    return context.measureText(text).width
  }
}

export function categoryLabel(category: AnnotationCategory): string {
  return category.charAt(0).toUpperCase() + category.slice(1)
}

function cut(text: string, length: number): string {
  return `${text.slice(0, length).trimEnd()}…`
}

// The value keeps up to 24 characters and the name gives way first, down to 8.
export function truncateProperty(name: string, valueText: string): { name: string; value: string } {
  const value = valueText.length > VALUE_LIMIT ? cut(valueText, VALUE_LIMIT - 1) : valueText
  const nameBudget = Math.max(MIN_NAME_BUDGET, TEXT_BUDGET - 2 - value.length)
  return { name: name.length > nameBudget ? cut(name, nameBudget - 1) : name, value }
}

export interface PillText {
  // "name: " (empty for pills without a name), shown in the muted color.
  namePart: string
  valuePart: string
  empty: boolean
  // "name: value unit" in full, without a category. Screen reader labels of nodes and edges use it.
  fullText: string
  // Hover text and accessible name. Property pills add their category. Process and count pills
  // use the tooltip of the pill and fall back to the full text.
  tooltip: string
}

export function describePill(pill: CanvasPill): PillText {
  const empty = pill.value === null || pill.value === ''
  const valueText = empty ? '(empty)' : `${pill.value}${pill.unit ? ` ${pill.unit}` : ''}`
  if (pill.kind !== 'property') {
    const shown = pill.kind === 'process' && valueText.length > PROCESS_LIMIT ? cut(valueText, PROCESS_LIMIT - 1) : valueText
    return { namePart: '', valuePart: shown, empty, fullText: valueText, tooltip: pill.tooltip ?? valueText }
  }

  const name = pill.name ?? ''
  const fullText = name ? `${name}: ${valueText}` : valueText
  const shown = truncateProperty(name, valueText)
  return {
    namePart: shown.name ? `${shown.name}: ` : '',
    valuePart: shown.value,
    empty,
    fullText,
    tooltip: pill.category ? `${categoryLabel(pill.category)} · ${fullText}` : fullText,
  }
}

// A pill ready to be sized and drawn. Toggle pills are the "+N" and "−" buttons of an edge.
export interface PillView {
  key: string
  kind: CanvasPill['kind'] | 'toggle'
  category?: AnnotationCategory
  namePart: string
  valuePart: string
  empty: boolean
  fullText: string
  tooltip: string
  toggle?: 'more' | 'less'
  width: number
}

export function toPillView(pill: CanvasPill, measure: MeasureText): PillView {
  const text = describePill(pill)
  const category = pill.kind === 'property' ? pill.category : undefined
  const weight = pill.kind === 'process' ? 600 : 400
  const width = Math.ceil(measure(text.namePart + text.valuePart, weight, 11)) + 14 + (category ? 10 : 0)
  return { key: pill.key, kind: pill.kind, category, ...text, width }
}

function toggleView(
  key: string,
  toggle: 'more' | 'less',
  text: string,
  label: string,
  measure: MeasureText,
  category?: AnnotationCategory,
): PillView {
  return {
    key,
    kind: 'toggle',
    category,
    namePart: '',
    valuePart: text,
    empty: false,
    fullText: label,
    tooltip: label,
    toggle,
    width: Math.ceil(measure(text, 400, 11)) + 14 + (category ? 10 : 0),
  }
}

// The pills an edge shows: its own, then either a "+N" pill or, when expanded, the hidden ones and a "−" pill.
export function edgePillViews(edge: CanvasEdge, expanded: boolean, measure: MeasureText): PillView[] {
  const hidden = edge.morePills ?? []
  const views = edge.pills.map((pill) => toPillView(pill, measure))
  if (hidden.length === 0) return views
  const toggleKey = `${edge.id}:toggle`
  if (expanded) {
    views.push(...hidden.map((pill) => toPillView(pill, measure)))
    views.push(toggleView(toggleKey, 'less', '−', 'Show fewer properties', measure))
  } else {
    views.push(toggleView(toggleKey, 'more', `+${hidden.length}`, `Show ${hidden.length} more properties`, measure))
  }
  return views
}

// The pills an edge shows in compact mode. A lone pill stays on the edge. Several pills, hidden ones
// included, become one chip with the number of pills and the category dot of the first property.
export function compactPillViews(edge: CanvasEdge, measure: MeasureText): PillView[] {
  const all = [...edge.pills, ...(edge.morePills ?? [])]
  if (all.length <= 1) return all.map((pill) => toPillView(pill, measure))
  const category = all.find((pill) => pill.kind === 'property')?.category
  return [toggleView(`${edge.id}:toggle`, 'more', `${all.length}`, `Show the ${all.length} details`, measure, category)]
}

// Plain text of a pill for lists and screen readers: a property in full, any other pill by its tooltip.
export function pillListText(pill: CanvasPill): string {
  const text = describePill(pill)
  return pill.kind === 'property' ? text.fullText : text.tooltip
}

// Room the edge label keeps free on each side of the pills.
export const LABEL_PADDING = 16

export function rowWidth(row: PillView[]): number {
  return row.reduce((sum, view) => sum + view.width, 0) + (row.length - 1) * PILL_GAP
}

// Fills the rows from left to right. A pill that does not fit starts the next row, and a pill wider
// than maxWidth stands alone in its row, because pills are never cut.
export function wrapPillRows(views: PillView[], maxWidth: number): PillView[][] {
  const rows: PillView[][] = []
  let used = 0
  for (const view of views) {
    const current = rows[rows.length - 1]
    if (current && used + PILL_GAP + view.width <= maxWidth) {
      current.push(view)
      used += PILL_GAP + view.width
    } else {
      rows.push([view])
      used = view.width
    }
  }
  return rows
}

export interface PillBlock {
  rows: PillView[][]
  // Widest row plus the label padding on both sides, which is what ELK reserves.
  width: number
  // All rows with the gaps between them.
  height: number
}

// A collapsed edge (no rowCap) keeps its pills in one row however wide it is. An expanded edge wraps
// at rowCap, but never below its widest pill, so the block is at least as wide as that pill needs.
export function pillBlock(views: PillView[], rowCap?: number): PillBlock {
  const rows =
    rowCap === undefined ? [views] : wrapPillRows(views, Math.max(rowCap, ...views.map((view) => view.width)))
  return {
    rows,
    width: Math.max(...rows.map(rowWidth)) + 2 * LABEL_PADDING,
    height: rows.length * PILL_HEIGHT + (rows.length - 1) * PILL_GAP,
  }
}
