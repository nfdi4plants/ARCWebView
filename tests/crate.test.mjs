import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { importTs } from './importTs.mjs';

const {
    loadCrate,
    crateId,
    crateArc,
    crateTree,
    crateHasPath,
    crateProvenance,
    landingLocation,
    locationToNavigation,
    navigationToLocation,
} = await importTs('../src/crate.ts');

const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8');
const arcJson = read('../src/assets/arc-ro-crate-metadata.json');
const runJson = read('./fixtures/run-crate.json');
const workflowJson = read('./fixtures/workflow-crate.json');

const RUN_ID = 'runs/count-reads-demo/';
const RUN_FOLDER = 'runs/count-reads-demo';
const RUN_ISA = 'runs/count-reads-demo/isa.run.xlsx';

test('a crate exposes its kind and landing path and nothing else', () => {
    const run = loadCrate(runJson);
    assert.deepEqual({ ...run }, { kind: 'run', landingPath: RUN_FOLDER });
    assert.ok(Object.isFrozen(run));

    assert.deepEqual({ ...loadCrate(workflowJson) }, { kind: 'workflow', landingPath: 'workflows/count-reads' });
    assert.deepEqual({ ...loadCrate(arcJson) }, { kind: 'arc', landingPath: undefined });
});

test('loadCrate throws for text that is not a crate', () => {
    assert.throws(() => loadCrate('not json'));
});

test('a crate whose file tree cannot be built fails in loadCrate', () => {
    const crate = JSON.parse(arcJson);
    const file = crate['@graph'].find((node) => node.sha256 !== undefined && node.contentSize !== undefined);
    // The size is text in a crate. A number cannot be formatted, so the tree cannot be built.
    file.contentSize = 42;
    assert.throws(() => loadCrate(JSON.stringify(crate)));
});

test('an object that loadCrate did not create is refused', () => {
    assert.throws(() => crateTree({ kind: 'arc', landingPath: undefined }), /not created by loadCrate/);
});

test('each loaded crate gets its own id and the same crate keeps it', () => {
    const first = loadCrate(runJson);
    const second = loadCrate(runJson);
    assert.notEqual(crateId(first), crateId(second));
    assert.equal(crateId(first), crateId(first));
});

test('the tree and the provenance index are built once per crate', () => {
    const run = loadCrate(runJson);
    assert.equal(crateTree(run), crateTree(run));
    assert.equal(crateProvenance(run), crateProvenance(run));
    assert.equal(crateArc(run).Runs.length, 1);
});

test('the tree holds the folders and files of the crate, and the empty path is its root', () => {
    const run = loadCrate(runJson);
    assert.equal(crateTree(run).id, '');
    assert.ok(crateHasPath(run, ''));
    assert.ok(crateHasPath(run, 'runs'));
    assert.ok(crateHasPath(run, RUN_FOLDER));
    assert.ok(crateHasPath(run, RUN_ISA));
    assert.ok(!crateHasPath(run, `${RUN_FOLDER}/absent.txt`));
    assert.ok(!crateHasPath(run, 'isa.investigation.xlsx'));
});

test('the landing location is the run or workflow folder, and the root of a full ARC', () => {
    assert.deepEqual(landingLocation(loadCrate(runJson)), { path: RUN_FOLDER });
    assert.deepEqual(landingLocation(loadCrate(workflowJson)), { path: 'workflows/count-reads' });
    assert.deepEqual(landingLocation(loadCrate(arcJson)), { path: '' });
});

test('a workflow crate has no provenance and no mapping in either direction', () => {
    const workflow = loadCrate(workflowJson);
    assert.equal(crateProvenance(workflow), undefined);
    assert.equal(locationToNavigation(workflow, { path: '' }), undefined);
    assert.equal(locationToNavigation(workflow, { path: workflow.landingPath }), undefined);
    assert.equal(navigationToLocation(workflow, { view: 'datasets' }), undefined);
});

test('a place in the file browser maps to its place in the graph', () => {
    const run = loadCrate(runJson);
    assert.deepEqual(locationToNavigation(run, { path: '' }), { view: 'datasets' });
    assert.deepEqual(locationToNavigation(run, { path: RUN_FOLDER }), { view: 'processes', selectedDataset: RUN_ID });
    assert.deepEqual(locationToNavigation(run, { path: RUN_ISA }), { view: 'processes', selectedDataset: RUN_ID });
    assert.deepEqual(locationToNavigation(run, { path: RUN_ISA, table: 'trim' }), {
        view: 'groups',
        selectedDataset: RUN_ID,
        selectedProcess: `${RUN_ID}::trim`,
    });
    assert.deepEqual(locationToNavigation(run, { path: `/${RUN_FOLDER}//isa.run.xlsx` }), {
        view: 'processes',
        selectedDataset: RUN_ID,
    });
});

test('a path that is not in the crate has no place in the graph', () => {
    const run = loadCrate(runJson);
    assert.equal(locationToNavigation(run, { path: `${RUN_FOLDER}/absent.txt` }), undefined);
    assert.equal(locationToNavigation(run, { path: 'runs' }), undefined);
    assert.equal(locationToNavigation(run, { path: 'nowhere/at/all' }), undefined);
});

test('a place in the graph maps to its place in the file browser', () => {
    const run = loadCrate(runJson);
    assert.deepEqual(navigationToLocation(run, { view: 'datasets' }), { path: '' });
    assert.deepEqual(navigationToLocation(run, { view: 'processes', selectedDataset: RUN_ID }), { path: RUN_FOLDER });
    assert.deepEqual(
        navigationToLocation(run, { view: 'groups', selectedDataset: RUN_ID, selectedProcess: `${RUN_ID}::count` }),
        { path: RUN_ISA, table: 'count' },
    );
    assert.equal(navigationToLocation(run, { view: 'processes', selectedDataset: 'runs/unknown/' }), undefined);
});

test('the full example ARC maps its datasets in both directions', () => {
    const arc = loadCrate(arcJson);
    const { index } = crateProvenance(arc);
    assert.ok(index.datasets.length > 0);
    for (const dataset of index.datasets) {
        const folder = dataset.id.slice(0, -1);
        assert.deepEqual(locationToNavigation(arc, { path: folder }), { view: 'processes', selectedDataset: dataset.id });
        assert.deepEqual(navigationToLocation(arc, { view: 'processes', selectedDataset: dataset.id }), { path: folder });
    }
});
