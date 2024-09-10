import { cn, formatDate } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
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
        <article className="flex flex-col gap-2 border-border border-b py-3">
            <div>
                <h2 className="font-bold text-2xl">
                    <Link href={`/${slug}`}>{title}</Link>
                </h2>
            </div>
            <div className="flex gap-2">
                {tags?.map((tag) => (
                    <Tag tag={tag} key={tag} />
                ))}
            </div>
            <div className="max-w-none text-muted-foreground">
                {description}
            </div>
            <div className="flex items-center justify-between">
                <dl>
                    <dt className="sr-only">Published On</dt>
                    <dd className="flex items-center gap-1 font-medium text-sm sm:text-base">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                </dl>
                <Link
                    href={`/${slug}`}
                    className={cn(buttonVariants({ variant: "link" }), "py-0")}
                >
                    Read more →
                </Link>
            </div>
        </article>
    );
}
