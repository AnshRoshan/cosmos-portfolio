/**
 * Sanity environment configuration.
 *
 * These are intentionally non-throwing: when the project is not yet configured
 * (no `NEXT_PUBLIC_SANITY_PROJECT_ID` in env), the site still builds and runs —
 * blog/project queries fall back to empty/local data via `isSanityConfigured`.
 * Set these in `.env.local` (see `.env.local.example`) to go live.
 */
export const apiVersion =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

/** True once a real Sanity project id is present. Guards live data fetching. */
export const isSanityConfigured = projectId.length > 0;
