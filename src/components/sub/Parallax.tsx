"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Scrubbed parallax drift. Wrap a decorative layer (a glow, a 3D backdrop) and
 * it translates vertically as the section scrolls through the viewport, tied
 * 1:1 to scroll (ease: none). `speed` is the fraction of its own height it
 * drifts. Use only on decorative layers, never on elements that also receive a
 * pointer transform (magnet / tilt), to avoid transform conflicts.
 * Runs regardless of OS reduced-motion (owner's choice). useGSAP cleans up.
 */
export default function Parallax({
    children,
    speed = 0.2,
    className,
}: {
    children: React.ReactNode;
    speed?: number;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const el = ref.current;
            if (!el) return;
            gsap.to(el, {
                yPercent: -speed * 100,
                ease: "none",
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        },
        { scope: ref },
    );

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
