import { IconBrandGithub } from "@tabler/icons-react";
import { buildingProjects, type ProjectStage } from "@/data/projects";
import PillButton from "@/components/sub/PillButton";
import Reveal from "@/components/sub/Reveal";
import SplitReveal from "@/components/sub/SplitReveal";

const STAGES: ProjectStage[] = ["Idea", "Prototype", "Alpha", "Beta", "Live"];

function StageMeter({ stage }: { stage?: ProjectStage }) {
    const idx = stage ? STAGES.indexOf(stage) : 0;
    return (
        <div className="flex items-center gap-3" aria-label={`Stage: ${stage ?? "Idea"}`}>
            <div className="flex gap-1" aria-hidden>
                {STAGES.map((s, i) => (
                    <span
                        key={s}
                        className={
                            "h-1.5 w-6 rounded-full transition-colors " +
                            (i <= idx ? "bg-[#22d3ee]" : "bg-white/[0.08]")
                        }
                    />
                ))}
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#9a9aa4]">
                {stage ?? "Idea"}
            </span>
        </div>
    );
}

/**
 * "Now building" — the work-in-progress rail. Recruiter signal: the bench is
 * active, and each effort carries an honest stage meter (Idea → Live).
 * Driven entirely by projects with status "building" in src/data/projects.ts.
 */
export default function NowBuilding() {
    if (!buildingProjects.length) return null;

    return (
        <section
            id="now"
            className="relative mx-auto w-full max-w-[1400px] scroll-mt-24 px-6 py-16 md:px-10 md:py-24"
        >
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,#0f0f13_0%,#0a0a0d_60%)] p-6 sm:p-10 lg:p-14">
                {/* Soft mint bloom, matching the About portrait glow */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[#22d3ee]/15 blur-[120px]"
                />

                <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    <div>
                        <Reveal y={24}>
                            <span className="font-mono inline-flex items-center gap-2.5 text-sm uppercase tracking-[0.22em] text-[#9a9aa4]">
                                <span className="h-px w-8 bg-[#22d3ee]" />
                                In flight
                            </span>
                        </Reveal>
                        <SplitReveal className="mt-6">
                            <h2 className="text-gradient font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                                Now building
                            </h2>
                        </SplitReveal>
                        <Reveal delay={0.18} y={20}>
                            <p className="mt-4 max-w-[46ch] text-base text-[#9a9aa4]">
                                AI systems currently on the bench. Each one
                                moves from prototype to live here as it
                                matures — same pipeline as everything above.
                            </p>
                        </Reveal>
                    </div>

                    <div className="flex flex-col gap-4">
                        {buildingProjects.map((p, i) => (
                            <Reveal key={p.slug} delay={i * 0.08} y={28}>
                                <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#131316]/70 p-5 backdrop-blur transition-colors duration-300 hover:border-[#22d3ee]/40 sm:p-6">
                                    <div className="flex items-start justify-between gap-3">
                                        <span className="font-mono rounded-md border border-[#22d3ee]/30 bg-[#22d3ee]/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-[#22d3ee]">
                                            {p.category}
                                        </span>
                                        {p.github ? (
                                            <a
                                                href={p.github}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                aria-label={`${p.title} on GitHub`}
                                                className="rounded-md p-1.5 text-[#9a9aa4] transition-colors hover:text-[#22d3ee]"
                                            >
                                                <IconBrandGithub
                                                    size={18}
                                                    stroke={1.6}
                                                />
                                            </a>
                                        ) : (
                                            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#9a9aa4]">
                                                {p.year}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="font-display mt-4 text-xl font-semibold tracking-tight text-[#e7e7ea] transition-colors group-hover:text-[#22d3ee]">
                                        {p.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-[#9a9aa4]">
                                        {p.description}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {p.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="font-mono rounded-md border border-white/10 px-2 py-0.5 text-[11px] text-[#9a9aa4]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-5 border-t border-white/10 pt-4">
                                        <StageMeter stage={p.stage} />
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <Reveal delay={0.2} className="relative mt-10">
                    <PillButton href="/contact" variant="ghost">
                        Follow the progress
                    </PillButton>
                </Reveal>
            </div>
        </section>
    );
}
