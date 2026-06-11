import {
    PortableText,
    type PortableTextComponents,
} from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

/**
 * Renders Sanity Portable Text (the blog body) into styled React. Designed to
 * live inside a `prose prose-invert` wrapper; only non-prose concerns (images,
 * links, code blocks) get bespoke treatment here. Cool Ink + Mint accents.
 */
const components: PortableTextComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) return null;
            return (
                <figure className="my-8">
                    <Image
                        src={urlForImage(value).width(1600).url()}
                        alt={value.alt || ""}
                        width={1600}
                        height={900}
                        className="rounded-2xl border border-white/10"
                        sizes="(max-width: 768px) 100vw, 768px"
                    />
                    {value.alt ? (
                        <figcaption className="mt-2 text-center text-xs text-[#9a9aa4]">
                            {value.alt}
                        </figcaption>
                    ) : null}
                </figure>
            );
        },
        code: ({ value }) => {
            if (!value?.code) return null;
            return (
                <div className="my-6 overflow-hidden rounded-xl border border-white/10 bg-[#0d0d10]">
                    {value.filename ? (
                        <div className="border-b border-white/10 px-4 py-2 font-mono text-xs text-[#9a9aa4]">
                            {value.filename}
                        </div>
                    ) : null}
                    <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
                        <code className="font-mono text-[#e7e7ea]">
                            {value.code}
                        </code>
                    </pre>
                </div>
            );
        },
    },
    marks: {
        code: ({ children }) => (
            <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-[#22d3ee]">
                {children}
            </code>
        ),
        link: ({ value, children }) => {
            const href: string = value?.href || "#";
            const isExternal = /^https?:\/\//.test(href);
            const cls =
                "text-[#22d3ee] underline decoration-[#22d3ee]/30 underline-offset-4 transition-colors hover:decoration-[#22d3ee]";
            return isExternal ? (
                <a href={href} target="_blank" rel="noreferrer" className={cls}>
                    {children}
                </a>
            ) : (
                <Link href={href} className={cls}>
                    {children}
                </Link>
            );
        },
    },
};

export function PortableTextContent({ value }: { value: unknown }) {
    if (!value || !Array.isArray(value)) return null;
    return <PortableText value={value} components={components} />;
}
