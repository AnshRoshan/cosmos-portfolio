import type { Metadata } from "next";
import ProjectsGallery from "@/components/main/ProjectsGallery";
import Reveal from "@/components/sub/Reveal";
import SplitReveal from "@/components/sub/SplitReveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Selected work by Ansh Roshan, from Gen AI models to full-stack products.",
};

export default function ProjectsPage() {
    return (
        <section className="relative mx-auto w-full max-w-[1400px] px-6 pt-12 pb-24 md:px-10 md:pt-16 md:pb-32">
            <div className="mb-14 md:mb-20">
                <Reveal y={24}>
                    <span className="font-mono inline-flex items-center gap-2.5 text-sm uppercase tracking-[0.22em] text-[#9a9aa4]">
                        <span className="h-px w-8 bg-[#22d3ee]" />
                        Projects
                    </span>
                </Reveal>
                <SplitReveal className="mt-6">
                    <h1 className="text-gradient font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                        Things I have built
                    </h1>
                </SplitReveal>
                <Reveal delay={0.18} y={20}>
                    <p className="mt-4 max-w-[58ch] text-base text-[#9a9aa4]">
                        AI models, agentic systems, and the full-stack products
                        around them. This list grows as I ship.
                    </p>
                </Reveal>
            </div>

            <Reveal y={24}>
                <ProjectsGallery projects={projects} />
            </Reveal>
        </section>
    );
}
