import Link from "next/link";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
    IconMail,
} from "@tabler/icons-react";
import { siteConfig } from "@/config/site";

const Footer = () => {
    return (
        <footer className="relative z-40 mt-24 border-t border-white/10 bg-[#0a0a0b]/60 backdrop-blur-xl">
            <div className="mx-auto w-full max-w-[1400px] px-6 py-12 md:px-10">

                {/* Top row */}
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

                    {/* Left - wordmark + tagline + mail */}
                    <div className="flex flex-col gap-3">
                        <Link href="/" aria-label="Home">
                            <span className="font-display text-lg font-semibold text-[#e7e7ea]">
                                Ansh<span className="text-[#2dd4bf]">.</span>
                            </span>
                        </Link>

                        <p className="font-mono text-xs text-[#9a9aa4]">
                            Gen AI developer. Building AI products, end to end.
                        </p>

                        <a
                            href="mailto:anshroshan813210@gmail.com"
                            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#9a9aa4] transition-colors duration-200 hover:text-[#2dd4bf]"
                            aria-label="Send email to Ansh Roshan"
                        >
                            <IconMail size={16} stroke={1.6} />
                            anshroshan813210@gmail.com
                        </a>
                    </div>

                    {/* Right - nav links + social icons */}
                    <div className="flex flex-col gap-6">

                        {/* Nav links */}
                        <nav aria-label="Footer navigation">
                            <ul className="flex flex-wrap gap-6">
                                {[
                                    { label: "About", href: "/about" },
                                    { label: "Projects", href: "/projects" },
                                    { label: "Blog", href: "/blog" },
                                    { label: "Contact", href: "/contact" },
                                ].map(({ label, href }) => (
                                    <li key={href}>
                                        <Link
                                            href={href}
                                            className="font-mono text-xs uppercase tracking-[0.16em] text-[#9a9aa4] transition-colors duration-200 hover:text-[#5eead4]"
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Social icons */}
                        <div className="flex items-center gap-4">
                            <a
                                href={siteConfig.links.github}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="text-[#9a9aa4] transition-colors duration-200 hover:text-[#2dd4bf]"
                            >
                                <IconBrandGithub size={20} stroke={1.6} />
                            </a>
                            <a
                                href={siteConfig.links.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="text-[#9a9aa4] transition-colors duration-200 hover:text-[#2dd4bf]"
                            >
                                <IconBrandLinkedin size={20} stroke={1.6} />
                            </a>
                            <a
                                href={siteConfig.links.twitter}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="X (Twitter)"
                                className="text-[#9a9aa4] transition-colors duration-200 hover:text-[#2dd4bf]"
                            >
                                <IconBrandX size={20} stroke={1.6} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="mt-10 border-t border-white/10 pt-6">
                    <p className="font-mono text-xs text-[#9a9aa4]">
                        &copy; 2026 Ansh Roshan
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
