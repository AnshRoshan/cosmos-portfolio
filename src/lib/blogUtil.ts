import { slug } from "github-slugger";
import type { SanityPost } from "@/sanity/lib/types";

export function formatDate(input: string | number): string {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

export function sortPosts(posts: Array<SanityPost>) {
    return [...posts].sort((a, b) => {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        return 0;
    });
}

export function getAllTags(posts: Array<SanityPost>) {
    const tags: Record<string, number> = {};
    posts.forEach((post) => {
        post.tags?.forEach((tag) => {
            tags[tag] = (tags[tag] ?? 0) + 1;
        });
    });

    return tags;
}

export function sortTagsByCount(tags: Record<string, number>) {
    return Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
}

export function getPostsByTagSlug(posts: Array<SanityPost>, tag: string) {
    return posts.filter((post) => {
        if (!post.tags) return false;
        const slugifiedTags = post.tags.map((t) => slug(t));
        return slugifiedTags.includes(tag);
    });
}
