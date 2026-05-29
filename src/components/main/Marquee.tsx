"use client";

import FadeIn from "@/components/sub/FadeIn";
import {
    Frontend_skill,
    Backend_skill,
    DevOps,
    Other_skill,
} from "@/constants";

interface SkillItem {
    skill_name: string;
    Image: string;
    width: number;
    height: number;
}

const allSkills: SkillItem[] = [
    ...Frontend_skill,
    ...Backend_skill,
    ...DevOps,
    ...Other_skill,
];

const mid = Math.ceil(allSkills.length / 2);
const rowA: SkillItem[] = allSkills.slice(0, mid);
const rowB: SkillItem[] = allSkills.slice(mid);

function Chip({ item }: { item: SkillItem }) {
    return (
        <div className="liquid-glass flex min-w-[120px] shrink-0 cursor-default flex-col items-center gap-2 rounded-2xl px-5 py-4 transition-transform duration-200 hover:-translate-y-1">
            <img
                src={item.Image}
                alt={item.skill_name}
                loading="lazy"
                width={item.width}
                height={item.height}
                style={{ height: 40, width: "auto" }}
                className="object-contain"
            />
            <span className="whitespace-nowrap text-xs text-[#9a9aac]">
                {item.skill_name}
            </span>
        </div>
    );
}

function MarqueeRow({
    items,
    direction,
    duration,
}: {
    items: SkillItem[];
    direction: "left" | "right";
    duration: string;
}) {
    const animationName = direction === "left" ? "marquee-left" : "marquee-right";
    // Items are rendered twice; -50% travel makes the loop seamless.
    // The global prefers-reduced-motion rule neutralizes the animation, so the
    // DOM is identical on server and client (no hydration branch).
    return (
        <div className="marquee-row overflow-hidden">
            <div
                className="marquee-track flex gap-4"
                style={{ animation: `${animationName} ${duration} linear infinite` }}
            >
                {[...items, ...items].map((item, i) => (
                    <Chip key={`${item.skill_name}-${i}`} item={item} />
                ))}
            </div>
        </div>
    );
}

export default function Marquee() {
    return (
        <section className="relative mx-auto w-full max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
            <FadeIn y={24}>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-[#f4f4f7] sm:text-4xl lg:text-5xl">
                    Tools I build with
                </h2>
                <p className="mt-3 max-w-[48ch] text-[#b6b6c4]">
                    The stack I reach for across frontend, backend, and
                    infrastructure.
                </p>
            </FadeIn>

            <div
                className="mt-12 flex flex-col gap-4 overflow-hidden md:mt-16"
                style={{
                    maskImage:
                        "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                }}
            >
                <MarqueeRow items={rowA} direction="left" duration="48s" />
                <MarqueeRow items={rowB} direction="right" duration="60s" />
            </div>
        </section>
    );
}
