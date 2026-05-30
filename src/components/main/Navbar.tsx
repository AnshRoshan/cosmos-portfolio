"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
} from "@tabler/icons-react";
import { MobileNav } from "./MobileNav";
import NavItems from "./NavItems";

const socialLinks = [
    {
        name: "GitHub",
        href: siteConfig.links.github,
        icon: IconBrandGithub,
    },
    {
        name: "LinkedIn",
        href: siteConfig.links.linkedin,
        icon: IconBrandLinkedin,
    },
    {
        name: "X (Twitter)",
        href: siteConfig.links.twitter,
        icon: IconBrandX,
    },
];

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0b]/70 backdrop-blur-xl">
            <div className="mx-auto flex h-[68px] w-full max-w-[1400px] items-center justify-between px-6 md:px-10">

                {/* Left: wordmark */}
                <Link href="/" aria-label="Ansh Roshan - home">
                    <span className="font-display text-lg font-semibold tracking-tight text-[#e7e7ea]">
                        Ansh<span className="text-[#2dd4bf]">.</span>
                    </span>
                </Link>

                {/* Center: nav links (desktop only) */}
                <div className="hidden lg:flex">
                    <NavItems />
                </div>

                {/* Right: social icons + mobile menu */}
                <div className="flex items-center gap-1">
                    {socialLinks.map(({ name, href, icon: Icon }) => (
                        <Link
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={name}
                            className="p-2 rounded-full text-[#9a9aa4] hover:text-[#e7e7ea] hover:bg-white/5 transition-colors"
                        >
                            <Icon size={20} strokeWidth={1.5} />
                            <span className="sr-only">{name}</span>
                        </Link>
                    ))}

                    {/* Mobile hamburger (visible below lg) */}
                    <div className="lg:hidden ml-1">
                        <MobileNav />
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Navbar;
