import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import ts from 'typescript';

// Use the installed compiler so these tests also work on Node 20 without a TS runner.
const source = await readFile(new URL('../src/config.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
});
const { resolveViewerConfig } = await import(
    `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`
);

test('no browser window and no supplied options selects showcase defaults', () => {
    assert.equal(typeof window, 'undefined');
    assert.deepEqual(resolveViewerConfig({}), {
        entryPoint: 'showcase',
        loadJson: undefined,
        readmefetch: undefined,
        licensefetch: undefined,
        showUnloadButton: true,
    });
});

test('undefined supported values and unrelated props do not select component mode', () => {
    assert.equal(resolveViewerConfig({
        jsonString: undefined,
        readmefetch: undefined,
        licensefetch: undefined,
        showUnloadButton: undefined,
        children: 'unrelated',
    }).entryPoint, 'showcase');
});

test('each supplied supported prop selects component mode, including false', () => {
    for (const props of [
        { jsonString: async () => '{}' },
        { readmefetch: async () => '# README' },
        { licensefetch: async () => 'MIT' },
        { showUnloadButton: false },
    ]) {
        assert.equal(resolveViewerConfig(props).entryPoint, 'component');
    }
    assert.equal(resolveViewerConfig({ showUnloadButton: false }).showUnloadButton, false);
});

test('component mode uses its supplied loaders and default unload visibility', async () => {
    const config = resolveViewerConfig({
        jsonString: async () => 'component JSON',
        readmefetch: async () => 'component README',
        licensefetch: async () => 'component license',
    });
    assert.equal(await config.loadJson(), 'component JSON');
    assert.equal(await config.readmefetch(), 'component README');
    assert.equal(await config.licensefetch(), 'component license');
    assert.equal(config.showUnloadButton, true);
});

test('unload visibility honors the selected source for both boolean values', () => {
    for (const [props, bridge, expected] of [
        [{ showUnloadButton: false }, undefined, false],
        [{ showUnloadButton: true }, undefined, true],
        [{ showUnloadButton: false }, { showUnloadButton: true }, true],
        [{ showUnloadButton: true }, { showUnloadButton: false }, false],
        [{ showUnloadButton: false }, {}, true],
    ]) {
        assert.equal(resolveViewerConfig(props, bridge).showUnloadButton, expected);
    }
});

test('plugin mode overrides every prop and never calls the prop JSON loader', async () => {
    let propCalls = 0;
    let bridgeCalls = 0;
    const config = resolveViewerConfig({
        jsonString: async () => { propCalls++; return 'prop JSON'; },
        readmefetch: async () => 'prop README',
        licensefetch: async () => 'prop license',
        showUnloadButton: true,
    }, {
        getROCJson: async () => { bridgeCalls++; return 'bridge JSON'; },
        readmefetch: async () => 'bridge README',
        licensefetch: async () => 'bridge license',
        showUnloadButton: false,
    });

    assert.equal(config.entryPoint, 'plugin');
    assert.equal(config.showUnloadButton, false);
    assert.equal(bridgeCalls, 0);
    assert.equal(propCalls, 0);
    assert.equal(await config.loadJson(), 'bridge JSON');
    assert.equal(await config.readmefetch(), 'bridge README');
    assert.equal(await config.licensefetch(), 'bridge license');
    assert.equal(bridgeCalls, 1);
    assert.equal(propCalls, 0);
});

test('an empty bridge selects plugin mode and defaults without leaking props', () => {
    assert.deepEqual(resolveViewerConfig({
        jsonString: async () => 'prop JSON',
        readmefetch: async () => 'prop README',
        licensefetch: async () => 'prop license',
        showUnloadButton: false,
    }, {}), {
        entryPoint: 'plugin',
        loadJson: undefined,
        readmefetch: undefined,
        licensefetch: undefined,
        showUnloadButton: true,
    });
});

test('a bridge loader failure does not invoke the lower-priority prop loader', async () => {
    let propCalls = 0;
    const config = resolveViewerConfig({
        jsonString: async () => { propCalls++; return 'fallback'; },
    }, {
        getROCJson: async () => { throw new Error('bridge failed'); },
    });
    await assert.rejects(config.loadJson, /bridge failed/);
    assert.equal(propCalls, 0);
});

test('the default bridge comes from the current window and null is absent', () => {
    try {
        globalThis.window = { arcwebview: { showUnloadButton: false } };
        assert.equal(resolveViewerConfig({}).entryPoint, 'plugin');
        assert.equal(resolveViewerConfig({}).showUnloadButton, false);

        globalThis.window = { arcwebview: null };
        assert.equal(resolveViewerConfig({}).entryPoint, 'showcase');
        assert.equal(resolveViewerConfig({ showUnloadButton: false }).entryPoint, 'component');
    } finally {
        delete globalThis.window;
    }
});
