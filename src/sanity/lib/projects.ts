import {
    featuredProjects as localFeatured,
    type Project,
    type ProjectDetail,
    projects as localProjects,
} from "@/data/projects";
import { sanityFetch } from "./fetch";
import { urlForImage } from "./image";
import {
    featuredProjectsQuery,
    projectBySlugQuery,
    projectsQuery,
} from "./queries";
import type { SanityProject, SanityProjectDetail } from "./types";

/** Map a Sanity project doc to the shared `Project` shape used by the cards. */
function toProject(p: SanityProject): Project {
    return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        tags: p.tags ?? [],
        image: p.coverImage
            ? urlForImage(p.coverImage).width(1200).url()
            : undefined,
        live: p.live,
        github: p.github,
        year: p.year,
        featured: p.featured,
    };
}

/**
 * All projects. Falls back to the version-controlled list in
 * src/data/projects.ts when Sanity has no projects (or isn't configured), so
 * the site is never empty.
 */
export async function getProjects(): Promise<Project[]> {
    const docs = await sanityFetch<SanityProject[]>(
        { query: projectsQuery, tags: ["project"] },
        [],
    );
    return docs.length ? docs.map(toProject) : localProjects;
}

/** Featured projects for the homepage grid, with the same local fallback. */
export async function getFeaturedProjects(): Promise<Project[]> {
    const docs = await sanityFetch<SanityProject[]>(
        { query: featuredProjectsQuery, tags: ["project"] },
        [],
    );
    return docs.length ? docs.map(toProject) : localFeatured;
}

/** Map a Sanity project doc (with case study) to the `ProjectDetail` shape. */
function toProjectDetail(p: SanityProjectDetail): ProjectDetail {
    return {
        ...toProject(p),
        problem: p.problem,
        approach: p.approach,
        outcome: p.outcome,
        metrics: p.metrics,
        gallery: p.gallery?.map((g) => ({
            url: urlForImage(g).width(1600).url(),
            alt: g.alt,
        })),
        body: p.body,
    };
}

/**
 * A single project by slug, with its case-study content. Falls back to the
 * local list (overview only, no case study) when Sanity has no match.
 */
export async function getProject(slug: string): Promise<ProjectDetail | null> {
    const doc = await sanityFetch<SanityProjectDetail | null>(
        { query: projectBySlugQuery, params: { slug }, tags: ["project"] },
        null,
    );
    if (doc) return toProjectDetail(doc);
    const local = localProjects.find((p) => p.slug === slug);
    return local ? { ...local } : null;
}
