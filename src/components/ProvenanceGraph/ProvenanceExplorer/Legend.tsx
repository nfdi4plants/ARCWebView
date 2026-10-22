import type { ProvenanceView } from '../../../provenance/navigation'
import styles from './ProvenanceExplorer.module.css'

export type { ProvenanceView }

interface LegendItem {
  label: string
  swatch: string
}

const DATASET_KINDS: LegendItem[] = [
  { label: 'Study', swatch: styles.study },
  { label: 'Assay', swatch: styles.assay },
  { label: 'Run', swatch: styles.run },
]

const OTHER_DATASET: LegendItem = { label: 'Other dataset', swatch: styles.dashed }

const CATEGORIES: LegendItem[] = [
  { label: 'Characteristic', swatch: styles.characteristic },
  { label: 'Factor', swatch: styles.factor },
  { label: 'Parameter', swatch: styles.parameter },
  { label: 'Component', swatch: styles.component },
  { label: 'Protocol and other', swatch: '' },
]

// The footer shows the whole scale that can occur in a view, whatever the graph holds.
function itemsFor(view: ProvenanceView): LegendItem[] {
  if (view === 'datasets') return DATASET_KINDS
  if (view === 'processes') return [...DATASET_KINDS, OTHER_DATASET]
  return [...DATASET_KINDS, ...CATEGORIES]
}

export function Legend({ view }: { view: ProvenanceView }) {
  return (
    <ul className={styles.legend} aria-label="Legend">
      {itemsFor(view).map(({ label, swatch }) => (
        <li key={label} className={styles.legendItem}>
          <i className={`${styles.swatch} ${swatch}`} aria-hidden="true" />
          {label}
        </li>
      ))}
    </ul>
  )
}
