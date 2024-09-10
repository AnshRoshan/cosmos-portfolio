import { cn } from "@/lib/utils";
import { slug } from "github-slugger";
import Link from "next/link";
import { badgeVariants } from "../ui/badge";
interface TagProps {
    tag: string;
    current?: boolean;
    count?: number;
    tailwind?: string;
}
export function Tag({ tag, current, count, tailwind }: TagProps) {
    return (
        <Link
            className={cn(
                badgeVariants({
                    variant: current ? "default" : "secondary",
                    className: "rounded-md no-underline",
                }),
                tailwind
            )}
            href={`/tags/${slug(tag)}`}
        >
            {tag}
            {count ? `(${count})` : null}
        </Link>
    );
}
