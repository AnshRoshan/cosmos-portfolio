"use client";

import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";
import type { Project } from "@/data/projects";
import TiltCard from "@/components/sub/TiltCard";

/**
 * Shared project card used by the homepage "Selected work" grid and the full
 * /projects page. Image-forward with a 3D hover tilt; when a project has no
 * screenshot it falls back to a mint gradient panel with the title.
 * Cool Ink + Mint palette: surface #131316, accent #2dd4bf.
 */
export default function ProjectCard({ project }: { project: Project }) {
    return (
        <TiltCard max={6} className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#131316]/70 backdrop-blur-xl transition-colors duration-300 hover:border-[#2dd4bf]/40">
                {/* Media */}
                <div className="relative aspect-[16/10] overflow-hidden">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                        />
                    ) : (
                        <div className="grid h-full w-full place-items-center bg-[radial-gradient(120%_120%_at_30%_0%,rgba(45,212,191,0.22),transparent_55%)]">
                            <span className="font-display px-6 text-center text-2xl font-semibold tracking-tight text-[#e7e7ea]/90">
                                {project.title}
                            </span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />
                    <span className="font-mono absolute left-4 top-4 rounded-full bg-[#0a0a0b]/70 px-3 py-1 text-[10.5px] uppercase tracking-[0.18em] text-[#2dd4bf] backdrop-blur-md">
                        {project.category}
                    </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-xl font-semibold tracking-tight text-[#e7e7ea] md:text-2xl">
                            {project.title}
                        </h3>
                        <span className="font-mono shrink-0 text-xs text-[#9a9aa4]">
                            {project.year}
                        </span>
                    </div>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[#9a9aa4]">
                        {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="font-mono rounded-md border border-white/10 px-2 py-1 text-[10.5px] text-[#9a9aa4]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-2.5">
                        {project.live ? (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-full bg-[#2dd4bf] px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[#0a0a0b] transition-colors hover:bg-[#5eead4]"
                            >
                                Live <IconArrowUpRight size={15} stroke={2} />
                            </a>
                        ) : null}
                        {project.github ? (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[#e7e7ea] transition-colors hover:border-white/30 hover:bg-white/[0.06]"
                            >
                                Code <IconBrandGithub size={15} stroke={2} />
                            </a>
                        ) : null}
                    </div>
                </div>
            </article>
        </TiltCard>
    );
}
