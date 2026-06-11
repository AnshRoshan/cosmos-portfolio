/**
 * One-off seed: pushes the local projects + a couple of starter blog posts into
 * Sanity so the CMS isn't empty. Safe to re-run (uses deterministic _ids via
 * createOrReplace, and re-uploads images only when a project has one).
 *
 * Run:  node --env-file=.env.local scripts/seed-sanity.mjs
 * Needs: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET (optional),
 *        and SANITY_API_WRITE_TOKEN (an "Editor" token from Manage > API > Tokens).
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
    console.error(
        "Missing env. Need NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN.\n" +
            "Create an Editor token at https://www.sanity.io/manage > API > Tokens,\n" +
            "add it to .env.local as SANITY_API_WRITE_TOKEN, then re-run.",
    );
    process.exit(1);
}

const client = createClient({
    projectId,
    dataset,
    apiVersion: "2024-10-01",
    token,
    useCdn: false,
});

// ── Projects (mirror of src/data/projects.ts; copy fixed: no stale "WebGL") ──
const projects = [
    {
        slug: "heart-disease-prediction",
        title: "Heart Disease Prediction",
        category: "Machine Learning",
        description:
            "A classification model that predicts heart-failure risk from clinical features, with data cleaning, feature engineering, and model evaluation in a reproducible notebook.",
        tags: ["Python", "scikit-learn", "Pandas"],
        live: "https://colab.research.google.com/drive/1FiQ-stb81wMvrwq-94k5bpvVK8D5MS55?usp=sharing",
        github:
            "https://colab.research.google.com/drive/1FiQ-stb81wMvrwq-94k5bpvVK8D5MS55?usp=sharing",
        year: "2024",
        featured: true,
        order: 1,
        image: null,
    },
    {
        slug: "cosmos-portfolio",
        title: "Cinematic Portfolio",
        category: "Web",
        description:
            "This site. A cinematic developer portfolio on Next.js 16 and Tailwind v4, with GSAP scroll-driven motion and a video-backed dark interface.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Motion"],
        live: "https://anshroshan.vercel.app/",
        github: "https://github.com/AnshRoshan/cosmos-portfolio",
        year: "2026",
        featured: true,
        order: 2,
        image: "projects/portfolio.webp",
    },
    {
        slug: "social-app",
        title: "Social Media App",
        category: "Full-stack",
        description:
            "A social platform with authentication, posts, and feeds, built on Next.js and MongoDB with a focus on a fast, responsive interface.",
        tags: ["Next.js", "MongoDB", "Tailwind"],
        live: "https://anshmeta.netlify.app/",
        github: "https://github.com/AnshRoshan/social-app",
        year: "2024",
        featured: true,
        order: 3,
        image: "projects/social-app.jpg",
    },
    {
        slug: "ecommerce-store",
        title: "Ecommerce Store",
        category: "Commerce",
        description:
            "A storefront with cart, checkout, and Stripe payments on Next.js and MongoDB, from product browsing through to a completed order.",
        tags: ["Next.js", "Stripe", "MongoDB"],
        live: "https://anshstore.vercel.app/",
        github: "https://github.com/AnshRoshan/eshop",
        year: "2023",
        featured: true,
        order: 4,
        image: "projects/ecommerce.webp",
    },
    {
        slug: "react-projects",
        title: "React Projects Collection",
        category: "Frontend",
        description:
            "A collection of React builds spanning UI experiments and small apps, used as a sandbox for patterns and component ideas.",
        tags: ["React", "TypeScript", "Tailwind"],
        live: "https://anshroshan.github.io/React-Projects/",
        github: "https://github.com/AnshRoshan/React-Projects",
        year: "2023",
        featured: false,
        order: 5,
        image: "projects/react-projects.jpeg",
    },
];

// ── Starter blog posts (short; replace/expand later in Studio) ──────────────
const block = (style, text, key) => ({
    _type: "block",
    _key: key,
    style,
    markDefs: [],
    children: [{ _type: "span", _key: `${key}s`, text, marks: [] }],
});

const posts = [
    {
        slug: "shipping-rag-that-survives-production",
        title: "Shipping RAG that survives production",
        description:
            "Retrieval looks easy in a notebook and breaks under real traffic. Notes on evaluation, guardrails, and graceful failure.",
        tags: ["RAG", "LLM", "Production"],
        body: [
            block(
                "normal",
                "A retrieval pipeline that scores well on a handful of test questions can still fall apart the moment real users hit it. The gap between a demo and a product is almost never the model. It is everything around it.",
                "p1",
            ),
            block("h2", "Evaluate before you trust", "h1"),
            block(
                "normal",
                "Build an evaluation set from real questions, not the ones that happen to work. Track retrieval quality and answer quality separately, because a good answer over the wrong context is luck, not a system.",
                "p2",
            ),
            block("h2", "Fail on purpose", "h2"),
            block(
                "normal",
                "Decide what happens when retrieval returns nothing useful. A confident wrong answer is worse than an honest 'I could not find that'. Guardrails and a clear fallback path are what make the thing safe to ship.",
                "p3",
            ),
        ],
    },
    {
        slug: "designing-agentic-systems-that-dont-fall-over",
        title: "Designing agentic systems that don't fall over",
        description:
            "Multi-agent setups multiply both capability and failure modes. How I keep them reliable in production.",
        tags: ["Agents", "LangGraph", "LLM"],
        body: [
            block(
                "normal",
                "Every agent you add is another place the system can drift, loop, or stall. Capability scales with the number of agents, and so does the surface area for failure. The job is to keep the second curve flatter than the first.",
                "p1",
            ),
            block("h2", "Bound every loop", "h1"),
            block(
                "normal",
                "Hard limits on steps, tool calls, and time are not optional. An agent without a budget is a bill and an outage waiting to happen.",
                "p2",
            ),
            block("h2", "Make state inspectable", "h2"),
            block(
                "normal",
                "If you cannot replay what an agent did and why, you cannot debug it. Log the plan, the tool inputs, and the decisions, then treat that trace as a first-class part of the product.",
                "p3",
            ),
        ],
    },
];

async function uploadImage(relPath) {
    try {
        const buf = readFileSync(join(process.cwd(), "public", relPath));
        const filename = relPath.split("/").pop();
        const asset = await client.assets.upload("image", buf, { filename });
        return {
            _type: "image",
            asset: { _type: "reference", _ref: asset._id },
        };
    } catch (e) {
        console.warn(`  ! image skipped (${relPath}): ${e.message}`);
        return undefined;
    }
}

async function run() {
    console.log(`Seeding project "${projectId}" / dataset "${dataset}"...\n`);

    for (const p of projects) {
        const coverImage = p.image ? await uploadImage(p.image) : undefined;
        await client.createOrReplace({
            _id: `project-${p.slug}`,
            _type: "project",
            title: p.title,
            slug: { _type: "slug", current: p.slug },
            category: p.category,
            description: p.description,
            tags: p.tags,
            liveUrl: p.live,
            githubUrl: p.github,
            year: p.year,
            featured: p.featured,
            order: p.order,
            ...(coverImage ? { coverImage } : {}),
        });
        console.log(`  project  ✓ ${p.slug}`);
    }

    for (const post of posts) {
        await client.createOrReplace({
            _id: `post-${post.slug}`,
            _type: "post",
            title: post.title,
            slug: { _type: "slug", current: post.slug },
            description: post.description,
            publishedAt: new Date().toISOString(),
            published: true,
            tags: post.tags,
            body: post.body,
        });
        console.log(`  post     ✓ ${post.slug}`);
    }

    console.log("\nDone. Refresh /projects and /blog.");
}

run().catch((e) => {
    console.error("Seed failed:", e.message);
    process.exit(1);
});
