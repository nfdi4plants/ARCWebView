import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { JsonController } from '@nfdi4plants/arctrl';
import ts from 'typescript';

// A data: module cannot resolve bare package names, so the arctrl specifier becomes a file: URL.
async function importTs(relativePath, { resolveArctrl = false } = {}) {
    const source = readFileSync(new URL(relativePath, import.meta.url), 'utf8');
    let { outputText } = ts.transpileModule(source, {
        compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
    });
    if (resolveArctrl) {
        outputText = outputText.replace("'@nfdi4plants/arctrl'", () =>
            JSON.stringify(import.meta.resolve('@nfdi4plants/arctrl'))
        );
    }
    return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
}

const { loadCrate } = await importTs('../src/util/crateLoader.ts', { resolveArctrl: true });
const { buildProvenanceIndex } = await importTs('../src/provenance/buildIndex.ts');
const { processGraph } = await importTs('../src/provenance/queries.ts');

const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8');
const arcJson = read('../src/assets/arc-ro-crate-metadata.json');
const runJson = read('./fixtures/run-crate.json');
const workflowJson = read('./fixtures/workflow-crate.json');

// Returns the fixture JSON with the root entity changed by the callback.
function mutateRoot(json, change) {
    const crate = JSON.parse(json);
    change(crate['@graph'].find((node) => node['@id'] === './'));
    return JSON.stringify(crate);
}

test('run crate loads as an ARC run with a landing path', () => {
    const loaded = loadCrate(runJson);
    assert.equal(loaded.kind, 'run');
    assert.equal(loaded.arc.Identifier, 'count-reads-demo');
    assert.equal(loaded.arc.Title, 'Count reads on demo samples');
    assert.equal(loaded.landingPath, 'runs/count-reads-demo/isa.run.xlsx');
    assert.ok(loaded.paths.includes(loaded.landingPath));
    assert.ok(loaded.paths.every((path) => !path.startsWith('https:')));
    assert.ok(!loaded.paths.includes('isa.investigation.xlsx'));
    assert.equal(loaded.arc.Runs.length, 1);
    const tables = loaded.arc.Runs[0].Tables;
    assert.deepEqual(tables.map((table) => table.Name), ['trim', 'count']);
    assert.deepEqual(tables.map((table) => table.RowCount), [2, 2]);
    assert.equal(loaded.arc.Workflows.length, 0);
    assert.equal(loaded.arc.Contacts.length, 0);
});

test('workflow crate loads as an ARC workflow', () => {
    const loaded = loadCrate(workflowJson);
    assert.equal(loaded.kind, 'workflow');
    assert.equal(loaded.landingPath, 'workflows/count-reads/isa.workflow.xlsx');
    assert.ok(loaded.paths.includes(loaded.landingPath));
    assert.equal(loaded.arc.Workflows[0].Version, '1.0.0');
    assert.equal(loaded.arc.Workflows[0].URI, 'https://example.org/workflows/count-reads');
    assert.equal(loaded.arc.Runs.length, 0);
});

test('provenance index of the run crate links the trim table to the count table', () => {
    const index = buildProvenanceIndex(loadCrate(runJson).arc);
    assert.deepEqual(index.datasets.map((dataset) => dataset.id), ['runs/count-reads-demo/']);
    assert.deepEqual(index.processes.map((process) => process.name), ['trim', 'count']);

    const [trim, count] = index.processes.map((process) => process.key);
    const graph = processGraph(index, 'runs/count-reads-demo/');
    assert.deepEqual(graph.nodes.map((node) => node.key), [trim, count]);
    assert.equal(graph.edges.length, 1);
    assert.equal(graph.edges[0].from, trim);
    assert.equal(graph.edges[0].to, count);
    assert.ok(graph.edges[0].sharedNodeIds.length > 0);
});

test('full ARC asset loads as a plain ARC with the paths ARCtrl reports', () => {
    const loaded = loadCrate(arcJson);
    assert.equal(loaded.kind, 'arc');
    assert.equal(loaded.landingPath, undefined);
    const expected = Array.from(JsonController.ARC.fromROCrateJsonString(arcJson).FileSystem.Tree.ToFilePaths(true));
    assert.deepEqual(loaded.paths, expected);
});

test('run crate without an isa.run.xlsx entity still gets the landing path from the ARC constructor', () => {
    const landing = 'runs/count-reads-demo/isa.run.xlsx';
    const removed = new Set(['./' + landing, './runs/count-reads-demo/']);
    const crate = JSON.parse(runJson);
    crate['@graph'] = crate['@graph'].filter((node) => !removed.has(node['@id']));
    for (const node of crate['@graph']) {
        for (const [key, value] of Object.entries(node)) {
            if (Array.isArray(value)) node[key] = value.filter((item) => !removed.has(item?.['@id']));
            else if (removed.has(value?.['@id'])) delete node[key];
        }
    }
    const json = JSON.stringify(crate);

    const legacy = Array.from(JsonController.ARC.fromROCrateJsonString(json).FileSystem.Tree.ToFilePaths(true));
    const loaded = loadCrate(json);
    // Guard: the legacy reader has no file for the landing path, so the loader's path comes from the ARC constructor.
    assert.ok(!legacy.includes(landing));
    assert.equal(loaded.kind, 'run');
    assert.equal(loaded.landingPath, landing);
    assert.ok(loaded.paths.includes(landing));
});

test('run crate without an about entry throws', () => {
    const json = mutateRoot(runJson, (root) => {
        delete root.about;
    });
    assert.throws(() => loadCrate(json));
});

test('workflow crate without a root identifier throws', () => {
    const json = mutateRoot(workflowJson, (root) => {
        delete root.identifier;
    });
    assert.throws(() => loadCrate(json), /Could not access property `identifier`/);
});
