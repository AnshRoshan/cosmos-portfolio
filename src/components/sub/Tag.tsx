import { slug } from "github-slugger";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TagProps {
    tag: string;
    current?: boolean;
    count?: number;
    className?: string;
    /** legacy alias for className, kept so existing callers don't break */
    tailwind?: string;
}

/**
 * Mint mono tag chip (Cool Ink + Mint). Links to the tag archive. `current`
 * highlights the active tag.
 */
export function Tag({ tag, current, count, className, tailwind }: TagProps) {
    return (
        <Link
            href={`/tags/${slug(tag)}`}
            className={cn(
                "font-mono inline-flex items-center rounded-md border px-2.5 py-1 text-xs no-underline transition-colors",
                current
                    ? "border-[#2dd4bf]/40 bg-[#2dd4bf]/10 text-[#2dd4bf]"
                    : "border-white/10 text-[#9a9aa4] hover:border-[#2dd4bf]/40 hover:text-[#2dd4bf]",
                className,
                tailwind,
            )}
        >
            {tag}
            {count ? ` (${count})` : null}
        </Link>
    );
}
