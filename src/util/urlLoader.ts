/** Error whose message is written for the viewer's error banner. `status` is set when a server answered. */
export class LoadError extends Error {
    readonly status?: number;

    constructor(message: string, status?: number) {
        super(message);
        this.name = 'LoadError';
        this.status = status;
    }
}

export type FetchFn = (url: string) => Promise<Response>;

/** The crate URL in the `url` query parameter: an absolute http(s) URL, or the reason it is not one. */
export function parseCrateUrl(value: string): { url: string } | { error: string } {
    let parsed: URL;
    try {
        parsed = new URL(value);
    } catch {
        return { error: `The "url" URL parameter must be an absolute http or https URL, got "${value}".` };
    }
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
        return { error: `The "url" URL parameter must be an absolute http or https URL, got "${value}".` };
    }
    return { url: parsed.href };
}

/**
 * GETs a URL from the browser. The server has to allow cross-origin requests, or the browser
 * withholds the answer and the request fails like a network error.
 */
export async function fetchOk(url: string, fetchFn: FetchFn = (target) => fetch(target)): Promise<Response> {
    let response: Response;
    try {
        response = await fetchFn(url);
    } catch (err) {
        const reason = err instanceof Error ? err.message : String(err);
        throw new LoadError(
            `Could not load ${url}: ${reason}. The server may be unreachable or may not allow cross-origin requests.`,
        );
    }
    if (!response.ok) {
        throw new LoadError(`${url} answered with HTTP ${response.status}.`, response.status);
    }
    return response;
}

/** Loads the text of a `ro-crate-metadata.json` from any URL that allows cross-origin reads. */
export async function loadCrateFromUrl(url: string, fetchFn?: FetchFn): Promise<string> {
    const response = await fetchOk(url, fetchFn);
    return response.text();
}
