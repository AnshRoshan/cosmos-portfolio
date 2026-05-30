import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Single pill-button system for the whole site. One accent (mint #2dd4bf), one
 * shape (full pill). `primary` = solid mint on ink (high contrast); `ghost` =
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
        "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium uppercase tracking-[0.12em] whitespace-nowrap transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2dd4bf] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0b]";
    const variants = {
        primary:
            "bg-[#2dd4bf] text-[#0a0a0b] hover:bg-[#5eead4] shadow-[0_8px_30px_rgba(45,212,191,0.25)]",
        ghost: "border border-white/15 text-[#e7e7ea] hover:bg-white/[0.06] hover:border-white/30",
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
