// What the viewer keeps for each loaded crate. This module is for the components. The public functions are
// in crate.ts, whose types name no ARCtrl type, so a consumer's compiler never has to read ARCtrl.

import type { ARC } from '@nfdi4plants/arctrl';
import { errorMessage } from './components/ProvenanceGraph/errorMessage';
import type { Crate } from './crate';
import { buildProvenanceIndex } from './provenance/buildIndex';
import { buildDataNodePaths } from './provenance/linking';
import type { ProvenanceIndex } from './provenance/types';
import type { LoadedCrate } from './util/crateLoader';
import { buildFileTree, findNodeAtPath } from './util/fileTree';
import type { TreeNode } from './util/types';

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

// Called once by loadCrate for the crate it creates.
export function registerCrate(crate: Crate, loaded: LoadedCrate): void {
    dataOf.set(crate, { id: ++lastId, loaded });
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
