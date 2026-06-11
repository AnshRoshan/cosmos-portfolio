import { slug as slugify } from "github-slugger";
import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllTags } from "@/lib/blogUtil";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import type { SanityPost } from "@/sanity/lib/types";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const base = siteConfig.url.replace(/\/$/, "");
    const now = new Date();

    const staticRoutes = ["", "/about", "/projects", "/blog", "/contact", "/tags"].map(
        (path) => ({
            url: `${base}${path}`,
            lastModified: now,
        }),
    );

    const posts = await sanityFetch<SanityPost[]>(
        { query: postsQuery, tags: ["post"] },
        [],
    );

    const postRoutes = posts.map((post) => ({
        url: `${base}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : now,
    }));

    const tagRoutes = Object.keys(getAllTags(posts)).map((tag) => ({
        url: `${base}/tags/${slugify(tag)}`,
        lastModified: now,
    }));

    return [...staticRoutes, ...postRoutes, ...tagRoutes];
}
