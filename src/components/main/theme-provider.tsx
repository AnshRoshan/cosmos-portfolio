"use client";

import { MotionConfig } from "framer-motion";

/**
 * The site is locked to dark (forced via <html className="dark"> in layout), so
 * we don't need next-themes' runtime toggle or its no-flash <script> (which
 * triggers a React 19 "script tag while rendering" warning under Turbopack).
 * This provider carries MotionConfig. reducedMotion="never" forces every
 * framer-motion animation (magnetic hover, card tilt) to run regardless of the
 * OS reduced-motion setting. This is a deliberate owner choice for this
 * portfolio so the motion is always visible; the GSAP layer is un-gated to
 * match (see Reveal / SplitReveal / Parallax / Marquee).
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return <MotionConfig reducedMotion="never">{children}</MotionConfig>;
}
