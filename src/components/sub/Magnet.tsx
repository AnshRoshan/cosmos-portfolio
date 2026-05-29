"use client";

import { useEffect, useRef } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useReducedMotion,
} from "framer-motion";

interface MagnetProps {
    children: React.ReactNode;
    /** How far outside the element (px) the magnetic field reaches. */
    padding?: number;
    /** Higher = weaker pull (offset is divided by this). */
    strength?: number;
    className?: string;
}

/**
 * Magnetic hover: the wrapped element drifts toward the cursor while the
 * pointer is within `padding` of its bounds, then springs back on exit.
 * Pointer values are tracked with motion values (no React state, no re-renders)
 * per the design-system rule for continuous pointer input. Collapses to static
 * under prefers-reduced-motion.
 */
export default function Magnet({
    children,
    padding = 120,
    strength = 3,
    className,
}: MagnetProps) {
    const ref = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.3 });
    const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.3 });

    useEffect(() => {
        if (reduce) return;
        const handle = (e: MouseEvent) => {
            const el = ref.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            const cx = r.left + r.width / 2;
            const cy = r.top + r.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            const inField =
                Math.abs(dx) < r.width / 2 + padding &&
                Math.abs(dy) < r.height / 2 + padding;
            if (inField) {
                x.set(dx / strength);
                y.set(dy / strength);
            } else {
                x.set(0);
                y.set(0);
            }
        };
        window.addEventListener("mousemove", handle, { passive: true });
        return () => window.removeEventListener("mousemove", handle);
    }, [padding, strength, reduce, x, y]);

    // Style is unconditional (values start at 0 -> no offset) so SSR and client
    // render identically. Under reduced motion the listener above never runs,
    // so the element simply never moves.
    return (
        <motion.div
            ref={ref}
            style={{ x: sx, y: sy, willChange: "transform" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
