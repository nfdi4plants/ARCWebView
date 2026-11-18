import type { ARC } from '@nfdi4plants/arctrl';
import { errorMessage } from './components/ProvenanceGraph/errorMessage';
import { buildProvenanceIndex } from './provenance/buildIndex';
import {
    buildDataNodePaths,
    graphToViewerTarget,
    normalizePath,
    viewerToNavigation,
    type ViewerTarget,
} from './provenance/linking';
import type { Navigation } from './provenance/navigation';
import type { ProvenanceIndex } from './provenance/types';
import { loadCrate as readCrate, type CrateKind, type LoadedCrate } from './util/crateLoader';
import { buildFileTree, findNodeAtPath } from './util/fileTree';
import type { TreeNode } from './util/types';

/**
 * A loaded crate. The components and the mapping functions take it as their input. It is created once per
 * document by `loadCrate` and never changes. What the viewer derives from it (file tree, provenance index)
 * is built once and kept with it, so several components that get the same crate share that work.
 */
export interface Crate {
    readonly kind: CrateKind;
    /** The folder a run or workflow crate opens on (`runs/<id>` or `workflows/<id>`). */
    readonly landingPath: string | undefined;
}

/** A place in the file browser. `table` names an annotation table of the isa file at `path`. */
export type FileLocation = ViewerTarget;

// A workflow crate has no provenance graph. A crate whose index cannot be built keeps the reason.
export type CrateProvenance =
    | { index: ProvenanceIndex; dataNodePaths: Map<string, string[]>; error?: undefined }
    | { index?: undefined; error: string };

interface CrateData {
    id: number;
    loaded: LoadedCrate;
    tree?: TreeNode;
    // null once it is known that the crate has no graph.
    provenance?: CrateProvenance | null;
}

const dataOf = new WeakMap<Crate, CrateData>();
let lastId = 0;

/**
 * Parses the text of a `ro-crate-metadata.json`. Throws when the text is not a crate the viewer can read.
 * Parsing is the expensive part, so call it once per document and keep the result (in state or a memo).
 * A new call returns a new crate, and the components start over for a new crate.
 */
export function loadCrate(json: string): Crate {
    const loaded = readCrate(json);
    const crate: Crate = Object.freeze({ kind: loaded.kind, landingPath: loaded.landingPath });
    dataOf.set(crate, { id: ++lastId, loaded });
    // The components build the tree while they render. Building it here makes a crate whose tree cannot
    // be built fail in this call, where the caller can catch it.
    crateTree(crate);
    return crate;
}

function dataFor(crate: Crate): CrateData {
    const data = dataOf.get(crate);
    if (!data) throw new Error('This crate was not created by loadCrate.');
    return data;
}

// A number that differs between crates. It keys what must start over for another crate.
export function crateId(crate: Crate): number {
    return dataFor(crate).id;
}

export function crateArc(crate: Crate): ARC {
    return dataFor(crate).loaded.arc;
}

export function crateTree(crate: Crate): TreeNode {
    const data = dataFor(crate);
    return (data.tree ??= buildFileTree(data.loaded));
}

// Whether the file tree has the path. The empty path is the root.
export function crateHasPath(crate: Crate, path: string): boolean {
    return findNodeAtPath(crateTree(crate), path) !== null;
}

/** Where the file browser starts: the run or workflow folder of such a crate, and the root of any other. */
export function landingLocation(crate: Crate): FileLocation {
    const path = crate.landingPath;
    return { path: path !== undefined && crateHasPath(crate, path) ? path : '' };
}

export function crateProvenance(crate: Crate): CrateProvenance | undefined {
    const data = dataFor(crate);
    if (data.provenance === undefined) {
        if (crate.kind === 'workflow') {
            data.provenance = null;
        } else {
            try {
                const index = buildProvenanceIndex(data.loaded.arc);
                data.provenance = { index, dataNodePaths: buildDataNodePaths(index) };
            } catch (error) {
                console.error('Could not build the provenance index', error);
                data.provenance = { error: errorMessage(error) };
            }
        }
    }
    return data.provenance ?? undefined;
}

/**
 * The place in the provenance graph that belongs to a place in the file browser. Undefined when the crate
 * has no graph, when the path is not in the crate, or when the graph has nothing for the path.
 */
export function locationToNavigation(crate: Crate, location: FileLocation): Navigation | undefined {
    const provenance = crateProvenance(crate);
    if (!provenance?.index) return undefined;
    const path = normalizePath(location.path);
    if (!crateHasPath(crate, path)) return undefined;
    return viewerToNavigation(path, location.table, provenance.index, provenance.dataNodePaths);
}

/**
 * The place in the file browser that belongs to a place in the provenance graph. Undefined when the crate
 * has no graph or when the place has no file or folder in the crate.
 */
export function navigationToLocation(crate: Crate, nav: Navigation): FileLocation | undefined {
    const index = crateProvenance(crate)?.index;
    if (!index) return undefined;
    return graphToViewerTarget(nav, index, (path) => crateHasPath(crate, path));
}
