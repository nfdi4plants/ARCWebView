import { fetchOk, LoadError, loadCrateFromUrl } from './urlLoader';
import type { FetchFn } from './urlLoader';

/** Hosts the `host` URL parameter may name. Nothing else is ever fetched. */
export const WORKFLOWHUB_HOSTS = ['workflowhub.eu', 'dev.workflowhub.eu'] as const;
export type WorkflowHubHost = (typeof WORKFLOWHUB_HOSTS)[number];

export interface WorkflowHubParams {
    id: string;
    host: WorkflowHubHost;
}

/** Returns undefined when the query string names no WorkflowHub entry. */
export function parseWorkflowHubParams(search: string): WorkflowHubParams | { error: string } | undefined {
    const query = new URLSearchParams(search);
    const id = query.get('workflowhub');
    if (id === null) return undefined;
    if (!/^[1-9][0-9]*$/.test(id)) {
        return { error: `The "workflowhub" URL parameter must be a positive whole number, got "${id}".` };
    }
    const host = query.get('host') ?? 'workflowhub.eu';
    if (!(WORKFLOWHUB_HOSTS as readonly string[]).includes(host)) {
        return { error: `The "host" URL parameter must be ${WORKFLOWHUB_HOSTS.join(' or ')}, got "${host}".` };
    }
    return { id, host: host as WorkflowHubHost };
}

/** Highest numeric version id, or undefined when the list holds none. */
function latestVersionId(versions: unknown): string | undefined {
    if (!Array.isArray(versions)) return undefined;
    let best: number | undefined;
    for (const version of versions) {
        const raw = (version as { id?: unknown } | null)?.id;
        if (typeof raw !== 'string' && typeof raw !== 'number') continue;
        const text = String(raw);
        if (!/^[0-9]+$/.test(text)) continue;
        const value = Number(text);
        if (best === undefined || value > best) best = value;
    }
    return best === undefined ? undefined : String(best);
}

/** WorkflowHub answers 404 both for an entry that does not exist and for one that is not public. */
async function withEntryMessage<T>(entry: string, work: () => Promise<T>): Promise<T> {
    try {
        return await work();
    } catch (err) {
        if (err instanceof LoadError && err.status === 404) {
            throw new LoadError(`${entry} was not found or is not public.`, 404);
        }
        throw err;
    }
}

/**
 * The crate URL of the latest version of a WorkflowHub entry, from WorkflowHub's GA4GH TRS API.
 * TRS allows cross-origin reads, unlike WorkflowHub's own pages, but every TRS crate URL names a
 * version, so the latest one has to be looked up first.
 */
export async function latestWorkflowHubCrateUrl({ id, host }: WorkflowHubParams, fetchFn?: FetchFn): Promise<string> {
    const entry = `WorkflowHub entry ${id} on ${host}`;
    const toolUrl = `https://${host}/ga4gh/trs/v2/tools/${encodeURIComponent(id)}`;

    const response = await withEntryMessage(entry, () => fetchOk(`${toolUrl}/versions`, fetchFn));
    let versions: unknown;
    try {
        versions = await response.json();
    } catch {
        throw new LoadError(`WorkflowHub returned an unreadable version list for ${entry}.`);
    }
    const version = latestVersionId(versions);
    if (version === undefined) {
        throw new LoadError(`${entry} has no versions.`);
    }
    return `${toolUrl}/versions/${encodeURIComponent(version)}/PLAIN_CWL/descriptor/ro-crate-metadata.json`;
}

/** Loads the crate of the latest version of a public WorkflowHub entry through the general URL loader. */
export async function loadWorkflowHubCrate(params: WorkflowHubParams, fetchFn?: FetchFn): Promise<string> {
    const url = await latestWorkflowHubCrateUrl(params, fetchFn);
    return withEntryMessage(`WorkflowHub entry ${params.id} on ${params.host}`, () => loadCrateFromUrl(url, fetchFn));
}
