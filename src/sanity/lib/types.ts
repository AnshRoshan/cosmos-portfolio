import type { SanityImageSource } from "@sanity/image-url";

/** Image with optional alt, as projected by our GROQ queries. */
export type SanityImage = SanityImageSource & { alt?: string };

export type SanityPost = {
    slug: string;
    title: string;
    description?: string;
    /** ISO date string from `publishedAt`. */
    date: string;
    tags?: string[];
    coverImage?: SanityImage;
    // Portable Text blocks. Loosely typed to avoid coupling to internal shapes.
    body?: unknown[];
};

export type SanityProject = {
    slug: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    coverImage?: SanityImage;
    live?: string;
    github?: string;
    year: string;
    featured?: boolean;
};

/** A single project with its optional case-study fields (detail page). */
export type SanityProjectDetail = SanityProject & {
    problem?: string;
    approach?: string;
    outcome?: string;
    metrics?: { value: string; label: string }[];
    gallery?: SanityImage[];
    body?: unknown[];
};
