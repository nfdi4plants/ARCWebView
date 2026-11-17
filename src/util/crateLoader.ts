import { ARC, JsonController, ROCrate } from '@nfdi4plants/arctrl';

export type LDGraph = ReturnType<typeof JsonController.LDGraph.fromROCrateJsonString>;
type LDNode = InstanceType<typeof ROCrate.LDNode>;
type Context = InstanceType<typeof ROCrate.LDContext> | undefined;

// ARCtrl types optional values as T | Some<T>. For the values read here the runtime value is the plain value or
// undefined, so the cast only narrows the type.
function plain<T>(option: unknown): T | undefined {
    return option as T | undefined;
}

export type CrateKind = 'arc' | 'run' | 'workflow';

export interface LoadedCrate {
    arc: ARC;
    ldGraph: LDGraph;
    kind: CrateKind;
    /** File tree paths for the viewer. */
    paths: string[];
    /** The isa file the viewer opens first: runs/<id>/isa.run.xlsx or workflows/<id>/isa.workflow.xlsx. */
    landingPath?: string;
}

const WORKFLOW_RUN_PROFILE = 'https://w3id.org/ro/wfrun/workflow';
const WORKFLOW_RO_CRATE_PROFILE = 'https://w3id.org/workflowhub/workflow-ro-crate';

// The packer drops these paths too. ARCtrl turns the SPDX license id into a path like
// 'https:/spdx.org/licenses/CC-BY-4.0' that would show up as a folder named 'https:'.
const URI_SCHEME = /^[A-Za-z][A-Za-z0-9+.-]+:$/;

// A property value is a plain string or an LDRef with an Id, or an array of those.
function idsOf(value: unknown): string[] {
    if (value === undefined || value === null) return [];
    if (typeof value === 'string') return [value];
    if (Array.isArray(value)) return value.flatMap(idsOf);
    const id = (value as { Id?: unknown }).Id;
    return typeof id === 'string' ? [id] : [];
}

function conformsToOf(node: LDNode | undefined, context: Context): string[] {
    if (node === undefined) return [];
    return idsOf(node.TryGetProperty(ROCrate.LDDataset.conformsTo, context));
}

// Matches the profile with or without a version segment, so '.../workflow/0.5' and '.../workflow/0.6' both match.
function hasProfile(profiles: string[], profile: string): boolean {
    return profiles.some((uri) => uri === profile || uri.startsWith(profile + '/'));
}

function collectPaths(arc: ARC, kind: CrateKind): string[] {
    return Array.from(arc.FileSystem.Tree.ToFilePaths(true)).filter(
        (path) => !URI_SCHEME.test(path.split('/')[0]) && !(kind !== 'arc' && path === 'isa.investigation.xlsx')
    );
}

function readPlain(json: string, ldGraph: LDGraph): LoadedCrate {
    const arc = JsonController.ARC.fromROCrateJsonString(json);
    return {
        arc,
        ldGraph,
        kind: 'arc',
        paths: collectPaths(arc, 'arc'),
    };
}

function classify(
    root: LDNode,
    descriptor: LDNode | undefined,
    context: Context
): CrateKind {
    const rootProfiles = conformsToOf(root, context);
    if (hasProfile(rootProfiles, WORKFLOW_RUN_PROFILE)) return 'run';
    const allProfiles = [...rootProfiles, ...conformsToOf(descriptor, context)];
    if (hasProfile(allProfiles, WORKFLOW_RO_CRATE_PROFILE)) return 'workflow';
    return 'arc';
}

// Errors from the ARCtrl decoders propagate to the caller.
function readRunOrWorkflow(
    kind: 'run' | 'workflow',
    json: string,
    ldGraph: LDGraph,
    root: LDNode,
    context: Context
): LoadedCrate {
    const run = kind === 'run' ? ROCrate.Conversion.datasetToArcRun(root, ldGraph, context) : undefined;
    const workflow =
        kind === 'workflow' ? ROCrate.Conversion.datasetToArcWorkflow(root, ldGraph, context) : undefined;
    const item = run ?? workflow;
    if (item === undefined) {
        throw new Error('the root could not be decoded');
    }

    // The ARC parser leaves runs and workflows empty on these crates, but it knows the file list and the license.
    const base = JsonController.ARC.fromROCrateJsonString(json);
    const arc = new ARC(
        item.Identifier,
        item.Title ?? item.Identifier,
        item.Description,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        workflow ? [workflow] : undefined,
        run ? [run] : undefined,
        undefined,
        undefined,
        undefined,
        base.FileSystem,
        base.License
    );

    const landingPath =
        kind === 'run'
            ? `runs/${item.Identifier}/isa.run.xlsx`
            : `workflows/${item.Identifier}/isa.workflow.xlsx`;
    // The ARC constructor already adds the virtual isa.run.xlsx or isa.workflow.xlsx to the file tree.
    const paths = collectPaths(arc, kind);

    return { arc, ldGraph, kind, paths, landingPath };
}

export function loadCrate(json: string): LoadedCrate {
    const ldGraph = JsonController.LDGraph.fromROCrateJsonString(json);
    const context = plain<Context>(ldGraph.TryGetContext());
    const root = plain<LDNode>(ldGraph.TryGetNode('./'));
    if (root === undefined) return readPlain(json, ldGraph);

    const descriptor = plain<LDNode>(ldGraph.TryGetNode('ro-crate-metadata.json'));
    const kind = classify(root, descriptor, context);
    if (kind === 'arc') return readPlain(json, ldGraph);

    return readRunOrWorkflow(kind, json, ldGraph, root, context);
}
