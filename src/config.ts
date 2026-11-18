import { LoadError, loadCrateFromUrl, parseCrateUrl } from './util/urlLoader';
import { loadWorkflowHubCrate, parseWorkflowHubParams } from './util/workflowHubLoader';

type TextLoader = () => Promise<string>;
export type ViewerTab = 'files' | 'provenance';
export interface LayoutOptions {
    sidebarOpen?: boolean;
    /** The tab that is open when ARC content mounts. A crate without a graph opens on its files. */
    initialTab?: ViewerTab;
}

interface ViewerOptions {
    showUnloadButton?: boolean;
    layout?: LayoutOptions;
}

export interface WebViewerProps extends ViewerOptions {
    jsonString?: TextLoader;
}

export interface ArcWebViewBridge extends ViewerOptions {
    getROCJson?: TextLoader;
}

declare global {
    interface Window {
        arcwebview?: ArcWebViewBridge;
    }
}

interface ViewerConfig extends ViewerOptions {
    entryPoint: 'plugin' | 'component' | 'showcase';
    loadJson?: TextLoader;
    showUnloadButton: boolean;
}

const rejectWith = (message: string): TextLoader => () => Promise.reject(new LoadError(message));

/**
 * Loader for the showcase query string, or undefined when it names no crate. `url` takes any crate
 * URL that allows cross-origin reads. `workflowhub` names a WorkflowHub entry and loads its latest
 * version through the same URL loader.
 */
function queryLoader(search: string): TextLoader | undefined {
    const query = new URLSearchParams(search);
    const url = query.get('url');
    const workflowHub = parseWorkflowHubParams(search);

    if (url !== null && workflowHub !== undefined) {
        return rejectWith('Use either the "url" or the "workflowhub" URL parameter, not both.');
    }
    if (url !== null) {
        const parsed = parseCrateUrl(url);
        return 'error' in parsed ? rejectWith(parsed.error) : () => loadCrateFromUrl(parsed.url);
    }
    if (workflowHub !== undefined) {
        return 'error' in workflowHub ? rejectWith(workflowHub.error) : () => loadWorkflowHubCrate(workflowHub);
    }
    return undefined;
}

/** Select one entry point before applying defaults or calling any loaders. */
export function resolveViewerConfig(
    props: WebViewerProps,
    bridge = typeof window === 'undefined' ? undefined : window.arcwebview,
    search = typeof window === 'undefined' ? '' : window.location?.search ?? '',
): ViewerConfig {
    const hasProps = [
        props.jsonString,
        props.showUnloadButton,
        props.layout
    ].some(value => value !== undefined);

    const entryPoint = bridge != null ? 'plugin' : hasProps ? 'component' : 'showcase';
    const options = bridge ?? props;

    return {
        entryPoint,
        loadJson: bridge != null
            ? bridge.getROCJson
            : entryPoint === 'showcase' ? queryLoader(search) : props.jsonString,
        showUnloadButton: options.showUnloadButton ?? true,
        layout: options.layout ?? { sidebarOpen: false, initialTab: 'files' }
    };
}
