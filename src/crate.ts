import { crateHasPath, crateProvenance, crateTree, registerCrate } from './crateData';
import { graphToViewerTarget, normalizePath, viewerToNavigation, type ViewerTarget } from './provenance/linking';
import type { Navigation } from './provenance/navigation';
import { loadCrate as readCrate } from './util/crateLoader';

export type CrateKind = 'arc' | 'run' | 'workflow';

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

/**
 * Parses the text of a `ro-crate-metadata.json`. Throws when the text is not a crate the viewer can read.
 * Parsing is the expensive part, so call it once per document and keep the result (in state or a memo).
 * A new call returns a new crate, and the components start over for a new crate.
 */
export function loadCrate(json: string): Crate {
    const loaded = readCrate(json);
    const crate: Crate = Object.freeze({ kind: loaded.kind, landingPath: loaded.landingPath });
    registerCrate(crate, loaded);
    // The components build the tree while they render. Building it here makes a crate whose tree cannot
    // be built fail in this call, where the caller can catch it.
    crateTree(crate);
    return crate;
}

/** Where the file browser starts: the run or workflow folder of such a crate, and the root of any other. */
export function landingLocation(crate: Crate): FileLocation {
    const path = crate.landingPath;
    return { path: path !== undefined && crateHasPath(crate, path) ? path : '' };
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
