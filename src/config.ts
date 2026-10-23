type TextLoader = () => Promise<string>;

interface ViewerOptions {
    readmefetch?: TextLoader;
    licensefetch?: TextLoader;
    showUnloadButton?: boolean;
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

/** Select one entry point before applying defaults or calling any loaders. */
export function resolveViewerConfig(
    props: WebViewerProps,
    bridge = typeof window === 'undefined' ? undefined : window.arcwebview,
): ViewerConfig {
    const hasProps = [
        props.jsonString,
        props.readmefetch,
        props.licensefetch,
        props.showUnloadButton,
    ].some(value => value !== undefined);

    const entryPoint = bridge != null ? 'plugin' : hasProps ? 'component' : 'showcase';
    const options = bridge ?? props;

    return {
        entryPoint,
        loadJson: bridge != null ? bridge.getROCJson : props.jsonString,
        readmefetch: options.readmefetch,
        licensefetch: options.licensefetch,
        showUnloadButton: options.showUnloadButton ?? true,
    };
}
