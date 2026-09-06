"use client";

import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandX,
    IconMenu2,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

const navItems = [
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Blogs", link: "https://blog.anshroshan.com" },
    { name: "Contact", link: "/contact" },
];

const socials = [
    { name: "GitHub", link: siteConfig.links.github, icon: IconBrandGithub },
    { name: "LinkedIn", link: siteConfig.links.linkedin, icon: IconBrandLinkedin },
    { name: "X (Twitter)", link: siteConfig.links.twitter, icon: IconBrandX },
    { name: "Instagram", link: siteConfig.links.instagram, icon: IconBrandInstagram },
];

export function MobileNav() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button
                    type="button"
                    aria-label="Open menu"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#e7e7ea] backdrop-blur-xl transition-colors hover:border-white/25 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0b]"
                >
                    <IconMenu2 size={20} stroke={1.6} />
                </button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="w-[300px] border-white/10 bg-[#0a0a0b]/95 backdrop-blur-xl"
            >
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <div className="flex h-full flex-col">
                    <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className="font-display text-lg font-semibold tracking-tight text-[#e7e7ea]"
                    >
                        Ansh Roshan
                    </Link>

                    <nav className="mt-10 flex flex-col gap-1">
                        {navItems.map((item) => {
                            const active =
                                pathname === item.link ||
                                pathname?.startsWith(`${item.link}/`);
                            return (
                                <Link
                                    key={item.name}
                                    href={item.link}
                                    onClick={() => setOpen(false)}
                                    target={item.link.startsWith("http") ? "_blank" : undefined}
                                    rel={item.link.startsWith("http") ? "noreferrer" : undefined}
                                    className={
                                        "font-display rounded-xl px-4 py-3 text-2xl font-medium tracking-tight transition-colors " +
                                        (active
                                            ? "text-[#22d3ee]"
                                            : "text-[#9a9aa4] hover:bg-white/[0.04] hover:text-[#e7e7ea]")
                                    }
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="mt-8 inline-flex items-center justify-center rounded-full bg-[#22d3ee] px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-[#0a0a0b] transition-colors hover:bg-[#67e8f9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0b]"
                    >
                        Get in touch
                    </Link>

                    <div className="mt-auto flex items-center gap-2 pt-10">
                        {socials.map(({ name, link, icon: Icon }) => (
                            <a
                                key={name}
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={name}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#9a9aa4] transition-colors hover:border-[#22d3ee]/40 hover:text-[#22d3ee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0b]"
                            >
                                <Icon size={18} stroke={1.5} />
                            </a>
                        ))}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
