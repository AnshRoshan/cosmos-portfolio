"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Wraps content with a cursor-following mint spotlight glow (adapted from a
 * pattern we liked). Put the border-radius on `className` so the glow clips to
 * the card shape (the overlay uses rounded-[inherit]).
 */
export default function SpotlightCard({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    function onMove(e: React.MouseEvent<HTMLDivElement>) {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
    }

    return (
        <div
            ref={ref}
            onMouseMove={onMove}
            className={cn("group/spot relative", className)}
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
                style={{
                    background:
                        "radial-gradient(220px circle at var(--mx, 50%) var(--my, 0%), rgba(34,211,238,0.13), transparent 70%)",
                }}
            />
            {children}
        </div>
    );
}
