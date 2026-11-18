import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { importTs } from './importTs.mjs';

const { loadCrate } = await importTs('../src/util/crateLoader.ts');
const { buildProvenanceIndex } = await importTs('../src/provenance/buildIndex.ts');
const {
    dataPathOf,
    normalizePath,
    datasetFolder,
    isaFileOf,
    graphToViewerTarget,
    buildDataNodePaths,
    viewerToNavigation,
} = await importTs('../src/provenance/linking.ts');

const runJson = readFileSync(new URL('./fixtures/run-crate.json', import.meta.url), 'utf8');
const runIndex = buildProvenanceIndex(loadCrate(runJson).arc);
const runPaths = buildDataNodePaths(runIndex);

const RUN_ID = 'runs/count-reads-demo/';
const RUN_FOLDER = 'runs/count-reads-demo';
const RUN_ISA = 'runs/count-reads-demo/isa.run.xlsx';
const TRIM = `${RUN_ID}::trim`;
const COUNT = `${RUN_ID}::count`;
const always = () => true;

// Builds a small index by hand. Only the fields that linking.ts reads are filled in.
function makeIndex({ datasets = [], processes = [], nodes = [] }) {
    return {
        datasets,
        processes,
        rows: [],
        nodes,
        datasetById: new Map(datasets.map((dataset) => [dataset.id, dataset])),
        processByKey: new Map(processes.map((process) => [process.key, process])),
        rowById: new Map(),
        nodeById: new Map(nodes.map((node) => [node.id, node])),
        groupById: new Map(),
        producedBy: new Map(),
        consumedBy: new Map(),
    };
}

const dataset = (id, kind = 'run') => ({ id, kind, identifier: datasetFolder(id).split('/').pop() });
const processOf = (datasetId, name) => ({ key: `${datasetId}::${name}`, name, datasetId });
const nodeOf = (id, kind = 'data', processKeys = []) => ({ id, kind, annotations: [], datasetIds: [], processKeys });

// One run with the two tables trim and count and a few hand-made nodes.
const handIndex = makeIndex({
    datasets: [dataset(RUN_ID)],
    processes: [processOf(RUN_ID, 'trim'), processOf(RUN_ID, 'count')],
    nodes: [
        nodeOf(`${RUN_ID}results`, 'data', [TRIM]),
        nodeOf(`${RUN_ID}data.csv#col=1`, 'data', [TRIM]),
        nodeOf(`${RUN_ID}data.csv#col=2`, 'data', [TRIM]),
        nodeOf(`${RUN_ID}single.csv#col=1`, 'data', [TRIM]),
        nodeOf('sample-1', 'sample', [COUNT, TRIM]),
        nodeOf('ghost.txt', 'data', [COUNT]),
        nodeOf('#', 'data', [TRIM]),
    ],
});
const handPaths = buildDataNodePaths(handIndex);

test('dataPathOf cuts a selector off a two part name', () => {
    assert.equal(dataPathOf('file.csv#col=1'), 'file.csv');
    assert.equal(dataPathOf('assays/A/dataset/file.csv#col=1'), 'assays/A/dataset/file.csv');
});

test('dataPathOf trims # from both ends before it splits', () => {
    assert.equal(dataPathOf('#file.csv'), 'file.csv');
    assert.equal(dataPathOf('file.csv#'), 'file.csv');
    assert.equal(dataPathOf('##file.csv##'), 'file.csv');
    assert.equal(dataPathOf('#file.csv#col=1#'), 'file.csv');
    assert.equal(dataPathOf('#'), '');
});

test('dataPathOf keeps the whole name when it has more than two parts', () => {
    assert.equal(dataPathOf('a#b#c'), 'a#b#c');
    assert.equal(dataPathOf('#a#b#c#'), 'a#b#c');
    assert.equal(dataPathOf('plain/file.csv'), 'plain/file.csv');
});

test('normalizePath drops empty segments', () => {
    assert.equal(normalizePath('a//b'), 'a/b');
    assert.equal(normalizePath('a/b/'), 'a/b');
    assert.equal(normalizePath('/a/b'), 'a/b');
    assert.equal(normalizePath('/'), '');
    assert.equal(normalizePath(''), '');
});

test('datasetFolder removes one trailing slash only', () => {
    assert.equal(datasetFolder('assays/X/'), 'assays/X');
    assert.equal(datasetFolder('assays/X'), 'assays/X');
    assert.equal(datasetFolder('assays/X//'), 'assays/X/');
});

test('isaFileOf names the isa file by dataset kind', () => {
    assert.equal(isaFileOf(dataset('studies/S/', 'study')), 'studies/S/isa.study.xlsx');
    assert.equal(isaFileOf(dataset('assays/A/', 'assay')), 'assays/A/isa.assay.xlsx');
    assert.equal(isaFileOf(dataset('runs/R/', 'run')), 'runs/R/isa.run.xlsx');
    assert.equal(isaFileOf(dataset('runs/R', 'run')), 'runs/R/isa.run.xlsx');
});

test('viewerToNavigation maps the root path to the datasets view', () => {
    assert.deepEqual(viewerToNavigation('', undefined, runIndex, runPaths), { view: 'datasets' });
    assert.deepEqual(viewerToNavigation('/', undefined, runIndex, runPaths), { view: 'datasets' });
});

test('viewerToNavigation maps the isa file without a table to the processes view', () => {
    assert.deepEqual(viewerToNavigation(RUN_ISA, undefined, runIndex, runPaths), {
        view: 'processes',
        selectedDataset: RUN_ID,
    });
});

test('viewerToNavigation maps the isa file with an existing table to the groups view', () => {
    assert.deepEqual(viewerToNavigation(RUN_ISA, 'trim', runIndex, runPaths), {
        view: 'groups',
        selectedDataset: RUN_ID,
        selectedProcess: TRIM,
    });
    assert.deepEqual(viewerToNavigation(RUN_ISA, 'count', runIndex, runPaths), {
        view: 'groups',
        selectedDataset: RUN_ID,
        selectedProcess: COUNT,
    });
});

test('viewerToNavigation falls back to the processes view for an unknown table', () => {
    assert.deepEqual(viewerToNavigation(RUN_ISA, 'nope', runIndex, runPaths), {
        view: 'processes',
        selectedDataset: RUN_ID,
    });
});

test('viewerToNavigation normalizes the path of the isa file', () => {
    assert.deepEqual(viewerToNavigation('runs//count-reads-demo/isa.run.xlsx', 'trim', runIndex, runPaths), {
        view: 'groups',
        selectedDataset: RUN_ID,
        selectedProcess: TRIM,
    });
});

test('viewerToNavigation maps a data node path to the lineage view', () => {
    const id = 'runs/count-reads-demo/results/counts.tsv';
    assert.deepEqual(viewerToNavigation(id, undefined, runIndex, runPaths), { view: 'lineage', selectedNode: id });
});

test('viewerToNavigation walks up from a file inside a data node folder', () => {
    assert.deepEqual(viewerToNavigation(`${RUN_ID}results/deep/x.txt`, undefined, handIndex, handPaths), {
        view: 'lineage',
        selectedNode: `${RUN_ID}results`,
    });
});

test('viewerToNavigation falls through to the dataset folder when selector variants have no plain node', () => {
    assert.deepEqual(viewerToNavigation(`${RUN_ID}data.csv`, undefined, handIndex, handPaths), {
        view: 'processes',
        selectedDataset: RUN_ID,
    });
});

test('viewerToNavigation takes a single selector variant as the node of the path', () => {
    assert.deepEqual(viewerToNavigation(`${RUN_ID}single.csv`, undefined, handIndex, handPaths), {
        view: 'lineage',
        selectedNode: `${RUN_ID}single.csv#col=1`,
    });
});

test('viewerToNavigation prefers the plain node over its selector variants', () => {
    const index = makeIndex({
        datasets: [dataset(RUN_ID)],
        nodes: [nodeOf('f/x.csv#col=1'), nodeOf('f/x.csv'), nodeOf('f/x.csv#col=2')],
    });
    assert.deepEqual(viewerToNavigation('f/x.csv', undefined, index, buildDataNodePaths(index)), {
        view: 'lineage',
        selectedNode: 'f/x.csv',
    });
});

test('viewerToNavigation maps another path inside a dataset folder to the processes view', () => {
    assert.deepEqual(viewerToNavigation(`${RUN_ID}README.md`, undefined, runIndex, runPaths), {
        view: 'processes',
        selectedDataset: RUN_ID,
    });
    assert.deepEqual(viewerToNavigation(RUN_FOLDER, undefined, runIndex, runPaths), {
        view: 'processes',
        selectedDataset: RUN_ID,
    });
});

test('viewerToNavigation gives undefined for a path outside every dataset', () => {
    assert.equal(viewerToNavigation('workflows/count-reads/isa.workflow.xlsx', undefined, runIndex, runPaths), undefined);
    assert.equal(viewerToNavigation('runs/count-reads-demo-2/x.txt', undefined, runIndex, runPaths), undefined);
});

test('KNOWN: a path absent from the crate under a dataset folder still maps to the processes view', () => {
    assert.deepEqual(viewerToNavigation('runs/count-reads-demo/absent.txt', undefined, runIndex, runPaths), {
        view: 'processes',
        selectedDataset: RUN_ID,
    });
});

test('KNOWN: the container folders studies, assays and runs map to undefined', () => {
    for (const container of ['studies', 'assays', 'runs']) {
        assert.equal(viewerToNavigation(container, undefined, runIndex, runPaths), undefined);
    }
});

test('graphToViewerTarget maps the datasets view to the root', () => {
    assert.deepEqual(graphToViewerTarget({ view: 'datasets' }, runIndex, () => false), { path: '' });
});

test('graphToViewerTarget maps the processes view to the dataset folder', () => {
    const nav = { view: 'processes', selectedDataset: RUN_ID };
    assert.deepEqual(graphToViewerTarget(nav, runIndex, always), { path: RUN_FOLDER });
});

test('graphToViewerTarget gives undefined for the processes view when the folder is missing', () => {
    const nav = { view: 'processes', selectedDataset: RUN_ID };
    assert.equal(graphToViewerTarget(nav, runIndex, () => false), undefined);
});

test('graphToViewerTarget maps groups and detail to the isa file and table', () => {
    for (const view of ['groups', 'detail']) {
        const nav = { view, selectedDataset: RUN_ID, selectedProcess: COUNT };
        assert.deepEqual(graphToViewerTarget(nav, runIndex, always), { path: RUN_ISA, table: 'count' });
    }
});

test('graphToViewerTarget gives undefined for a process target whose isa file is missing', () => {
    const nav = { view: 'groups', selectedDataset: RUN_ID, selectedProcess: TRIM };
    assert.equal(graphToViewerTarget(nav, runIndex, (path) => path !== RUN_ISA), undefined);
});

test('graphToViewerTarget maps lineage on an existing data node to its path', () => {
    const id = 'runs/count-reads-demo/results/counts.tsv';
    assert.deepEqual(graphToViewerTarget({ view: 'lineage', selectedNode: id }, runIndex, always), { path: id });
});

test('graphToViewerTarget maps lineage on a selector node to the path without the selector', () => {
    const nav = { view: 'lineage', selectedNode: `${RUN_ID}data.csv#col=1` };
    assert.deepEqual(graphToViewerTarget(nav, handIndex, always), { path: `${RUN_ID}data.csv` });
});

test('graphToViewerTarget maps lineage on a non-file node to the table of the selected process', () => {
    const nav = { view: 'lineage', selectedNode: 'sample-1', selectedProcess: TRIM };
    assert.deepEqual(graphToViewerTarget(nav, handIndex, always), { path: RUN_ISA, table: 'trim' });
});

test('graphToViewerTarget maps lineage on a non-file node to its first process when the selection is foreign', () => {
    const foreign = { view: 'lineage', selectedNode: 'sample-1', selectedProcess: 'other/::x' };
    assert.deepEqual(graphToViewerTarget(foreign, handIndex, always), { path: RUN_ISA, table: 'count' });
    const none = { view: 'lineage', selectedNode: 'sample-1' };
    assert.deepEqual(graphToViewerTarget(none, handIndex, always), { path: RUN_ISA, table: 'count' });
});

test('graphToViewerTarget maps lineage on a data node missing from the tree to its process table', () => {
    const nav = { view: 'lineage', selectedNode: 'ghost.txt' };
    assert.deepEqual(graphToViewerTarget(nav, handIndex, (path) => path !== 'ghost.txt'), {
        path: RUN_ISA,
        table: 'count',
    });
});

test('graphToViewerTarget treats a data node with an empty path as no file', () => {
    const nav = { view: 'lineage', selectedNode: '#' };
    assert.deepEqual(graphToViewerTarget(nav, handIndex, always), { path: RUN_ISA, table: 'trim' });
});

test('graphToViewerTarget gives undefined for unknown ids', () => {
    assert.equal(graphToViewerTarget({ view: 'processes', selectedDataset: 'nope/' }, runIndex, always), undefined);
    assert.equal(graphToViewerTarget({ view: 'processes' }, runIndex, always), undefined);
    assert.equal(graphToViewerTarget({ view: 'groups', selectedProcess: 'nope::x' }, runIndex, always), undefined);
    assert.equal(graphToViewerTarget({ view: 'detail' }, runIndex, always), undefined);
    assert.equal(graphToViewerTarget({ view: 'lineage', selectedNode: 'nope' }, runIndex, always), undefined);
    assert.equal(graphToViewerTarget({ view: 'lineage' }, runIndex, always), undefined);
});

test('a table named Metadata maps in both directions', () => {
    const index = makeIndex({ datasets: [dataset(RUN_ID)], processes: [processOf(RUN_ID, 'Metadata')] });
    const key = `${RUN_ID}::Metadata`;
    assert.deepEqual(viewerToNavigation(RUN_ISA, 'Metadata', index, new Map()), {
        view: 'groups',
        selectedDataset: RUN_ID,
        selectedProcess: key,
    });
    const nav = { view: 'groups', selectedDataset: RUN_ID, selectedProcess: key };
    assert.deepEqual(graphToViewerTarget(nav, index, always), { path: RUN_ISA, table: 'Metadata' });
});

test('round trip is not the identity: a file under the run folder comes back as the run folder', () => {
    const file = 'runs/count-reads-demo/README.md';
    const nav = viewerToNavigation(file, undefined, runIndex, runPaths);
    assert.deepEqual(nav, { view: 'processes', selectedDataset: RUN_ID });
    assert.deepEqual(graphToViewerTarget(nav, runIndex, always), { path: RUN_FOLDER });
    assert.notEqual(graphToViewerTarget(nav, runIndex, always).path, file);
});

test('buildDataNodePaths groups selector variants of one file under one entry with sorted ids', () => {
    const index = makeIndex({
        nodes: [nodeOf('d/f.csv#col=2'), nodeOf('d/f.csv#col=1'), nodeOf('d/f.csv'), nodeOf('d//g.csv')],
    });
    const paths = buildDataNodePaths(index);
    assert.deepEqual([...paths.keys()], ['d/f.csv', 'd/g.csv']);
    assert.deepEqual(paths.get('d/f.csv'), ['d/f.csv', 'd/f.csv#col=1', 'd/f.csv#col=2']);
    assert.deepEqual(paths.get('d/g.csv'), ['d//g.csv']);
});

test('buildDataNodePaths leaves out non-data nodes', () => {
    const index = makeIndex({
        nodes: [nodeOf('s1', 'sample'), nodeOf('src', 'source'), nodeOf('m', 'material'), nodeOf('d/f.csv', 'data')],
    });
    assert.deepEqual([...buildDataNodePaths(index).entries()], [['d/f.csv', ['d/f.csv']]]);
});
