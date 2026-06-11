import { groq } from "next-sanity";

// Treat a post as published when `published` is true OR unset (default true).
const PUBLISHED = `(published == true || !defined(published))`;

const postFields = groq`
    "slug": slug.current,
    title,
    description,
    "date": publishedAt,
    tags,
    coverImage
`;

/** All published posts, newest first (list + tag aggregation). */
export const postsQuery = groq`*[_type == "post" && ${PUBLISHED}] | order(publishedAt desc){ ${postFields} }`;

/** Single post with body, by slug. */
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug && ${PUBLISHED}][0]{ ${postFields}, body }`;

/** Slugs only, for generateStaticParams. */
export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current) && ${PUBLISHED}]{ "slug": slug.current }`;

const projectFields = groq`
    "slug": slug.current,
    title,
    category,
    description,
    tags,
    coverImage,
    "live": liveUrl,
    "github": githubUrl,
    year,
    featured
`;

/** All projects, ordered by explicit `order` then newest year. */
export const projectsQuery = groq`*[_type == "project"] | order(coalesce(order, 999) asc, year desc){ ${projectFields} }`;

/** Featured projects for the homepage grid. */
export const featuredProjectsQuery = groq`*[_type == "project" && featured == true] | order(coalesce(order, 999) asc, year desc){ ${projectFields} }`;

/** Single project with full case-study fields, by slug. */
export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0]{
    ${projectFields},
    problem,
    approach,
    outcome,
    metrics,
    gallery,
    body
}`;

/** Project slugs only, for generateStaticParams. */
export const projectSlugsQuery = groq`*[_type == "project" && defined(slug.current)]{ "slug": slug.current }`;
