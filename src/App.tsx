import { useEffect, useState, useRef, useCallback, useMemo, lazy, Suspense } from 'react';
const WebViewer = lazy(() => import('./components/WebViewer'));
import { Blankslate } from '@primer/react/experimental'
import { Button, Spinner, Stack, Banner } from '@primer/react'
import { UploadIcon, SearchIcon } from '@primer/octicons-react'
import { resolveViewerConfig } from './config';
import type { WebViewerProps } from './config';
import { LoadError } from './util/urlLoader';

function ErrorBanner({ error, clearError }: { error: string, clearError: () => void }) {
    return (
        <Banner
            aria-label="Error"
            title="Error"
            description={error}
            variant="critical"
            onDismiss={clearError}
        />
    )
}
const loadExmpJson = async () => {
    const json = await import('./assets/arc-ro-crate-metadata.json?raw');
    return json.default;
}
function BlankSlate({ handleClickExampleData, setJsonString }: { handleClickExampleData: () => void, setJsonString: (json: string) => void }) {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        inputRef.current?.click();
    };
    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const text = await file.text();
            setJsonString(text);
        }
    };
    return (
        <>
            <input type="file" ref={inputRef} style={{ display: 'none' }} accept='.json,application/json' onChange={handleInputChange} />
            <Blankslate spacious>
                <Blankslate.Visual>
                    <SearchIcon size={32} />
                </Blankslate.Visual>
                <Blankslate.Heading>Welcome to the ARC web viewer</Blankslate.Heading>
                <Blankslate.Description>
                    This viewer allows you to explore and visualize your ARC metadata. Currently no data is loaded.
                </Blankslate.Description>
                <Blankslate.PrimaryAction onClick={handleClick}>
                    <Stack direction="horizontal" align="center" >
                        <UploadIcon size={16} />
                        Upload ROC-JSON
                    </Stack>
                </Blankslate.PrimaryAction>
                <Button onClick={handleClickExampleData} variant='link'>
                    Load example data
                </Button>
            </Blankslate>
        </>
    )
}

function SkeletonTable() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Spinner size="large" />
        </div>
    )
}

function App(props: WebViewerProps) {
    // The configuration is resolved again only when a supported prop changes. A showcase loader built
    // from the query string therefore keeps its identity across renders, and the effect below runs once.
    const { jsonString: jsonProp, showUnloadButton: unloadProp, layout: layoutProp } = props;
    const { loadJson, showUnloadButton, layout } = useMemo(
        () => resolveViewerConfig({
            jsonString: jsonProp, showUnloadButton: unloadProp, layout: layoutProp,
        }),
        [jsonProp, unloadProp, layoutProp],
    );

    const [jsonString, setJsonString] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(loadJson !== undefined);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let active = true;
        setJsonString(null);
        setError(null);
        setLoading(loadJson !== undefined);

        if (!loadJson) return;

        const fetchJson = async () => {
            try {
                const json = await loadJson();
                if (active) setJsonString(json);
            } catch (err) {
                if (active) {
                    console.error('Error fetching JSON:', err);
                    setError(err instanceof LoadError ? err.message : 'Failed to load JSON data.');
                }
            } finally {
                if (active) setLoading(false);
            }
        };
        void fetchJson();

        return () => {
            active = false;
        };
    }, [loadJson]);

    const clear = useCallback(() => {
        setJsonString(null);
        setError(null);
        setLoading(false);
    }, []);

    const handleClickExampleData = async () => {
        const json = await loadExmpJson();
        setJsonString(json);
    }

    return (
        <>
            {
                error && <ErrorBanner error={error} clearError={() => setError(null)} />
            }
            {
                loading
                    ? <SkeletonTable />
                    : !jsonString
                        ? <BlankSlate handleClickExampleData={handleClickExampleData} setJsonString={setJsonString} />
                        : <Suspense fallback={<SkeletonTable />}>
                            <WebViewer jsonString={jsonString} clearJsonCallback={showUnloadButton ? clear : undefined} layout={layout} />
                        </Suspense>
            }
        </>
    )
}

export default App
