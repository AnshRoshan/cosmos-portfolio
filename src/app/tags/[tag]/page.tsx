import { slug } from "github-slugger";
import type { Metadata } from "next";
import { PostItem } from "@/components/sub/post-item";
import Reveal from "@/components/sub/Reveal";
import SplitReveal from "@/components/sub/SplitReveal";
import { Tag } from "@/components/sub/Tag";
import {
    getAllTags,
    getPostsByTagSlug,
    sortPosts,
    sortTagsByCount,
} from "@/lib/blogUtil";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import type { SanityPost } from "@/sanity/lib/types";

interface TagPageProps {
    params: Promise<{ tag: string }>;
}

export async function generateMetadata({
    params,
}: TagPageProps): Promise<Metadata> {
    const { tag } = await params;
    const title = tag.split("-").join(" ");
    return {
        title,
        description: `Posts on the topic of ${title}.`,
    };
}

export async function generateStaticParams() {
    const posts = await sanityFetch<SanityPost[]>(
        { query: postsQuery, tags: ["post"] },
        [],
    );
    const tags = getAllTags(posts);
    return Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
}

export default async function TagPage({ params }: TagPageProps) {
    const { tag } = await params;
    const title = tag.split("-").join(" ");

    const posts = await sanityFetch<SanityPost[]>(
        { query: postsQuery, tags: ["post"] },
        [],
    );
    const displayPosts = sortPosts(getPostsByTagSlug(posts, tag));
    const tags = getAllTags(posts);
    const sortedTags = sortTagsByCount(tags);

    return (
        <section className="relative mx-auto w-full max-w-5xl px-6 pt-12 pb-24 md:px-10 md:pt-16">
            <Reveal y={24}>
                <span className="font-mono inline-flex items-center gap-2.5 text-sm uppercase tracking-[0.22em] text-[#9a9aa4]">
                    <span className="h-px w-8 bg-[#22d3ee]" />
                    Tag
                </span>
            </Reveal>
            <SplitReveal className="mt-6">
                <h1 className="text-gradient font-display text-4xl font-semibold capitalize tracking-tight sm:text-5xl lg:text-6xl">
                    {title}
                </h1>
            </SplitReveal>

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
                </div>

                <aside className="col-span-12 lg:col-span-4">
                    <div className="rounded-[24px] border border-white/10 bg-[#131316]/70 p-6 backdrop-blur-xl">
                        <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-[#9a9aa4]">
                            All tags
                        </h2>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {sortedTags.map((t) => (
                                <Tag
                                    tag={t}
                                    key={t}
                                    count={tags[t]}
                                    current={slug(t) === tag}
                                />
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}
