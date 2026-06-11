import type { Metadata } from "next";
import Reveal from "@/components/sub/Reveal";
import SplitReveal from "@/components/sub/SplitReveal";
import { Tag } from "@/components/sub/Tag";
import { getAllTags, sortTagsByCount } from "@/lib/blogUtil";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import type { SanityPost } from "@/sanity/lib/types";

export const metadata: Metadata = {
    title: "Tags",
    description: "Topics I've written about.",
};

export default async function TagsPage() {
    const posts = await sanityFetch<SanityPost[]>(
        { query: postsQuery, tags: ["post"] },
        [],
    );
    const tags = getAllTags(posts);
    const sortedTags = sortTagsByCount(tags);

    return (
        <section className="relative mx-auto w-full max-w-5xl px-6 pt-12 pb-24 md:px-10 md:pt-16">
            <Reveal y={24}>
                <span className="font-mono inline-flex items-center gap-2.5 text-sm uppercase tracking-[0.22em] text-[#9a9aa4]">
                    <span className="h-px w-8 bg-[#22d3ee]" />
                    Topics
                </span>
            </Reveal>
            <SplitReveal className="mt-6">
                <h1 className="text-gradient font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                    Tags
                </h1>
            </SplitReveal>

            <div className="mt-10 flex flex-wrap gap-2">
                {sortedTags.length > 0 ? (
                    sortedTags.map((tag) => (
                        <Tag tag={tag} count={tags[tag]} key={tag} />
                    ))
                ) : (
                    <p className="text-[#9a9aa4]">No tags yet.</p>
                )}
            </div>
        </section>
    );
}
