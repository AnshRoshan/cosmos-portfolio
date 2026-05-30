import type { Metadata } from "next";
import ProjectCard from "@/components/sub/ProjectCard";
import Reveal from "@/components/sub/Reveal";
import SplitReveal from "@/components/sub/SplitReveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
    title: "Projects - Ansh Roshan",
    description:
        "Selected work by Ansh Roshan, from Gen AI models to full-stack products.",
};

export default function ProjectsPage() {
    return (
        <section className="relative mx-auto w-full max-w-[1400px] px-6 pt-28 pb-24 md:px-10 md:pt-36 md:pb-32">
            <div className="mb-14 md:mb-20">
                <Reveal y={24}>
                    <span className="font-mono inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.22em] text-[#9a9aa4]">
                        <span className="h-px w-8 bg-[#2dd4bf]" />
                        Projects
                    </span>
                </Reveal>
                <SplitReveal className="mt-6">
                    <h1 className="font-display text-4xl font-semibold tracking-tight text-[#e7e7ea] sm:text-5xl lg:text-6xl">
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

            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                {projects.map((project, i) => (
                    <Reveal key={project.slug} delay={i * 0.06} y={36}>
                        <ProjectCard project={project} />
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
