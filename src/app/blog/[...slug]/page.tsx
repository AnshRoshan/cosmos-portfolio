import { MDXContent } from "@/components/main/mdx-components";
import { notFound } from "next/navigation";
import { posts } from "#site/content";
import "./style.css";
import { Tag } from "@/components/sub/Tag";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import Link from "next/link";

type PostParams = {
    slug: string[];
};

interface PostPageProps {
    params: Promise<PostParams>;
}

export async function generateMetadata({
    params,
}: PostPageProps): Promise<Metadata> {
    const post = await getPostFromParams(await params);

    if (!post) {
        return {};
    }

    const ogSearchParams = new URLSearchParams();
    ogSearchParams.set("title", post.title);

    return {
        title: post.title,
        description: post.description,
        authors: { name: siteConfig.author },
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            url: post.slug,
            images: [
                {
                    url: `/api/og?${ogSearchParams.toString()}`,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [`/api/og?${ogSearchParams.toString()}`],
        },
    };
}

async function getPostFromParams(params: PostParams) {
    const slug = params?.slug?.join("/");
    const post = posts.find((post) => post.slugAsParams === slug);
    return post;
}

export async function generateStaticParams(): Promise<PostParams[]> {
    return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
    const post = await getPostFromParams(await params);

    if (!post || !post.published) {
        notFound();
    }

    return (
        <article className="prose dark:prose-invert container mx-auto max-w-7xl py-6">
            <h1 className="mb-4 text-5xl leading-normal">{post.title}</h1>
            {post.description ? (
                <p className="mt-0 text-lg text-muted-foreground">
                    {post.description}
                </p>
            ) : null}
            <div className="mb-2 flex gap-2">
                {post.tags?.map((tag) => (
                    <Tag tag={tag} key={tag} />
                ))}
            </div>
            <hr className="my-4" />
            <MDXContent code={post.body} />
            <hr className="my-4" />
            <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                    Published on {new Date(post.date).toLocaleDateString()}
                </p>
                <Link href="/blog" className="text-primary">
                    Back to blog
                </Link>
            </div>
        </article>
    );
}
