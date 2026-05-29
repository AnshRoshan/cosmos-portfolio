"use client";

import { useRef } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * 3D parallax tilt: the element rotates in X/Y toward the cursor for a sense of
 * depth, then springs flat on exit. Pointer is tracked via motion values (no
 * state). The rendered structure is identical regardless of reduced motion (so
 * SSR and client match); under reduced motion the pointer handler is simply not
 * attached, so the element stays flat.
 */
export default function TiltCard({
    children,
    className,
    max = 9,
}: {
    children: React.ReactNode;
    className?: string;
    max?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();

    const mx = useMotionValue(0.5);
    const my = useMotionValue(0.5);
    const rotateX = useSpring(useTransform(my, [0, 1], [max, -max]), {
        stiffness: 150,
        damping: 18,
    });
    const rotateY = useSpring(useTransform(mx, [0, 1], [-max, max]), {
        stiffness: 150,
        damping: 18,
    });

    return (
        <div className={cn("[perspective:1200px]", className)}>
            <motion.div
                ref={ref}
                onMouseMove={
                    reduce
                        ? undefined
                        : (e) => {
                              const el = ref.current;
                              if (!el) return;
                              const r = el.getBoundingClientRect();
                              mx.set((e.clientX - r.left) / r.width);
                              my.set((e.clientY - r.top) / r.height);
                          }
                }
                onMouseLeave={
                    reduce
                        ? undefined
                        : () => {
                              mx.set(0.5);
                              my.set(0.5);
                          }
                }
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                }}
                className="h-full w-full"
            >
                {children}
            </motion.div>
        </div>
    );
}
