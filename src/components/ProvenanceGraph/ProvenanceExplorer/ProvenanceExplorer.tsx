import { ActionList, ActionMenu, Banner } from '@primer/react'
import { Fragment, useCallback, useLayoutEffect, useMemo, useRef, useState, type ReactNode, type RefObject } from 'react'
import { backTo, type Navigation, type ProvenanceView } from '../../../provenance/navigation'
import { datasetGraph, lineage, processDetail, processGraph, processGroups } from '../../../provenance/queries'
import type { ProvenanceIndex } from '../../../provenance/types'
import ErrorBoundary from '../ErrorBoundary'
import { errorMessage } from '../errorMessage'
import { GraphCanvas } from '../GraphCanvas'
import { Legend } from './Legend'
import styles from './ProvenanceExplorer.module.css'
import {
  datasetsToCanvas,
  detailToCanvas,
  groupsToCanvas,
  incompleteNote,
  incompleteRows,
  limitLineage,
  lineageToCanvas,
  processesToCanvas,
  type CanvasGraph,
  type IncompleteRows,
} from './toCanvas'

interface Crumb {
  label: string
  view: ProvenanceView
}

// Only these views can come up empty. A group always has a member and a lineage always contains its own node.
const NOTHING_TO_SHOW: Partial<Record<ProvenanceView, string>> = {
  datasets: 'This ARC has no datasets.',
  processes: 'This dataset has no annotated processes.',
  groups: 'This process has no inputs or outputs.',
}

const CRUMB_MAX_LENGTH = 28

// What the canvas of a view shows. `cap` holds the shown and the total node count of a lineage that was
// cut. `incomplete` counts the rows of the view that have no output or no input yet.
interface Shown extends CanvasGraph {
  ariaLabel: string
  centerNodeId?: string
  cap: { shown: number; total: number } | null
  incomplete: IncompleteRows
}

// What a view has to show. 'none' means that the index has no result for the selection. 'failed' holds the
// message of an error that a query or the mapping threw.
type Content = { kind: 'none' } | { kind: 'graph'; shown: Shown } | { kind: 'failed'; message: string }

// The canvas input of a view. It is null when the index has no result for the selection. The queries
// return undefined for an id the index does not have.
function shownOf(index: ProvenanceIndex, nav: Navigation): Shown | null {
  const { view, selectedDataset, selectedProcess, selectedGroup, selectedNode } = nav
  const plain = (graph: CanvasGraph, ariaLabel: string): Shown => ({
    ...graph,
    ariaLabel,
    cap: null,
    incomplete: incompleteRows(index, nav),
  })
  switch (view) {
    case 'datasets':
      return plain(datasetsToCanvas(datasetGraph(index)), 'Dataset provenance graph')
    case 'processes': {
      const graph = selectedDataset === undefined ? undefined : processGraph(index, selectedDataset)
      return graph ? plain(processesToCanvas(graph), 'Process provenance graph') : null
    }
    case 'groups': {
      const graph = selectedProcess === undefined ? undefined : processGroups(index, selectedProcess)
      return graph ? plain(groupsToCanvas(graph), `Input groups and output groups of ${graph.process.name}`) : null
    }
    case 'detail': {
      const graph = selectedGroup === undefined ? undefined : processDetail(index, selectedGroup)
      return graph
        ? plain(detailToCanvas(graph), `Nodes connected to ${graph.group.label} of ${graph.process.name}`)
        : null
    }
    case 'lineage': {
      const full = selectedNode === undefined ? undefined : lineage(index, selectedNode)
      if (!full) return null
      const limited = limitLineage(full)
      const canvas = lineageToCanvas(limited.graph, selectedProcess)
      const shown = limited.graph.nodes.length
      return {
        nodes: canvas.nodes,
        edges: canvas.edges,
        ariaLabel: `Lineage graph for ${limited.graph.nodeId}`,
        centerNodeId: canvas.centerNodeId,
        cap: shown < limited.total ? { shown, total: limited.total } : null,
        incomplete: incompleteRows(index, nav, limited.graph),
      }
    }
  }
}

// An exception becomes a 'failed' content, so a broken index or a bug in the mapping shows its
// message in the explorer and never reaches React as a thrown error.
function contentOf(index: ProvenanceIndex, nav: Navigation): Content {
  try {
    const shown = shownOf(index, nav)
    return shown ? { kind: 'graph', shown } : { kind: 'none' }
  } catch (error) {
    console.error('Could not compute the provenance view', error)
    return { kind: 'failed', message: errorMessage(error) }
  }
}

const cutLabel = (label: string) =>
  label.length > CRUMB_MAX_LENGTH ? `${label.slice(0, CRUMB_MAX_LENGTH - 1)}…` : label

// The crumbs between the first one and the last two, in the narrow header. With three or fewer
// crumbs nothing collapses.
const hiddenCrumbs = (crumbs: Crumb[], narrow: boolean) => (narrow && crumbs.length > 3 ? crumbs.slice(1, -2) : [])

function HiddenCrumbsMenu({ hidden, onNavigate }: { hidden: Crumb[]; onNavigate: (view: ProvenanceView) => void }) {
  return (
    <ActionMenu>
      <ActionMenu.Anchor>
        <button
          type="button"
          className={`${styles.crumbButton} ${styles.crumbMore}`}
          aria-label={`Show ${hidden.length} more ${hidden.length === 1 ? 'level' : 'levels'}`}
        >
          …
        </button>
      </ActionMenu.Anchor>
      <ActionMenu.Overlay>
        <ActionList>
          {hidden.map(({ label, view }) => (
            <ActionList.Item key={view} onSelect={() => onNavigate(view)}>
              {cutLabel(label)}
            </ActionList.Item>
          ))}
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>
  )
}

function Separator() {
  return (
    <span className={styles.separator} aria-hidden="true">
      &gt;
    </span>
  )
}

function Breadcrumbs({
  crumbs,
  narrow,
  onNavigate,
}: {
  crumbs: Crumb[]
  narrow: boolean
  onNavigate: (view: ProvenanceView) => void
}) {
  const hidden = hiddenCrumbs(crumbs, narrow)
  const visible = hidden.length > 0 ? [crumbs[0], ...crumbs.slice(-2)] : crumbs
  // Without the menu nothing has to stick out of the nav, so the nav cuts what does not fit. The list of
  // the menu needs the room below the nav.
  const clipped = narrow && hidden.length === 0
  return (
    <nav aria-label="Breadcrumb" className={clipped ? `${styles.nav} ${styles.navClipped}` : styles.nav}>
      <ol className={styles.crumbs}>
        {visible.map(({ label, view }, position) => {
          const isLast = position === visible.length - 1
          // In the narrow header the crumb before the current one gives way first.
          const givesWay = narrow && position > 0 && position === visible.length - 2
          const shown = cutLabel(label)
          // The CSS can cut every crumb of the narrow header, so each one carries its full text.
          const title = shown === label && !narrow ? undefined : label
          const crumbClass = !narrow
            ? styles.crumb
            : isLast
              ? `${styles.crumb} ${styles.crumbShrinking}`
              : givesWay
                ? `${styles.crumb} ${styles.crumbGivingWay}`
                : `${styles.crumb} ${styles.crumbNarrow}`
          return (
            <Fragment key={view}>
              {position === 1 && hidden.length > 0 && (
                <li className={styles.crumb}>
                  <Separator />
                  <HiddenCrumbsMenu hidden={hidden} onNavigate={onNavigate} />
                </li>
              )}
              <li className={crumbClass}>
                {position > 0 && <Separator />}
                {isLast ? (
                  <span className={styles.crumbCurrent} aria-current="page" title={title}>
                    {shown}
                  </span>
                ) : (
                  <button type="button" className={styles.crumbButton} title={title} onClick={() => onNavigate(view)}>
                    {shown}
                  </button>
                )}
              </li>
            </Fragment>
          )
        })}
      </ol>
    </nav>
  )
}

// An invisible copy of the full header content (all crumbs in one line). It
// draws its text with CSS content, so the page holds each label once for assistive technology.
// The outer box has the width of the header content area, and the copy inside has its natural width.
function HeaderRuler({
  crumbs,
  boxRef,
  fullRef,
}: {
  crumbs: Crumb[]
  boxRef: RefObject<HTMLDivElement | null>
  fullRef: RefObject<HTMLDivElement | null>
}) {
  return (
    <div className={styles.rulerBox} ref={boxRef} aria-hidden="true">
      <div className={styles.ruler} ref={fullRef}>
        <div className={styles.crumbs}>
          {crumbs.map(({ label, view }, index) => (
            <span key={view} className={styles.crumb}>
              {index > 0 && <span className={styles.separator} data-text=">" />}
              <span
                className={index === crumbs.length - 1 ? styles.crumbCurrent : styles.crumbButton}
                data-text={cutLabel(label)}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// The header switches to its narrow layout when the full content does not fit on one line.
// A ResizeObserver reports two widths: the header content area (the ruler box) and the natural
// width of the full content (the ruler). Both are independent of the layout on screen, because
// the header is as wide as the card and the ruler always holds the full content. The answer is
// therefore the same in either layout, so the header cannot flip back and forth. The observed
// elements keep their height in both layouts, so a layout switch does not fire the observer again.
// The actions beside the crumbs take part of the content area, so the crumbs get what is left.
function useNarrowHeader(hasActions: boolean) {
  const boxRef = useRef<HTMLDivElement>(null)
  const fullRef = useRef<HTMLDivElement>(null)
  const actionsRef = useRef<HTMLDivElement>(null)
  const [narrow, setNarrow] = useState(false)
  useLayoutEffect(() => {
    const box = boxRef.current
    const full = fullRef.current
    const actions = hasActions ? actionsRef.current : null
    if (!box || !full) return
    // The header sets the gap between the crumbs and the actions, and the ruler box inherits it.
    const gap = parseFloat(getComputedStyle(box).getPropertyValue('--header-gap')) || 0
    let available = Infinity
    let reserved = 0
    let natural = 0
    let frame = 0
    const observer = new ResizeObserver((entries) => {
      for (const { target, contentRect } of entries) {
        if (target === box) available = contentRect.width
        else if (target === actions) reserved = contentRect.width + gap
        else natural = contentRect.width
      }
      // The switch waits for the next frame. Changing the layout inside the callback would resize
      // elements other observers already measured, and the browser reports that as a ResizeObserver loop.
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        // A fraction of a pixel counts against fitting, so rounding never pushes the full header past its line.
        setNarrow(Math.ceil(natural) > Math.floor(available - reserved))
      })
    })
    observer.observe(box)
    observer.observe(full)
    if (actions) observer.observe(actions)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [hasActions])
  return { narrow, boxRef, fullRef, actionsRef }
}

const focusElement = (element: HTMLElement | null) => element?.focus()

// The message of a view that could not be shown. After a navigation it takes the focus, because the
// clicked node or crumb is gone.
function ViewError({ message, focus }: { message: string; focus: boolean }) {
  return (
    <div className={styles.error} role="alert" tabIndex={-1} ref={focus ? focusElement : undefined}>
      <Banner variant="critical" title="This view could not be shown." description={message} />
    </div>
  )
}

interface ProvenanceExplorerProps {
  index: ProvenanceIndex
  // The owner holds the navigation. The explorer reports each click and each crumb through onNavChange.
  nav: Navigation
  onNavChange: (next: Navigation) => void
  // Whether whatever replaces the view takes focus, because the clicked node or crumb is gone. The owner
  // sets it after a navigation that started in the explorer and unsets it after one that started outside.
  focusOnNavigation: boolean
  // Shown at the right end of the header.
  actions?: ReactNode
  embedded?: boolean
}

// The index comes ready-built from the parent. The explorer runs the queries itself, one per level.
// The parent box must have a height. The card fills it and the graph scrolls inside the card.
export function ProvenanceExplorer({
  index,
  nav,
  onNavChange,
  focusOnNavigation,
  actions,
  embedded = false,
}: ProvenanceExplorerProps) {
  const { view, selectedDataset, selectedProcess, selectedGroup, selectedNode } = nav
  const hasActions = Boolean(actions)
  const { narrow, boxRef, fullRef, actionsRef } = useNarrowHeader(hasActions)

  // The explorer computes only the level of the current view. The content keeps its identity until the
  // index or the selection changes, because the canvas lays out again for new arrays.
  const content = useMemo(
    () => contentOf(index, { view, selectedDataset, selectedProcess, selectedGroup, selectedNode }),
    [index, view, selectedDataset, selectedProcess, selectedGroup, selectedNode],
  )
  const viewKey = JSON.stringify([view, selectedDataset, selectedProcess, selectedGroup, selectedNode])

  const handleNodeClick = useCallback(
    (id: string) => {
      switch (view) {
        case 'datasets':
          onNavChange({ view: 'processes', selectedDataset: id })
          break
        case 'processes':
          // A process of another dataset opens the groups of that dataset.
          onNavChange({
            view: 'groups',
            selectedDataset: index.processByKey.get(id)?.datasetId ?? selectedDataset,
            selectedProcess: id,
          })
          break
        case 'groups':
          onNavChange({ ...nav, view: 'detail', selectedGroup: id })
          break
        case 'detail':
          onNavChange({ ...nav, view: 'lineage', selectedNode: id })
          break
        case 'lineage':
          onNavChange({ ...nav, selectedNode: id })
          break
      }
    },
    [nav, view, index, selectedDataset, onNavChange],
  )

  // The labels come from the index, and an id the index does not know is its own label.
  const crumbs: Crumb[] = [{ label: 'Datasets', view: 'datasets' }]
  if (selectedDataset !== undefined) {
    crumbs.push({ label: index.datasetById.get(selectedDataset)?.identifier ?? selectedDataset, view: 'processes' })
  }
  if (selectedProcess !== undefined) {
    crumbs.push({ label: index.processByKey.get(selectedProcess)?.name ?? selectedProcess, view: 'groups' })
  }
  if (selectedGroup !== undefined) {
    crumbs.push({ label: index.groupById.get(selectedGroup)?.label ?? selectedGroup, view: 'detail' })
  }
  if (selectedNode !== undefined) {
    crumbs.push({ label: selectedNode, view: 'lineage' })
  }

  const emptyMessage =
    content.kind === 'none'
      ? 'This selection is not part of the loaded ARC.'
      : content.kind === 'graph' && content.shown.nodes.length === 0
        ? (NOTHING_TO_SHOW[view] ?? null)
        : null
  const failed = content.kind === 'failed'
  const note = content.kind === 'graph' && content.shown.cap
    ? `Showing ${content.shown.cap.shown} of ${content.shown.cap.total} nodes.`
    : null
  const incomplete = content.kind === 'graph' ? incompleteNote(content.shown.incomplete) : ''

  return (
    <section className={styles.root} data-embedded={embedded || undefined} aria-label="Provenance explorer">
      <header className={styles.header}>
        <Breadcrumbs
          crumbs={crumbs}
          narrow={narrow}
          onNavigate={(target) => onNavChange(backTo(nav, target))}
        />
        {hasActions && (
          <div className={styles.actions} ref={actionsRef}>
            {actions}
          </div>
        )}
        <HeaderRuler crumbs={crumbs} boxRef={boxRef} fullRef={fullRef} />
      </header>
      {/* An error while the body renders shows the message in its place and leaves the header alone. A new view clears it. */}
      <ErrorBoundary
        resetKey={viewKey}
        fallback={(message) => (
          <div className={styles.body}>
            <ViewError message={message} focus={focusOnNavigation} />
          </div>
        )}
      >
        <div className={styles.body}>
          {note && (
            <p className={styles.note} role="status">
              {note}
            </p>
          )}
          {content.kind === 'failed' ? (
            <ViewError message={content.message} focus={focusOnNavigation} />
          ) : emptyMessage === null && content.kind === 'graph' ? (
            <div className={styles.canvas}>
              <GraphCanvas
                nodes={content.shown.nodes}
                edges={content.shown.edges}
                ariaLabel={content.shown.ariaLabel}
                onNodeClick={handleNodeClick}
                centerNodeId={content.shown.centerNodeId}
                resetKey={viewKey}
                focusOnMount={focusOnNavigation}
              />
            </div>
          ) : (
            <p className={styles.empty} tabIndex={-1} ref={focusOnNavigation ? focusElement : undefined}>
              {emptyMessage}
            </p>
          )}
          {incomplete && (
            <p className={`${styles.note} ${styles.noteBelow}`} role="status">
              {incomplete}
            </p>
          )}
          {view === 'detail' && emptyMessage === null && !failed && (
            <p className={styles.hint}>Select a node to see its lineage.</p>
          )}
        </div>
      </ErrorBoundary>
      <div className={styles.footer}>
        <Legend view={view} />
      </div>
    </section>
  )
}
