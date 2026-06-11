"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

/**
 * Client-only Studio. Kept in its own module so the heavy `sanity` bundle is
 * loaded exclusively on the client (via next/dynamic ssr:false in page.tsx),
 * which avoids the server evaluating React context during the build.
 */
export default function Studio() {
    return <NextStudio config={config} />;
}
