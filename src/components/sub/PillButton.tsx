import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Single pill-button system for the whole page. One accent (amber), one shape
 * (full pill). `primary` = solid amber on ink (high contrast); `ghost` =
 * hairline outline on the dark background. Tactile press on :active.
 */
export default function PillButton({
    href,
    children,
    variant = "primary",
    external = false,
    className,
}: {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "ghost";
    external?: boolean;
    className?: string;
}) {
    const base =
        "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium uppercase tracking-[0.12em] whitespace-nowrap transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B544] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040115]";
    const variants = {
        primary:
            "bg-[#F5B544] text-[#040115] hover:bg-[#ffc560] shadow-[0_8px_30px_rgba(245,181,68,0.25)]",
        ghost: "border border-white/15 text-[#f4f4f7] hover:bg-white/[0.06] hover:border-white/30",
    };
    const cls = cn(base, variants[variant], className);

    if (external) {
        return (
            <a href={href} target="_blank" rel="noreferrer" className={cls}>
                {children}
            </a>
        );
    }
    return (
        <Link href={href} className={cls}>
            {children}
        </Link>
    );
}
