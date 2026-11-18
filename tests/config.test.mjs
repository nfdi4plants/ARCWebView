import assert from 'node:assert/strict';
import { test } from 'node:test';
import { importTs } from './importTs.mjs';

const { resolveViewerConfig } = await importTs('../src/config.ts');

test('no browser window and no supplied options selects showcase defaults', () => {
    assert.equal(typeof window, 'undefined');
    assert.deepEqual(resolveViewerConfig({}), {
        entryPoint: 'showcase',
        loadJson: undefined,
        showUnloadButton: true,
        layout: { sidebarOpen: false, provenancesOpen: true },
    });
});

test('undefined supported values and unrelated props do not select component mode', () => {
    assert.equal(resolveViewerConfig({
        jsonString: undefined,
        showUnloadButton: undefined,
        layout: undefined,
        children: 'unrelated',
    }).entryPoint, 'showcase');
});

test('each supplied supported prop selects component mode, including false', () => {
    for (const props of [
        { jsonString: async () => '{}' },
        { showUnloadButton: false },
        { layout: {} },
        { layout: { sidebarOpen: false, provenancesOpen: false } },
    ]) {
        assert.equal(resolveViewerConfig(props).entryPoint, 'component');
    }
    assert.equal(resolveViewerConfig({ showUnloadButton: false }).showUnloadButton, false);
});

test('component mode uses its supplied loader and default unload visibility', async () => {
    const config = resolveViewerConfig({
        jsonString: async () => 'component JSON',
    });
    assert.equal(await config.loadJson(), 'component JSON');
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

test('layout honors both boolean values from the selected source', () => {
    for (const sidebarOpen of [false, true]) {
        for (const provenancesOpen of [false, true]) {
            const layout = { sidebarOpen, provenancesOpen };
            const opposite = { sidebarOpen: !sidebarOpen, provenancesOpen: !provenancesOpen };
            assert.deepEqual(resolveViewerConfig({ layout }).layout, layout);
            assert.deepEqual(resolveViewerConfig({ layout: opposite }, { layout }).layout, layout);
        }
    }
});

test('an omitted bridge layout uses defaults without falling back to component props', () => {
    assert.deepEqual(resolveViewerConfig({
        layout: { sidebarOpen: true, provenancesOpen: false },
    }, {}).layout, { sidebarOpen: false, provenancesOpen: true });
});

test('partial and empty layouts stay with the selected source for viewer defaults', () => {
    for (const layout of [{}, { sidebarOpen: true }, { provenancesOpen: false }]) {
        assert.deepEqual(resolveViewerConfig({ layout }).layout, layout);
        assert.deepEqual(resolveViewerConfig({
            layout: { sidebarOpen: true, provenancesOpen: false },
        }, { layout }).layout, layout);
    }
});

test('plugin mode overrides every prop and never calls the prop JSON loader', async () => {
    let propCalls = 0;
    let bridgeCalls = 0;
    const config = resolveViewerConfig({
        jsonString: async () => { propCalls++; return 'prop JSON'; },
        showUnloadButton: true,
    }, {
        getROCJson: async () => { bridgeCalls++; return 'bridge JSON'; },
        showUnloadButton: false,
    });

    assert.equal(config.entryPoint, 'plugin');
    assert.equal(config.showUnloadButton, false);
    assert.equal(bridgeCalls, 0);
    assert.equal(propCalls, 0);
    assert.equal(await config.loadJson(), 'bridge JSON');
    assert.equal(bridgeCalls, 1);
    assert.equal(propCalls, 0);
});

test('an empty bridge selects plugin mode and defaults without leaking props', () => {
    assert.deepEqual(resolveViewerConfig({
        jsonString: async () => 'prop JSON',
        showUnloadButton: false,
    }, {}), {
        entryPoint: 'plugin',
        loadJson: undefined,
        showUnloadButton: true,
        layout: { sidebarOpen: false, provenancesOpen: true },
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

const withWindow = (value, fn) => {
    try {
        globalThis.window = value;
        return fn();
    } finally {
        delete globalThis.window;
    }
};

// Runs fn with a replaced global fetch and restores the original afterwards.
async function withFetch(fetchFn, fn) {
    const realFetch = globalThis.fetch;
    globalThis.fetch = fetchFn;
    try {
        return await fn();
    } finally {
        globalThis.fetch = realFetch;
    }
}

// Fails every fetch and counts the attempts, for loaders that must not reach the network.
const refuseFetch = () => {
    const calls = [];
    return { calls, fn: async (url) => { calls.push(url); throw new Error('must not fetch'); } };
};

test('showcase mode loads the crate named by the url or workflowhub parameter', async () => {
    const crateUrl = 'https://example.org/crates/run/ro-crate-metadata.json?ref=main';
    const urlConfig = resolveViewerConfig({}, undefined, `?url=${encodeURIComponent(crateUrl)}`);
    const fetched = [];
    const json = await withFetch(async (url) => { fetched.push(url); return new Response('{"@graph":[1]}'); }, () => urlConfig.loadJson());
    assert.equal(json, '{"@graph":[1]}');
    assert.deepEqual(fetched, [crateUrl]);

    const hubConfig = resolveViewerConfig({}, undefined, '?workflowhub=2380');
    const hubJson = await withFetch(async (url) => new Response(url.endsWith('/versions') ? '[{"id":"1"}]' : '{"@graph":[2]}'), () => hubConfig.loadJson());
    assert.equal(hubJson, '{"@graph":[2]}');
});

test('a bridge or supported props make the viewer ignore the query string', async () => {
    const refuse = refuseFetch();
    await withFetch(refuse.fn, async () => {
        for (const search of ['?workflowhub=2380', '?url=https%3A%2F%2Fexample.org%2Fa.json']) {
            const plugin = resolveViewerConfig({}, { getROCJson: async () => 'bridge JSON' }, search);
            assert.equal(await plugin.loadJson(), 'bridge JSON');
            assert.equal(resolveViewerConfig({}, {}, search).loadJson, undefined);

            const withProp = resolveViewerConfig({ jsonString: async () => 'prop JSON' }, undefined, search);
            assert.equal(await withProp.loadJson(), 'prop JSON');
            assert.equal(resolveViewerConfig({ showUnloadButton: false }, undefined, search).loadJson, undefined);
        }
    });
    assert.deepEqual(refuse.calls, []);
});

test('the query string is read from window.location', () => {
    withWindow({ location: { search: '?workflowhub=7' } }, () => assert.equal(typeof resolveViewerConfig({}).loadJson, 'function'));
    withWindow({}, () => assert.equal(resolveViewerConfig({}).loadJson, undefined));
});

test('a foreign host, a non-http url or both parameters at once are refused without fetching', async () => {
    const refuse = refuseFetch();
    await withFetch(refuse.fn, async () => {
        for (const search of [
            '?workflowhub=1&host=evil.example',
            '?url=javascript%3Aalert(1)',
            '?url=file%3A%2F%2F%2Fetc%2Fpasswd',
            '?url=https%3A%2F%2Fexample.org%2Fa.json&workflowhub=1',
        ]) {
            await assert.rejects(resolveViewerConfig({}, undefined, search).loadJson);
        }
    });
    assert.deepEqual(refuse.calls, []);
});
