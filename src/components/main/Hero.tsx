"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { IconArrowDownRight } from "@tabler/icons-react";
import FadeIn from "../sub/FadeIn";
import Magnet from "../sub/Magnet";
import PillButton from "../sub/PillButton";

// WebGL accent is client-only and below the fold of the headline; load lazily.
const Hero3D = dynamic(() => import("../sub/Hero3D"), { ssr: false });

const Hero = () => {
    return (
        <section className="relative mx-auto flex min-h-[calc(100dvh-68px)] w-full max-w-[1400px] flex-col justify-center px-6 pt-16 pb-20 md:px-10">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                {/* Left: copy */}
                <div className="order-2 lg:order-1">
                    <FadeIn y={-12}>
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-[#9a9aac]">
                            <span className="h-px w-8 bg-[#F5B544]" />
                            Ansh Roshan
                        </span>
                    </FadeIn>

                    <FadeIn delay={0.12} y={36}>
                        <h1 className="font-display mt-6 text-balance text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
                            Engineering web
                            <br className="hidden sm:block" /> products,{" "}
                            <span className="bg-gradient-to-r from-[#ffd98a] via-[#F5B544] to-[#ff9d3d] bg-clip-text text-transparent [text-shadow:0_0_40px_rgba(245,181,68,0.25)]">
                                end to end.
                            </span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.26} y={20}>
                        <p className="mt-7 max-w-[42ch] text-base leading-relaxed text-[#b6b6c4] sm:text-lg">
                            Full-stack and DevOps developer building fast, polished
                            interfaces and the infrastructure that runs them.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4} y={20}>
                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <PillButton href="/contact">Get in touch</PillButton>
                            <PillButton href="/#projects" variant="ghost">
                                View work
                                <IconArrowDownRight size={18} stroke={1.8} />
                            </PillButton>
                        </div>
                    </FadeIn>
                </div>

                {/* Right: magnetic portrait floating over a real 3D object */}
                <FadeIn
                    delay={0.32}
                    x={28}
                    className="order-1 flex justify-center lg:order-2 lg:justify-end"
                >
                    <div className="relative aspect-square w-[300px] sm:w-[400px] lg:w-[500px]">
                        {/* 3D WebGL backdrop, peeking around the portrait */}
                        <div className="absolute inset-[-20%] -z-0">
                            <Hero3D />
                        </div>
                        {/* Soft amber bloom */}
                        <div
                            aria-hidden
                            className="absolute inset-0 -z-0 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(245,181,68,0.18),transparent_60%)] blur-2xl"
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
                </FadeIn>
            </div>
        </section>
    );
};

export default Hero;
