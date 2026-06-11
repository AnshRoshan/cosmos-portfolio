import { IconArrowRight, IconCalendar } from "@tabler/icons-react";
import Link from "next/link";
import { formatDate } from "@/lib/blogUtil";
import { Tag } from "./Tag";

interface PostItemProps {
    slug: string;
    title: string;
    description?: string;
    date: string;
    tags?: Array<string>;
}

export function PostItem({
    slug,
    title,
    description,
    date,
    tags,
}: PostItemProps) {
    return (
        <article className="group flex flex-col gap-3 border-b border-white/10 py-7">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[#e7e7ea] transition-colors group-hover:text-[#22d3ee]">
                <Link href={`/blog/${slug}`}>{title}</Link>
            </h2>

            {tags?.length ? (
                <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <Tag tag={tag} key={tag} />
                    ))}
                </div>
            ) : null}

            {description ? (
                <p className="max-w-2xl text-sm leading-relaxed text-[#9a9aa4]">
                    {description}
                </p>
            ) : null}

            <div className="mt-1 flex items-center justify-between">
                <dl>
                    <dt className="sr-only">Published On</dt>
                    <dd className="font-mono flex items-center gap-1.5 text-xs text-[#9a9aa4]">
                        <IconCalendar size={14} stroke={1.6} />
                        <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                </dl>
                <Link
                    href={`/blog/${slug}`}
                    className="inline-flex items-center gap-1.5 rounded-sm text-xs font-medium uppercase tracking-[0.12em] text-[#e7e7ea] transition-colors hover:text-[#22d3ee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0b]"
                >
                    Read more <IconArrowRight size={15} stroke={1.8} />
                </Link>
            </div>
        </article>
    );
}
