"use client";

/**
 * Embedded Sanity Studio — your content dashboard at /studio.
 * Log in here to write/publish posts and projects; changes go live via ISR +
 * webhook revalidation with no redeploy.
 *
 * The Studio is loaded client-side only (ssr:false) so the Sanity bundle is
 * never evaluated on the server during build/SSR.
 */
import dynamic from "next/dynamic";

const Studio = dynamic(() => import("./Studio"), { ssr: false });

export default function StudioPage() {
    return <Studio />;
}
