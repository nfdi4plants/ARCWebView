import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import type { KeyboardEvent, MouseEvent, RefObject } from 'react'
import { errorMessage } from '../errorMessage'
import styles from './GraphCanvas.module.css'
import { fitsInline, layoutGraph, type GraphLayout, type LaidOutEdge, type LaidOutNode, type PlacedPill } from './layout'
import { createTextMeasure, describePill, PILL_HEIGHT, pillListText } from './pills'
import type { CanvasColor, CanvasPill, GraphCanvasProps } from './types'

const NO_EXPANSION: ReadonlySet<string> = new Set()

// A measured size that changes by fewer pixels keeps its old value, so rounding cannot start a new layout.
const RESIZE_NOISE = 4
// Space between a list and its toggle, and between a list and the edge of the visible area.
const MENU_GAP = 4
const VIEW_MARGIN = 8

const NODE_RADIUS = 6
const STRIPE_WIDTH = 4
// Where the 4px stripe meets the rounded corner of the node.
const STRIPE_CORNER = NODE_RADIUS - Math.sqrt(NODE_RADIUS ** 2 - (NODE_RADIUS - STRIPE_WIDTH) ** 2)

const CATEGORY_CLASS = {
  characteristic: styles.characteristic,
  factor: styles.factor,
  parameter: styles.parameter,
  component: styles.component,
  protocol: styles.other,
  performer: styles.other,
  date: styles.other,
  comment: styles.other,
}

const ARROWS = [
  { name: 'study', className: styles.study },
  { name: 'assay', className: styles.assay },
  { name: 'run', className: styles.run },
  { name: 'neutral', className: styles.edgeNeutral },
  { name: 'accent', className: styles.accent },
]

function cx(...parts: Array<string | false | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

function colorClass(color: CanvasColor, neutral: string): string {
  return color === 'neutral' ? neutral : styles[color]
}

function isActivationKey(event: KeyboardEvent): boolean {
  return event.key === 'Enter' || event.key === ' '
}

// Left edge of a node: the rounded corners of the node cut a 4px wide stripe.
function stripePath(height: number): string {
  const bottom = height - STRIPE_CORNER
  return `M ${STRIPE_WIDTH} ${STRIPE_CORNER} A ${NODE_RADIUS} ${NODE_RADIUS} 0 0 0 0 ${NODE_RADIUS} V ${height - NODE_RADIUS} A ${NODE_RADIUS} ${NODE_RADIUS} 0 0 0 ${STRIPE_WIDTH} ${bottom} Z`
}

interface PillProps {
  placed: PlacedPill
  highlighted?: boolean
  // "<from> to <to>" of the edge. Toggle pills name it, because several edges have the same toggle.
  owner?: string
  // Set when the toggle opens a list instead of expanding the edge, and tells whether the list is open.
  listOpen?: boolean
  onToggle?: (anchor: Element) => void
}

function Pill({ placed, highlighted = false, owner, listOpen, onToggle }: PillProps) {
  const { view } = placed
  const hasDot = view.category !== undefined
  const valueClass = view.kind === 'process' ? styles.pillStrong : view.empty ? styles.pillEmpty : styles.pillValue
  const colorClassName =
    view.kind === 'process'
      ? highlighted
        ? styles.processHighlighted
        : styles.process
      : view.category && CATEGORY_CLASS[view.category]
  const content = (
    <>
      <title>{view.tooltip}</title>
      <rect className={styles.pillBox} width={view.width} height={PILL_HEIGHT} rx={PILL_HEIGHT / 2} />
      {hasDot && <circle className={styles.pillDot} cx={10} cy={PILL_HEIGHT / 2} r={3} />}
      <text className={styles.pillText} x={hasDot ? 17 : 7} y={PILL_HEIGHT / 2} dominantBaseline="central">
        {view.namePart && <tspan className={styles.pillName}>{view.namePart}</tspan>}
        <tspan className={valueClass}>{view.valuePart}</tspan>
      </text>
    </>
  )
  const transform = `translate(${placed.x} ${placed.y})`

  if (view.toggle && onToggle) {
    const activate = (event: MouseEvent | KeyboardEvent) => {
      event.stopPropagation()
      onToggle(event.currentTarget)
    }
    return (
      <g
        className={cx(styles.pill, styles.toggle, colorClassName)}
        transform={transform}
        role="button"
        tabIndex={0}
        aria-label={owner ? `${view.tooltip} of ${owner}` : view.tooltip}
        aria-haspopup={listOpen === undefined ? undefined : 'dialog'}
        aria-expanded={listOpen ?? view.toggle === 'less'}
        onClick={activate}
        onKeyDown={(event) => {
          if (!isActivationKey(event)) return
          event.preventDefault()
          activate(event)
        }}
      >
        {content}
      </g>
    )
  }
  return (
    <g className={cx(styles.pill, colorClassName)} transform={transform} role="img" aria-label={view.tooltip}>
      {content}
    </g>
  )
}

interface NodeProps {
  laid: LaidOutNode
  onClick?: (id: string) => void
}

function NodeShape({ laid, onClick }: NodeProps) {
  const { node, width, height } = laid
  const clickable = onClick !== undefined && node.clickable !== false
  // The pills hold information that a screen reader would otherwise miss. The tooltip is left out,
  // because ariaLabel already carries what it says.
  const label = [node.ariaLabel, ...laid.pills.map(({ view }) => view.fullText)].join(', ')
  const classes = cx(
    colorClass(node.color, styles.nodeNeutral),
    node.dashed && styles.dashed,
    node.emphasized && styles.emphasized,
    node.selected && styles.selected,
    clickable && styles.interactive,
  )
  const interaction = clickable
    ? {
        role: 'button',
        tabIndex: 0,
        onClick: () => onClick(node.id),
        onKeyDown: (event: KeyboardEvent) => {
          if (!isActivationKey(event)) return
          event.preventDefault()
          onClick(node.id)
        },
      }
    : { role: 'group' }
  return (
    <g className={classes} transform={`translate(${laid.x} ${laid.y})`} aria-label={label} {...interaction}>
      <title>{node.tooltip ?? node.title}</title>
      <rect className={styles.nodeFill} width={width} height={height} rx={NODE_RADIUS} />
      <path className={styles.stripe} d={stripePath(height)} />
      <rect className={styles.nodeBorder} width={width} height={height} rx={NODE_RADIUS} />
      <text
        className={cx(styles.title, node.mono && styles.mono)}
        x={15}
        y={laid.titleY}
        dominantBaseline="central"
      >
        {laid.titleText}
      </text>
      {laid.subtitleText && (
        <text className={styles.subtitle} x={15} y={laid.subtitleY} dominantBaseline="central">
          {laid.subtitleText}
        </text>
      )}
      {laid.pills.map((placed) => (
        <Pill key={placed.view.key} placed={placed} />
      ))}
    </g>
  )
}

function arrowName(laid: LaidOutEdge): string {
  if (laid.edge.highlighted) return 'accent'
  return laid.edge.color
}

interface MenuProps {
  label: string
  pills: CanvasPill[]
  // Height of the box, so the list fits again when the box changes its height while the list is open.
  boxHeight: number
  rootRef: RefObject<HTMLDivElement | null>
  // The toggle that opened the list. It takes the focus back when the list closes from inside.
  opener: Element
  onClose: () => void
}

// The list of pills that did not fit on an edge. It sits in the scrolling content, so it moves with its toggle.
function PillMenu({ label, pills, boxHeight, rootRef, opener, onClose }: MenuProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  // The list takes the visible area of the box as its limit: it opens on the side of the toggle with
  // more room and scrolls inside itself when it needs more. The width follows the text up to the visible width.
  useLayoutEffect(() => {
    const dialog = dialogRef.current
    const root = rootRef.current
    const canvas = dialog?.parentElement
    if (!dialog || !root || !canvas) return
    const box = root.getBoundingClientRect()
    const visible = {
      left: box.left + root.clientLeft,
      top: box.top + root.clientTop,
      right: box.left + root.clientLeft + root.clientWidth,
      bottom: box.top + root.clientTop + root.clientHeight,
    }
    const anchor = opener.getBoundingClientRect()
    const origin = canvas.getBoundingClientRect()

    dialog.style.maxWidth = `${Math.max(0, visible.right - visible.left - 2 * VIEW_MARGIN)}px`
    const below = visible.bottom - anchor.bottom - MENU_GAP - VIEW_MARGIN
    const above = anchor.top - visible.top - MENU_GAP - VIEW_MARGIN
    const openAbove = below < above
    dialog.style.maxHeight = `${Math.max(0, openAbove ? above : below)}px`
    dialog.style.top = openAbove ? 'auto' : `${anchor.bottom - origin.top + MENU_GAP}px`
    dialog.style.bottom = openAbove ? `${origin.bottom - anchor.top + MENU_GAP}px` : 'auto'
    const rightmost = visible.right - VIEW_MARGIN - dialog.offsetWidth
    dialog.style.left = `${Math.max(visible.left + VIEW_MARGIN, Math.min(anchor.left, rightmost)) - origin.left}px`
  }, [rootRef, opener, boxHeight])

  useLayoutEffect(() => {
    const dialog = dialogRef.current
    listRef.current?.focus()
    // The list closes when the focus leaves it, and a tap on a blank spot moves no focus on some touch browsers.
    const close = (event: Event) => {
      const target = event.target as Node
      if (!dialog?.contains(target) && !opener.contains(target)) onClose()
    }
    const escape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('pointerdown', close, true)
    document.addEventListener('keydown', escape)
    return () => {
      document.removeEventListener('pointerdown', close, true)
      document.removeEventListener('keydown', escape)
      if (dialog?.contains(document.activeElement) && opener.isConnected) (opener as HTMLElement).focus()
    }
  }, [opener, onClose])

  return (
    <div
      ref={dialogRef}
      className={styles.menu}
      role="dialog"
      aria-label={label}
      tabIndex={-1}
      onKeyDown={(event) => {
        // Tab would leave the canvas or land on its last node, so the list closes and the toggle takes the focus.
        if (event.key !== 'Tab') return
        event.preventDefault()
        onClose()
      }}
      onBlur={(event) => {
        const next = event.relatedTarget as Node | null
        if (!dialogRef.current?.contains(next) && !(next && opener.contains(next))) onClose()
      }}
    >
      <ul ref={listRef} className={styles.menuList} tabIndex={0} aria-label={label}>
        {pills.map((pill) => {
          const colorClass =
            pill.kind === 'process' ? styles.process : pill.category ? CATEGORY_CLASS[pill.category] : undefined
          return (
            <li
              key={pill.key}
              className={cx(styles.menuItem, colorClass)}
              title={pill.kind === 'property' ? describePill(pill).tooltip : undefined}
            >
              <span className={styles.menuDot} aria-hidden="true" />
              <span>{pillListText(pill)}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

interface Outcome {
  // The epoch the layout was requested in.
  requestedIn: number
  // null when ELK failed.
  layout: GraphLayout | null
  // The message of the error when ELK failed, empty otherwise.
  reason: string
}

export function GraphCanvas({
  nodes,
  edges,
  ariaLabel,
  onNodeClick,
  centerNodeId,
  resetKey,
  focusOnMount = false,
}: GraphCanvasProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [zoom, setZoom] = useState(1)
  const scrolledIn = useRef<number | null>(null)
  const markerPrefix = useId().replace(/:/g, '')

  // A changed resetKey is a new view. React lets a component reset state while it renders, so the
  // component knows the new epoch before it draws anything. Results and expansion carry the epoch they
  // belong to, and the canvas scrolls once for each epoch. It therefore never draws a result that
  // arrives late for an earlier view, and returning to an earlier resetKey starts like a new view.
  const [navigation, setNavigation] = useState({ viewKey: resetKey, epoch: 0 })
  const epoch = navigation.viewKey === resetKey ? navigation.epoch : navigation.epoch + 1
  if (navigation.viewKey !== resetKey) setNavigation({ viewKey: resetKey, epoch })

  const [expansion, setExpansion] = useState({ expandedIn: 0, ids: NO_EXPANSION })
  const expanded = expansion.expandedIn === epoch ? expansion.ids : NO_EXPANSION
  const toggle = useCallback(
    (edgeId: string) => {
      setExpansion((current) => {
        const ids = new Set(current.expandedIn === epoch ? current.ids : NO_EXPANSION)
        if (!ids.delete(edgeId)) ids.add(edgeId)
        return { expandedIn: epoch, ids }
      })
    },
    [epoch],
  )

  // Size of the box the canvas is shown in, null until it is measured. The shape comes from the border
  // box, which a scrollbar does not change. A scrollbar takes 15px off the client size, which near a
  // square box would flip the layout mode back and forth. The client size serves for the widths and heights.
  const [box, setBox] = useState<{ width: number; height: number; portrait: boolean } | null>(null)
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    const measureBox = () =>
      setBox((current) => {
        const next = { width: root.clientWidth, height: root.clientHeight, portrait: root.offsetHeight > root.offsetWidth }
        const same =
          current &&
          current.portrait === next.portrait &&
          Math.abs(next.width - current.width) < RESIZE_NOISE &&
          Math.abs(next.height - current.height) < RESIZE_NOISE
        return same ? current : next
      })
    measureBox()
    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(measureBox)
    observer.observe(root)
    return () => observer.disconnect()
  }, [])
  const measured = box !== null
  const boxWidth = box?.width ?? 0
  const portrait = boxWidth > 0 && (box?.portrait ?? false)
  // The width shapes the layout only through the rows of an expanded edge. A portrait box takes the
  // compact layout, which has no expanded edges and does not depend on the width.
  const layoutWidth = !portrait && expanded.size > 0 ? boxWidth : 0

  // The previous drawing stays until the next layout resolves, unless it belongs to another view.
  const [outcome, setOutcome] = useState<Outcome | null>(null)
  useEffect(() => {
    if (!measured) return
    let current = true
    const family = rootRef.current ? getComputedStyle(rootRef.current).fontFamily : ''
    layoutGraph(nodes, edges, expanded, createTextMeasure(family || 'sans-serif'), { width: layoutWidth, portrait }).then(
      (layout) => {
        if (current) setOutcome({ requestedIn: epoch, layout, reason: '' })
      },
      (error: unknown) => {
        console.error('Could not lay out the graph canvas', error)
        if (current) setOutcome({ requestedIn: epoch, layout: null, reason: errorMessage(error) })
      },
    )
    return () => {
      current = false
    }
  }, [nodes, edges, expanded, epoch, measured, layoutWidth, portrait])

  const shown = outcome && outcome.requestedIn === epoch ? outcome : null
  const layout = shown?.layout ?? null
  const titles = new Map((layout?.nodes ?? []).map((laid) => [laid.node.id, laid.node.title]))
  const ownerOf = (laid: LaidOutEdge) =>
    `${titles.get(laid.edge.from) ?? laid.edge.from} to ${titles.get(laid.edge.to) ?? laid.edge.to}`

  // One list at a time. It belongs to the layout and the width it was opened on, so a new layout (an
  // expansion, other data, a resize that relays out) or a new width closes it. The render clears the state
  // then, so the list cannot reappear when the box returns to the old width. The expanded edges of a
  // box that became too narrow are drawn collapsed, and they expand again when the box grows.
  const [menu, setMenu] = useState<{ edgeId: string; layout: GraphLayout; width: number; opener: Element } | null>(null)
  const openMenu = menu && menu.layout === layout && menu.width === boxWidth ? menu : null
  if (menu && !openMenu) setMenu(null)
  const closeMenu = useCallback(() => setMenu(null), [])
  const menuEdge = openMenu ? layout?.edges.find((laid) => laid.edge.id === openMenu.edgeId) : undefined

  // After a navigation the container takes focus, because the focused node is gone. The first
  // mount leaves focus alone unless focusOnMount is set. A view change that the owner makes with
  // focusOnMount unset (a link from outside the graph) leaves the focus where it is.
  const lastEpoch = useRef(epoch)
  const focusOnDraw = useRef(focusOnMount)
  useLayoutEffect(() => {
    if (lastEpoch.current === epoch) return
    lastEpoch.current = epoch
    focusOnDraw.current = focusOnMount
  }, [epoch, focusOnMount])

  // A new view starts at the top left, or on centerNodeId. Expanding an edge keeps the scroll position.
  // A failed layout takes the focus too, because the container then shows the alert.
  const failed = shown !== null && layout === null
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || (!layout && !failed) || scrolledIn.current === epoch) return
    if (focusOnDraw.current) {
      focusOnDraw.current = false
      root.focus({ preventScroll: true })
    }
    if (!layout) return
    scrolledIn.current = epoch
    root.scrollLeft = 0
    root.scrollTop = 0
    const target = centerNodeId ? layout.nodes.find((laid) => laid.node.id === centerNodeId) : undefined
    if (!target) return
    const clamp = (value: number, max: number) => Math.max(0, Math.min(value, max))
    // The compact layout keeps its main flow on the left, so it only scrolls down to the node.
    if (!layout.compact) {
      root.scrollLeft = clamp((target.x + target.width / 2) * zoom - root.clientWidth / 2, root.scrollWidth - root.clientWidth)
    }
    root.scrollTop = clamp((target.y + target.height / 2) * zoom - root.clientHeight / 2, root.scrollHeight - root.clientHeight)
  }, [layout, failed, epoch, centerNodeId, zoom])

  return (
    <div className={styles.viewport}>
      <div ref={rootRef} className={styles.root} role="region" aria-label={ariaLabel} tabIndex={-1}>
        {layout ? (
          <div className={cx(styles.canvas, layout.compact && styles.canvasCompact)}>
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              width={layout.width * zoom}
              height={layout.height * zoom}
              viewBox={`0 0 ${layout.width} ${layout.height}`}
              role="group"
            >
              <defs>
                {ARROWS.map(({ name, className }) => (
                  <marker
                    key={name}
                    id={`${markerPrefix}-${name}`}
                    className={className}
                    markerWidth={8}
                    markerHeight={8}
                    refX={7}
                    refY={4}
                    orient="auto"
                  >
                    <path className={styles.arrowHead} d="M0,0 L8,4 L0,8 z" />
                  </marker>
                ))}
              </defs>
              {layout.edges.map((laid) => {
                const owner = ownerOf(laid)
                // The list takes over the "+N" toggle when the expanded edge would not fit the box, and in compact mode.
                const listed = layout.compact || !fitsInline(laid.minInlineWidth, boxWidth)
                // A count pill is a bare number, so its tooltip says what is counted. Property pills keep the full
                // text, because their tooltip only adds the category.
                const texts = laid.pills
                  .filter(({ view }) => view.kind !== 'toggle')
                  .map(({ view }) => (view.kind === 'property' ? view.fullText : (view.tooltip ?? view.fullText)))
                return (
                  <g
                    key={laid.edge.id}
                    role="group"
                    aria-label={`From ${owner}${texts.length ? `: ${texts.join(', ')}` : ''}`}
                  >
                    {laid.path && (
                      <path
                        className={cx(
                          styles.edge,
                          colorClass(laid.edge.color, styles.edgeNeutral),
                          laid.edge.highlighted && styles.highlighted,
                        )}
                        d={laid.path}
                        markerEnd={`url(#${markerPrefix}-${arrowName(laid)})`}
                      >
                        {laid.edge.tooltip && <title>{laid.edge.tooltip}</title>}
                      </path>
                    )}
                    {laid.pills.map((placed) => (
                      <Pill
                        key={placed.view.key}
                        placed={placed}
                        highlighted={laid.edge.highlighted}
                        owner={owner}
                        listOpen={listed && placed.view.toggle === 'more' ? openMenu?.edgeId === laid.edge.id : undefined}
                        onToggle={(anchor) => {
                          if (!listed || placed.view.toggle === 'less') toggle(laid.edge.id)
                          else if (openMenu?.edgeId === laid.edge.id) closeMenu()
                          else setMenu({ edgeId: laid.edge.id, layout, width: boxWidth, opener: anchor })
                        }}
                      />
                    ))}
                  </g>
                )
              })}
              {layout.nodes.map((laid) => (
                <NodeShape key={laid.node.id} laid={laid} onClick={onNodeClick} />
              ))}
            </svg>
            {openMenu && menuEdge && (
              <PillMenu
                boxHeight={box?.height ?? 0}
                rootRef={rootRef}
                label={`${layout.compact ? 'Details' : 'More properties'} of ${ownerOf(menuEdge)}`}
                pills={layout.compact ? [...menuEdge.edge.pills, ...(menuEdge.edge.morePills ?? [])] : (menuEdge.edge.morePills ?? [])}
                opener={openMenu.opener}
                onClose={closeMenu}
              />
            )}
          </div>
        ) : shown ? (
          <p className={styles.status} role="alert">
            Could not lay out this graph.
            {/* The reason is the message of the error, so the user can report it. */}
            {shown.reason && <span className={styles.statusReason}> {shown.reason}</span>}
          </p>
        ) : (
          <p className={styles.status} role="status">
            Laying out…
          </p>
        )}
      </div>
      {layout && <div className={styles.zoomControls} role="group" aria-label="Graph zoom">
        <button type="button" aria-label="Zoom out" title="Zoom out" disabled={zoom <= 0.25}
          onClick={() => { closeMenu(); setZoom(value => Math.max(0.25, value - 0.25)) }}>−</button>
        <span aria-live="polite" aria-atomic="true">{Math.round(zoom * 100)}%</span>
        <button type="button" aria-label="Zoom in" title="Zoom in" disabled={zoom >= 2}
          onClick={() => { closeMenu(); setZoom(value => Math.min(2, value + 0.25)) }}>+</button>
      </div>}
    </div>
  )
}
