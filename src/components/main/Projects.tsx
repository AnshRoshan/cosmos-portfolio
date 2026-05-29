"use client";

import { useEffect, useRef, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useReducedMotion,
    useMotionValue,
    type MotionValue,
} from "framer-motion";
import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";
import FadeIn from "@/components/sub/FadeIn";
import TiltCard from "@/components/sub/TiltCard";

const projects = [
    {
        title: "Modern Next.js Portfolio",
        category: "Web · Next.js",
        des: "A cinematic developer portfolio built with Next.js, Tailwind CSS and Framer Motion.",
        img: "/anshportfolio.webp",
        link: "https://anshroshan.vercel.app/",
        github: "https://github.com/AnshRoshan/cosmos-portfolio",
    },
    {
        title: "React Projects Collection",
        category: "Frontend · React",
        des: "A collection of MERN-stack React projects spanning UI experiments and small apps.",
        img: "/project-react.jpeg",
        link: "https://anshroshan.github.io/React-Projects/",
        github: "https://github.com/AnshRoshan/React-Projects",
    },
    {
        title: "Social Media App",
        category: "Full-stack · MERN",
        des: "A social app with auth, posts and feeds built on Next.js, Tailwind and MongoDB.",
        img: "/Instagram.jpg",
        link: "https://anshmeta.netlify.app/",
        github: "https://github.com/AnshRoshan/social-app",
    },
    {
        title: "Ecommerce Store",
        category: "Commerce · Stripe",
        des: "An ecommerce storefront with cart and Stripe payments on Next.js and MongoDB.",
        img: "/ecommerce.webp",
        link: "https://anshstore.vercel.app/",
        github: "https://github.com/AnshRoshan/eshop",
    },
];

const total = projects.length;

function ProjectCard({
    project,
    i,
    progress,
    range,
    targetScale,
}: {
    project: (typeof projects)[number];
    i: number;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}) {
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            className="sticky top-20 flex justify-center md:top-24"
            style={{ paddingTop: `${i * 1.5}rem` }}
        >
            <motion.article
                style={{ scale }}
                className="relative w-full max-w-4xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a16]/80 p-5 backdrop-blur-xl sm:p-7 md:p-8"
            >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0 flex-1">
                        <span className="text-xs uppercase tracking-[0.18em] text-[#F5B544]">
                            {project.category}
                        </span>
                        <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight text-[#f4f4f7] sm:text-3xl md:text-4xl">
                            {project.title}
                        </h3>
                    </div>

                    <div className="flex flex-row flex-wrap gap-2 sm:flex-shrink-0 sm:pt-1">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-[#F5B544] px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[#040115] transition-colors hover:bg-[#ffc560]"
                        >
                            Live <IconArrowUpRight size={16} stroke={2} />
                        </a>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[#f4f4f7] transition-colors hover:bg-white/[0.06]"
                        >
                            Code <IconBrandGithub size={16} stroke={2} />
                        </a>
                    </div>
                </div>

                <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-[#b6b6c4] sm:text-base">
                    {project.des}
                </p>

                <TiltCard className="mt-6" max={8}>
                    <div
                        className="overflow-hidden rounded-[24px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                        style={{ transform: "translateZ(40px)" }}
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            loading="lazy"
                            className="h-[200px] w-full object-cover sm:h-[300px] md:h-[380px]"
                        />
                    </div>
                </TiltCard>
            </motion.article>
        </div>
    );
}

function cards(progress: MotionValue<number>) {
    return projects.map((project, i) => (
        <ProjectCard
            key={project.title}
            project={project}
            i={i}
            progress={progress}
            range={[i / total, 1]}
            targetScale={1 - (total - 1 - i) * 0.04}
        />
    ));
}

/** Scroll-driven stack (mounted, motion-enabled only). */
function ScrollStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
    return (
        <div ref={containerRef} className="relative">
            {cards(scrollYProgress)}
        </div>
    );
}

/** Static stack for SSR / first paint / reduced motion (no useScroll). */
function StaticStack() {
    const zero = useMotionValue(0);
    return <div className="relative">{cards(zero)}</div>;
}

export default function Projects() {
    const [mounted, setMounted] = useState(false);
    const reduce = useReducedMotion();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section
            id="projects"
            className="relative mx-auto w-full max-w-[1400px] px-6 py-24 md:px-10 md:py-32"
        >
            <div className="mb-16 md:mb-24">
                <FadeIn y={24}>
                    <h2 className="font-display text-3xl font-semibold tracking-tight text-[#f4f4f7] sm:text-4xl lg:text-5xl">
                        Selected work
                    </h2>
                </FadeIn>
                <p className="mt-3 text-sm text-[#b6b6c4] sm:text-base">
                    A few things I have designed, built and shipped recently.
                </p>
            </div>

            {mounted && !reduce ? <ScrollStack /> : <StaticStack />}
        </section>
    );
}
