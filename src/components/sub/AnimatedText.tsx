"use client";

import { useEffect, useRef, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useReducedMotion,
    type MotionValue,
} from "framer-motion";

/**
 * Character-by-character scroll reveal: each character ramps from dim to full
 * opacity as the paragraph travels through the viewport.
 *
 * The scroll-driven version (which calls useScroll against a ref) is rendered
 * only after mount. Server and first client paint render plain text, so there
 * is no hydration mismatch and useScroll never runs against an un-hydrated ref.
 * Under reduced motion it stays as plain, fully-opaque text.
 */
export default function AnimatedText({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    const [mounted, setMounted] = useState(false);
    const reduce = useReducedMotion();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || reduce) {
        return <p className={className}>{text}</p>;
    }

    return <ScrollReveal text={text} className={className} />;
}

function ScrollReveal({ text, className }: { text: string; className?: string }) {
    const ref = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.8", "end 0.45"],
    });

    const chars = text.split("");

    return (
        <p ref={ref} className={className} aria-label={text}>
            {chars.map((char, i) => {
                const start = i / chars.length;
                const end = start + 1 / chars.length;
                return (
                    <Char
                        key={`${char}-${i}`}
                        progress={scrollYProgress}
                        range={[start, end]}
                    >
                        {char}
                    </Char>
                );
            })}
        </p>
    );
}

function Char({
    children,
    progress,
    range,
}: {
    children: React.ReactNode;
    progress: MotionValue<number>;
    range: [number, number];
}) {
    const opacity = useTransform(progress, range, [0.18, 1]);
    return (
        <motion.span style={{ opacity }} aria-hidden="true">
            {children}
        </motion.span>
    );
}
