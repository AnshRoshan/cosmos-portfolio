import type { Metadata } from "next";
import Image from "next/image";
import {
    IconDownload,
    IconRobot,
    IconCode,
    IconCloudUpload,
} from "@tabler/icons-react";
import Reveal from "@/components/sub/Reveal";
import SplitReveal from "@/components/sub/SplitReveal";
import PillButton from "@/components/sub/PillButton";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
    title: "About - Ansh Roshan",
    description:
        "Gen AI Developer at TCS. Building agentic workflows, RAG pipelines, and full-stack AI products that ship to production.",
};

const focusItems = [
    {
        icon: IconRobot,
        label: "Gen AI",
        detail:
            "Agentic workflows and RAG pipelines with LangChain, LangGraph, and the major model APIs.",
    },
    {
        icon: IconCode,
        label: "Full-stack",
        detail:
            "FastAPI and Node services behind React and Next.js interfaces, typed end to end.",
    },
    {
        icon: IconCloudUpload,
        label: "Delivery",
        detail: "Shipping and running it on Docker, Kubernetes, and AWS.",
    },
] as const;

export default function AboutPage() {
    return (
        <main className="relative min-h-[100dvh] bg-transparent pt-28 md:pt-36">
            {/* ─── SECTION 1 · INTRO ─────────────────────────────────────────── */}
            <section className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10 pb-24 md:pb-32">
                <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-12 xl:gap-20 items-start">
                    {/* Left column */}
                    <div className="flex flex-col gap-8">
                        {/* Eyebrow - counts as 1 of max 2 */}
                        <span className="font-mono inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.22em] text-[#9a9aa4]">
                            <span className="h-px w-8 bg-[#2dd4bf]" />
                            About
                        </span>

                        {/* Hero headline via SplitReveal */}
                        <SplitReveal>
                            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#e7e7ea] leading-[1.08]">
                                I build AI that makes it to{" "}
                                <span className="text-[#2dd4bf]">
                                    production.
                                </span>
                            </h1>
                        </SplitReveal>

                        {/* Bio */}
                        <Reveal delay={0.1} className="flex flex-col gap-5 max-w-[580px]">
                            <p className="text-base leading-relaxed text-[#9a9aa4]">
                                Gen AI Developer at TCS. I design and ship
                                end-to-end AI products, from the agentic backend
                                to the interface users actually touch. My work
                                spans LangChain, LangGraph, RAG architectures,
                                and multi-model orchestration, with full
                                ownership of deployment on the other end.
                            </p>
                            <p className="text-base leading-relaxed text-[#9a9aa4]">
                                I care about one thing: building AI systems that
                                are reliable in the real world. Not demos, not
                                prototypes sitting in a notebook. Shipped
                                products, running in production, used by real
                                people.
                            </p>
                        </Reveal>

                        {/* CTAs */}
                        <Reveal delay={0.2}>
                            <div className="flex flex-wrap items-center gap-3">
                                <PillButton href="/contact">
                                    Get in touch
                                </PillButton>
                                <PillButton
                                    href="https://drive.google.com/file/d/1TF-POXkJmb7m69R3nLEwOrxdDkywTBfc/view"
                                    variant="ghost"
                                    external
                                >
                                    Download resume{" "}
                                    <IconDownload size={18} stroke={1.8} />
                                </PillButton>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right column - portrait */}
                    <Reveal x={24} y={0} delay={0.15} className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[420px] lg:max-w-none">
                            {/* Soft mint bloom behind the portrait */}
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-0 -z-10 rounded-[24px]"
                                style={{
                                    background:
                                        "radial-gradient(ellipse at 50% 30%, rgba(45,212,191,0.18) 0%, transparent 68%)",
                                }}
                            />
                            <div className="overflow-hidden rounded-[24px] bg-[#131316]/70 backdrop-blur-xl border border-white/10">
                                <Image
                                    src="/main.png"
                                    alt="Ansh Roshan"
                                    width={520}
                                    height={520}
                                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 420px"
                                    className="w-full object-cover object-top"
                                    priority
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ─── SECTION 2 · FOCUS (no eyebrow) ───────────────────────────── */}
            <section className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10 pb-24 md:pb-32">
                <Reveal>
                    <div className="flex flex-col md:flex-row divide-y md:divide-x md:divide-y-0 divide-white/10 border-y border-white/10">
                        {focusItems.map(({ icon: Icon, label, detail }) => (
                            <div
                                key={label}
                                className="flex flex-1 flex-col gap-4 px-0 py-10 md:py-12 md:px-10 first:md:pl-0 last:md:pr-0"
                            >
                                <Icon
                                    size={26}
                                    stroke={1.6}
                                    className="text-[#2dd4bf] shrink-0"
                                />
                                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#2dd4bf]">
                                    {label}
                                </span>
                                <p className="text-sm leading-relaxed text-[#9a9aa4] max-w-[300px]">
                                    {detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* ─── SECTION 3 · STACK (no eyebrow) ───────────────────────────── */}
            <section className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10 pb-24 md:pb-32">
                <Reveal className="mb-12">
                    <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#e7e7ea]">
                        The stack
                    </h2>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-[24px] overflow-hidden border border-white/10">
                    {skillGroups.map((group, i) => (
                        <Reveal key={group.title} delay={i * 0.07}>
                            <div className="bg-[#131316]/70 backdrop-blur-xl p-8 h-full flex flex-col gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <h3 className="font-display text-lg font-medium text-[#e7e7ea]">
                                        {group.title}
                                    </h3>
                                    <p className="text-sm text-[#9a9aa4]">
                                        {group.blurb}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill.name}
                                            className="font-mono rounded-md border border-white/10 px-2.5 py-1 text-xs text-[#9a9aa4]"
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ─── SECTION 4 · CTA BAND ──────────────────────────────────────── */}
            <section className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10 pb-32 md:pb-40">
                <Reveal>
                    <div className="rounded-[24px] bg-[#131316]/70 backdrop-blur-xl border border-white/10 px-8 py-16 md:px-16 md:py-20 flex flex-col items-center gap-8 text-center">
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#e7e7ea] max-w-2xl">
                            Have an AI product to build?
                        </h2>
                        <PillButton href="/contact">Get in touch</PillButton>
                    </div>
                </Reveal>
            </section>
        </main>
    );
}
