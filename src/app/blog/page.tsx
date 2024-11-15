import { posts } from "#site/content";
import { QueryPagination } from "@/components/sub/QueryPagination";
import { Tag } from "@/components/sub/Tag";
import { PostItem } from "@/components/sub/post-item";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/blogUtil";
import type { Metadata } from "next";
import { Key } from "react";

export const metadata: Metadata = {
    title: "My blog",
    description: "This is a description",
};
const POSTS_PER_PAGE = 5;

interface BlogPageProps {
    searchParams: {
        page?: string;
    };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
    const currentPage = Number(searchParams?.page) || 1;
    const sortedPosts = sortPosts(posts.filter((post) => post.published));
    const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

    const displayPosts = sortedPosts.slice(
        POSTS_PER_PAGE * (currentPage - 1),
        POSTS_PER_PAGE * currentPage
    );
    const tags = getAllTags(posts);
    const sortedTags = sortTagsByCount(tags);

    return (
        <div className="container dark:bg-white/20 bg-black/20 rounded-xl  max-w-5xl py-6 lg:py-10 mt-4 z-20  ">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-black text-4xl lg:text-5xl">
                        Blog
                    </h1>
                    <p className="text-muted-foreground text-xl">
                        My Knowledge about web dev.
                    </p>
                </div>
            </div>
            <div className="mt-8 grid grid-cols-12 gap-3">
                <div className="col-span-12 col-start-1 sm:col-span-8">
                    <hr />
                    {displayPosts?.length > 0 ? (
                        <ul className="flex flex-col">
                            {displayPosts.map((post: { slug: string; date: string; title: string; description?: string; tags?: string[]; }) => {
                                const { slug, date, title, description, tags } =
                                    post;
                                return (
                                    <li key={slug}>
                                        <PostItem
                                            slug={slug}
                                            date={date}
                                            title={title}
                                            description={description}
                                            tags={tags}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        <p>Nothing to see here yet</p>
                    )}
                    <QueryPagination
                        totalPages={totalPages}
                        className="mt-4 justify-end"
                    />
                </div>
                <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
                    <CardHeader>
                        <CardTitle>Tags</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2 ">
                        {sortedTags?.map((tag: Key | null | undefined) => (
                            tag && typeof tag === 'string' && (
                                <Tag
                                    tag={tag}
                                    key={tag}
                                    count={tags[tag]}
                                    tailwind="text-md bg-sky-600 m-1  hover:bg-green-600"
                                />
                            )
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
