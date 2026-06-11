import { isSanityConfigured } from "../env";
import { client } from "./client";

type FetchArgs = {
    query: string;
    params?: Record<string, unknown>;
    /** Cache tags for on-demand revalidation via /api/revalidate. */
    tags?: string[];
    /** Time-based ISR window (seconds). Combined with tags. */
    revalidate?: number;
};

/**
 * Default ISR window: 1 hour. This is only a *fallback* refresh — the Sanity
 * webhook (/api/revalidate) busts the cache instantly on publish, so content is
 * normally up to date within seconds. The hour just bounds staleness if the
 * webhook ever fails or isn't configured. Raise it further (e.g. 86400 = 1 day)
 * if you rely entirely on the webhook and want to hit Sanity even less.
 */
const DEFAULT_REVALIDATE = 3600;

/**
 * Cached Sanity read with ISR + tag-based revalidation.
 *
 * - Returns `fallback` (and never hits the network) until the project is
 *   configured, so local dev and CI builds work with no credentials.
 * - `revalidate` gives time-based refresh; `tags` enable instant updates when
 *   the CMS webhook pings /api/revalidate. Both are active together.
 */
export async function sanityFetch<T>(
    { query, params = {}, tags = [], revalidate = DEFAULT_REVALIDATE }: FetchArgs,
    fallback: T,
): Promise<T> {
    if (!isSanityConfigured) return fallback;
    try {
        return await client.fetch<T>(query, params, {
            next: { revalidate, tags },
        });
    } catch (error) {
        console.error("[sanity] fetch failed, using fallback:", error);
        return fallback;
    }
}
