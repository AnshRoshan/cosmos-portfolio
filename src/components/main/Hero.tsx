"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { IconArrowDownRight } from "@tabler/icons-react";
import Magnet from "../sub/Magnet";
import Parallax from "../sub/Parallax";
import PillButton from "../sub/PillButton";
import Reveal from "../sub/Reveal";
import SplitReveal from "../sub/SplitReveal";

// WebGL accent is client-only and below the fold of the headline; load lazily.
const Hero3D = dynamic(() => import("../sub/Hero3D"), { ssr: false });

const Hero = () => {
    return (
        <section className="relative mx-auto flex min-h-[calc(100dvh-68px)] w-full max-w-[1400px] flex-col justify-center px-6 pt-16 pb-20 md:px-10">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                {/* Left: copy */}
                <div className="order-2 lg:order-1">
                    <Reveal y={-12}>
                        <span className="font-mono inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.22em] text-[#9a9aa4]">
                            <span className="h-px w-8 bg-[#2dd4bf]" />
                            Ansh Roshan
                        </span>
                    </Reveal>

                    <SplitReveal delay={0.1} stagger={0.05}>
                        <h1 className="font-display mt-6 text-balance text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
                            Engineering AI
                            <br className="hidden sm:block" /> products,{" "}
                            <span className="bg-gradient-to-r from-[#7fffe8] via-[#2dd4bf] to-[#14b8a6] bg-clip-text text-transparent">
                                end to end.
                            </span>
                        </h1>
                    </SplitReveal>

                    <Reveal delay={0.26} y={20}>
                        <p className="mt-7 max-w-[46ch] text-base leading-relaxed text-[#9a9aa4] sm:text-lg">
                            Gen AI developer at TCS. I build agentic systems, RAG
                            pipelines, and the full-stack products around them,
                            then ship the whole thing to production.
                        </p>
                    </Reveal>

                    <Reveal delay={0.4} y={20}>
                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <PillButton href="/contact">Get in touch</PillButton>
                            <PillButton href="/#projects" variant="ghost">
                                View work
                                <IconArrowDownRight size={18} stroke={1.8} />
                            </PillButton>
                        </div>
                    </Reveal>
                </div>

                {/* Right: magnetic portrait floating over a real 3D object */}
                <Reveal
                    delay={0.32}
                    x={28}
                    className="order-1 flex justify-center lg:order-2 lg:justify-end"
                >
                    <div className="relative aspect-square w-[300px] sm:w-[400px] lg:w-[500px]">
                        {/* 3D WebGL backdrop, peeking around the portrait */}
                        <Parallax speed={0.16} className="absolute inset-[-20%] -z-0">
                            <Hero3D />
                        </Parallax>
                        {/* Soft mint bloom */}
                        <div
                            aria-hidden
                            className="absolute inset-0 -z-0 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(45,212,191,0.18),transparent_60%)] blur-2xl"
                        />
                        <Magnet
                            padding={140}
                            strength={4}
                            className="relative z-10 h-full w-full"
                        >
                            <div className="liquid-glass relative grid h-full w-full place-items-center rounded-full p-3">
                                <Image
                                    src="/main.png"
                                    alt="Ansh Roshan"
                                    width={520}
                                    height={520}
                                    priority
                                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 500px"
                                    className="h-full w-full rounded-full object-contain"
                                />
                            </div>
                        </Magnet>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Hero;
