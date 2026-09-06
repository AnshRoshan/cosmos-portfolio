/**
 * Project list. Single source of truth for the homepage "Selected work"
 * section and the full /projects page.
 *
 * To add a project: copy one object below, drop a screenshot in
 * /public/projects/, and set `featured: true` to surface it on the homepage.
 * `image` is optional; when omitted the card renders a mint gradient panel.
 */
export type ProjectStatus = "shipped" | "building";

/** Progress meter for in-flight work, shown in the "Now building" rail. */
export type ProjectStage = "Idea" | "Prototype" | "Alpha" | "Beta" | "Live";

export type Project = {
    slug: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    image?: string;
    live?: string;
    github?: string;
    year: string;
    featured?: boolean;
    /** Defaults to "shipped"; "building" surfaces in the Now-building rail. */
    status?: ProjectStatus;
    /** Only meaningful while status === "building". */
    stage?: ProjectStage;
};

export type ProjectMetric = { value: string; label: string };

/**
 * A project plus its optional case-study content, used by /projects/[slug].
 * Everything beyond `Project` is optional: a project with no case study still
 * renders a clean overview page. Authored in src/data/projects.ts.
 */
export type ProjectDetail = Project & {
    problem?: string;
    approach?: string;
    outcome?: string;
    metrics?: ProjectMetric[];
    gallery?: { url: string; alt?: string }[];
    body?: unknown[];
};

export const projects: Project[] = [
    {
        slug: "heart-disease-prediction",
        title: "Heart Disease Prediction",
        category: "Machine Learning",
        description:
            "A classification model that predicts heart-failure risk from clinical features, with data cleaning, feature engineering, and model evaluation in a reproducible notebook.",
        tags: ["Python", "scikit-learn", "Pandas"],
        image: "/projects/heart-disease.jpg",
        live: "https://colab.research.google.com/drive/1FiQ-stb81wMvrwq-94k5bpvVK8D5MS55?usp=sharing",
        github:
            "https://colab.research.google.com/drive/1FiQ-stb81wMvrwq-94k5bpvVK8D5MS55?usp=sharing",
        year: "2024",
        featured: true,
    },
    {
        slug: "cosmos-portfolio",
        title: "Cinematic Portfolio",
        category: "Web",
        description:
            "This site. A cinematic developer portfolio on Next.js 16 and Tailwind v4, with WebGL accents, scroll-driven motion, and a video-backed dark interface.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Motion"],
        image: "/projects/portfolio.webp",
        live: "https://anshroshan.vercel.app/",
        github: "https://github.com/AnshRoshan/cosmos-portfolio",
        year: "2026",
        featured: true,
    },
    {
        slug: "social-app",
        title: "Social Media App",
        category: "Full-stack",
        description:
            "A social platform with authentication, posts, and feeds, built on Next.js and MongoDB with a focus on a fast, responsive interface.",
        tags: ["Next.js", "MongoDB", "Tailwind"],
        image: "/projects/social-app.jpg",
        live: "https://anshmeta.netlify.app/",
        github: "https://github.com/AnshRoshan/social-app",
        year: "2024",
        featured: true,
    },
    {
        slug: "ecommerce-store",
        title: "Ecommerce Store",
        category: "Commerce",
        description:
            "A storefront with cart, checkout, and Stripe payments on Next.js and MongoDB, from product browsing through to a completed order.",
        tags: ["Next.js", "Stripe", "MongoDB"],
        image: "/projects/ecommerce.webp",
        live: "https://anshstore.vercel.app/",
        github: "https://github.com/AnshRoshan/eshop",
        year: "2023",
        featured: true,
    },
    {
        slug: "react-projects",
        title: "React Projects Collection",
        category: "Frontend",
        description:
            "A collection of React builds spanning UI experiments and small apps, used as a sandbox for patterns and component ideas.",
        tags: ["React", "TypeScript", "Tailwind"],
        image: "/projects/react-projects.jpeg",
        live: "https://anshroshan.github.io/React-Projects/",
        github: "https://github.com/AnshRoshan/React-Projects",
        year: "2023",
    },
    /* ───────────── In flight — surfaced in the "Now building" rail ───────────── */
    {
        slug: "multi-agent-research",
        title: "Multi-agent research assistant",
        category: "Gen AI",
        description:
            "A LangGraph crew that plans, searches, verifies, and drafts a sourced brief. Human-in-the-loop checkpoints before anything is finalised.",
        tags: ["LangGraph", "Claude", "FastAPI", "Postgres"],
        year: "2026",
        status: "building",
        stage: "Alpha",
        github: "https://github.com/anshroshan",
    },
    {
        slug: "rag-eval-harness",
        title: "RAG evaluation harness",
        category: "Gen AI",
        description:
            "Retrieval and answer-quality evals that run in CI, tracking faithfulness, context precision, and regressions across chunking strategies.",
        tags: ["Python", "LlamaIndex", "pgvector"],
        year: "2026",
        status: "building",
        stage: "Prototype",
    },
    {
        slug: "claude-code-toolkit",
        title: "Claude Code agent toolkit",
        category: "Tooling",
        description:
            "Reusable skills, hooks, and MCP servers that make Claude Code a reliable teammate on real repos. Grown out of the certification work.",
        tags: ["Claude Code", "MCP", "TypeScript"],
        year: "2026",
        status: "building",
        stage: "Beta",
    },
];

export const featuredProjects: Project[] = projects.filter(
    (p) => p.featured && p.status !== "building",
);

/** In-flight projects for the Now-building rail, newest stage first. */
export const buildingProjects: Project[] = projects.filter(
    (p) => p.status === "building",
);
