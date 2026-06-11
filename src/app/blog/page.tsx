import type { Metadata } from "next";
import { PostItem } from "@/components/sub/post-item";
import { QueryPagination } from "@/components/sub/QueryPagination";
import Reveal from "@/components/sub/Reveal";
import SplitReveal from "@/components/sub/SplitReveal";
import { Tag } from "@/components/sub/Tag";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/blogUtil";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import type { SanityPost } from "@/sanity/lib/types";

export const metadata: Metadata = {
    title: "Writing",
    description: "Notes on Gen AI, building with LLMs, and shipping software.",
};

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
    searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
    const currentPage = Number((await searchParams)?.page) || 1;

    const posts = await sanityFetch<SanityPost[]>(
        { query: postsQuery, tags: ["post"] },
        [],
    );

    const sortedPosts = sortPosts(posts);
    const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

    const displayPosts = sortedPosts.slice(
        POSTS_PER_PAGE * (currentPage - 1),
        POSTS_PER_PAGE * currentPage,
    );
    const tags = getAllTags(posts);
    const sortedTags = sortTagsByCount(tags);

    return (
        <section className="relative mx-auto w-full max-w-5xl px-6 pt-12 pb-24 md:px-10 md:pt-16">
            <Reveal y={24}>
                <span className="font-mono inline-flex items-center gap-2.5 text-sm uppercase tracking-[0.22em] text-[#9a9aa4]">
                    <span className="h-px w-8 bg-[#22d3ee]" />
                    Blog
                </span>
            </Reveal>
            <SplitReveal className="mt-6">
                <h1 className="text-gradient font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                    Writing
                </h1>
            </SplitReveal>
            <Reveal delay={0.16} y={20}>
                <p className="mt-4 max-w-[58ch] text-base text-[#9a9aa4]">
                    Notes on Gen AI, building with LLMs, and shipping software
                    end to end.
                </p>
            </Reveal>

            <div className="mt-14 grid grid-cols-12 gap-10">
                <div className="col-span-12 lg:col-span-8">
                    {displayPosts.length > 0 ? (
                        <ul className="flex flex-col border-t border-white/10">
                            {displayPosts.map((post) => (
                                <li key={post.slug}>
                                    <PostItem
                                        slug={post.slug}
                                        date={post.date}
                                        title={post.title}
                                        description={post.description}
                                        tags={post.tags}
                                    />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-[#9a9aa4]">Nothing to see here yet.</p>
                    )}
                    <QueryPagination
                        totalPages={totalPages}
                        className="mt-8 justify-end"
                    />
                </div>

                <aside className="col-span-12 lg:col-span-4">
                    <div className="rounded-[24px] border border-white/10 bg-[#131316]/70 p-6 backdrop-blur-xl">
                        <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-[#9a9aa4]">
                            Tags
                        </h2>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {sortedTags.map((tag) => (
                                <Tag tag={tag} key={tag} count={tags[tag]} />
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}
