"use client";

import { IconCloudUpload, IconCode, IconRobot } from "@tabler/icons-react";
import PillButton from "@/components/sub/PillButton";
import Reveal from "@/components/sub/Reveal";
import SplitReveal from "@/components/sub/SplitReveal";

const focus = [
    {
        icon: IconRobot,
        label: "Gen AI",
        detail: "Agentic workflows and RAG pipelines with LangChain, LangGraph, and the major model APIs.",
    },
    {
        icon: IconCode,
        label: "Full-stack",
        detail: "FastAPI and Node services behind React and Next.js interfaces, typed end to end.",
    },
    {
        icon: IconCloudUpload,
        label: "Delivery",
        detail: "Shipping and running it on Docker, Kubernetes, and AWS, from prototype to production.",
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="relative mx-auto w-full max-w-[1400px] px-6 py-24 md:px-10 md:py-32"
        >
            {/* Large editorial bio with GSAP word-by-word scroll reveal */}
            <SplitReveal>
                <p className="font-display max-w-4xl text-balance text-3xl font-medium leading-[1.25] tracking-tight text-[#e7e7ea] sm:text-4xl lg:text-5xl">
                    I&apos;m Ansh, a Gen AI developer at TCS. I build agentic
                    systems and RAG pipelines, then ship them as full products:
                    model to API to interface to deployment. I care about AI
                    that holds up in production, not just in a demo.
                </p>
            </SplitReveal>

            {/* Icon-divided focus strip (editorial, not feature cards) */}
            <Reveal delay={0.12} y={24}>
                <div className="mt-16 flex flex-col divide-y divide-white/10 border-y border-white/10 md:flex-row md:divide-x md:divide-y-0">
                    {focus.map(({ icon: Icon, label, detail }) => (
                        <div
                            key={label}
                            className="flex-1 py-7 md:px-8 md:first:pl-0 md:last:pr-0"
                        >
                            <div className="flex items-center gap-2.5 text-[#2dd4bf]">
                                <Icon size={20} stroke={1.6} />
                                <span className="font-mono text-sm uppercase tracking-[0.18em]">
                                    {label}
                                </span>
                            </div>
                            <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-[#9a9aa4]">
                                {detail}
                            </p>
                        </div>
                    ))}
                </div>
            </Reveal>

            <Reveal delay={0.2} y={20}>
                <div className="mt-12 flex flex-wrap items-center gap-4">
                    <PillButton href="/about">More about me</PillButton>
                    <PillButton href="/contact" variant="ghost">
                        Get in touch
                    </PillButton>
                </div>
            </Reveal>
        </section>
    );
};

export default About;
