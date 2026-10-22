// Where the provenance explorer is. The explorer and the web viewer share these types.

export type ProvenanceView = 'datasets' | 'processes' | 'groups' | 'detail' | 'lineage'

export interface Navigation {
  view: ProvenanceView
  selectedDataset?: string
  selectedProcess?: string
  selectedGroup?: string
  selectedNode?: string
}

export const START_NAVIGATION: Navigation = { view: 'datasets' }

const VIEWS: ProvenanceView[] = ['datasets', 'processes', 'groups', 'detail', 'lineage']

// Returns to an earlier view and drops the selections that belong to the deeper ones.
export function backTo(nav: Navigation, view: ProvenanceView): Navigation {
  const depth = VIEWS.indexOf(view)
  return {
    view,
    selectedDataset: depth >= 1 ? nav.selectedDataset : undefined,
    selectedProcess: depth >= 2 ? nav.selectedProcess : undefined,
    selectedGroup: depth >= 3 ? nav.selectedGroup : undefined,
    selectedNode: depth >= 4 ? nav.selectedNode : undefined,
  }
}
