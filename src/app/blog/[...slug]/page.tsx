import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IconArrowLeft, IconArrowUpRight } from "@tabler/icons-react";
import { PortableTextContent } from "@/components/main/PortableTextContent";
import { Tag } from "@/components/sub/Tag";
import { siteConfig } from "@/config/site";
import { formatDate } from "@/lib/blogUtil";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { postBySlugQuery, postSlugsQuery } from "@/sanity/lib/queries";
import type { SanityPost } from "@/sanity/lib/types";

type PostParams = { slug: string[] };

interface PostPageProps {
    params: Promise<PostParams>;
}

async function getPost(params: PostParams) {
    const slug = params?.slug?.join("/");
    if (!slug) return null;
    return sanityFetch<SanityPost | null>(
        { query: postBySlugQuery, params: { slug }, tags: ["post"] },
        null,
    );
}

export async function generateStaticParams(): Promise<PostParams[]> {
    const slugs = await sanityFetch<Array<{ slug: string }>>(
        { query: postSlugsQuery, tags: ["post"] },
        [],
    );
    return slugs.map(({ slug }) => ({ slug: slug.split("/") }));
}

export async function generateMetadata({
    params,
}: PostPageProps): Promise<Metadata> {
    const post = await getPost(await params);
    if (!post) return {};

    const ogSearchParams = new URLSearchParams();
    ogSearchParams.set("title", post.title);
    ogSearchParams.set("eyebrow", "Writing");
    const ogImage = post.coverImage
        ? urlForImage(post.coverImage).width(1200).height(630).url()
        : `/api/og?${ogSearchParams.toString()}`;

    return {
        title: post.title,
        description: post.description,
        authors: { name: siteConfig.author },
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            url: `/blog/${post.slug}`,
            images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [ogImage],
        },
    };
}

export default async function PostPage({ params }: PostPageProps) {
    const post = await getPost(await params);

    if (!post) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        author: { "@type": "Person", name: siteConfig.author, url: siteConfig.url },
        url: `${siteConfig.url}/blog/${post.slug}`,
        ...(post.coverImage
            ? { image: urlForImage(post.coverImage).width(1200).url() }
            : {}),
    };

    return (
        <article className="relative mx-auto w-full max-w-6xl px-6 pt-12 pb-24 md:px-10 md:pt-16">
            {/* biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 rounded-sm font-mono text-xs uppercase tracking-[0.18em] text-[#9a9aa4] transition-colors hover:text-[#22d3ee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0b]"
            >
                <IconArrowLeft size={15} stroke={1.8} /> Back to writing
            </Link>

            {/* Header: full width, at the top */}
            <header className="mt-8 border-b border-white/10 pb-10">
                <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-[#e7e7ea] sm:text-5xl">
                    {post.title}
                </h1>
                {post.description ? (
                    <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#9a9aa4]">
                        {post.description}
                    </p>
                ) : null}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                    <time
                        dateTime={post.date}
                        className="font-mono text-xs text-[#9a9aa4]"
                    >
                        {formatDate(post.date)}
                    </time>
                    {post.tags?.length ? (
                        <div className="flex flex-wrap gap-1.5">
                            {post.tags.map((tag) => (
                                <Tag tag={tag} key={tag} />
                            ))}
                        </div>
                    ) : null}
                </div>
            </header>

            {post.coverImage ? (
                <Image
                    src={urlForImage(post.coverImage).width(1600).url()}
                    alt={post.coverImage.alt || post.title}
                    width={1600}
                    height={900}
                    priority
                    sizes="(max-width: 1152px) 100vw, 1152px"
                    className="mt-10 aspect-[16/9] w-full rounded-2xl border border-white/10 object-cover"
                />
            ) : null}

            {/* Body: spreads across the full width */}
            <div className="prose prose-invert mt-10 max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-[#22d3ee] prose-strong:text-[#e7e7ea] prose-code:text-[#22d3ee]">
                <PortableTextContent value={post.body} />
            </div>

            {/* End-of-article footer: divider + author / CTA (no duplicate nav) */}
            <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-10">
                <p className="font-mono text-xs text-[#9a9aa4]">
                    Written by {siteConfig.author}
                </p>
                <Link
                    href="/contact"
                    className="group inline-flex items-center gap-1.5 rounded-sm font-mono text-xs uppercase tracking-[0.16em] text-[#9a9aa4] transition-colors hover:text-[#22d3ee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0b]"
                >
                    Get in touch
                    <IconArrowUpRight
                        size={14}
                        stroke={1.8}
                        className="transition-transform group-hover:translate-x-0.5"
                    />
                </Link>
            </div>
        </article>
    );
}
