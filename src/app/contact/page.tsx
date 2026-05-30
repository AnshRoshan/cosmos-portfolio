import {
    IconMail,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
    IconArrowUpRight,
} from "@tabler/icons-react";

import Reveal from "@/components/sub/Reveal";
import SplitReveal from "@/components/sub/SplitReveal";
import { siteConfig } from "@/config/site";

export const metadata = {
    title: "Contact - Ansh Roshan",
};

export default function ContactPage() {
    return (
        <section className="relative min-h-[100dvh] bg-transparent">
            <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10 pt-28 md:pt-36 pb-24">
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-8">
                        {/* Eyebrow */}
                        <Reveal y={16} delay={0}>
                            <span className="font-mono inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.22em] text-[#9a9aa4]">
                                <span className="h-px w-8 bg-[#2dd4bf]" />
                                Contact
                            </span>
                        </Reveal>

                        {/* Headline */}
                        <SplitReveal delay={0.05}>
                            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#e7e7ea]">
                                Get in touch
                            </h1>
                        </SplitReveal>

                        {/* Body copy */}
                        <Reveal y={20} delay={0.1}>
                            <p className="text-[#9a9aa4] text-base leading-relaxed max-w-[48ch]">
                                Open to Gen AI and full-stack collaborations, agentic system builds, and freelance work. Email is the fastest way to reach me.
                            </p>
                        </Reveal>

                        {/* Direct email link */}
                        <Reveal y={20} delay={0.15}>
                            <a
                                href="mailto:anshroshan813210@gmail.com"
                                className="group inline-flex items-center gap-3 text-[#9a9aa4] hover:text-[#2dd4bf] transition-colors duration-200"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#131316]/70 backdrop-blur-xl group-hover:border-[#2dd4bf]/40 transition-colors duration-200">
                                    <IconMail size={18} strokeWidth={1.5} />
                                </span>
                                <span className="font-mono text-sm tracking-wide">
                                    anshroshan813210@gmail.com
                                </span>
                                <IconArrowUpRight
                                    size={14}
                                    strokeWidth={1.5}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#2dd4bf]"
                                />
                            </a>
                        </Reveal>

                        {/* Social row */}
                        <Reveal y={20} delay={0.2}>
                            <div className="flex items-center gap-3">
                                <a
                                    href={siteConfig.links.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Ansh Roshan on GitHub"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#131316]/70 backdrop-blur-xl text-[#9a9aa4] hover:text-[#2dd4bf] hover:border-[#2dd4bf]/40 transition-colors duration-200"
                                >
                                    <IconBrandGithub size={18} strokeWidth={1.5} />
                                </a>
                                <a
                                    href={siteConfig.links.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Ansh Roshan on LinkedIn"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#131316]/70 backdrop-blur-xl text-[#9a9aa4] hover:text-[#2dd4bf] hover:border-[#2dd4bf]/40 transition-colors duration-200"
                                >
                                    <IconBrandLinkedin size={18} strokeWidth={1.5} />
                                </a>
                                <a
                                    href={siteConfig.links.twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Ansh Roshan on X"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#131316]/70 backdrop-blur-xl text-[#9a9aa4] hover:text-[#2dd4bf] hover:border-[#2dd4bf]/40 transition-colors duration-200"
                                >
                                    <IconBrandX size={18} strokeWidth={1.5} />
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    {/* RIGHT COLUMN - Form */}
                    <Reveal y={28} delay={0.12}>
                        <div className="rounded-[24px] border border-white/10 bg-[#131316]/70 backdrop-blur-xl p-8 md:p-10">
                            <form
                                method="post"
                                action="https://rake.red/api/anshroshan/me"
                                className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5"
                            >
                                {/* Honeypot - hidden from humans, visible to bots */}
                                <div style={{ display: "none" }}>
                                    <input
                                        type="text"
                                        name="honeypot"
                                        id="honeypot"
                                        autoComplete="off"
                                        tabIndex={-1}
                                    />
                                </div>

                                {/* First name */}
                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="font-mono mb-2 block text-xs uppercase tracking-[0.16em] text-[#9a9aa4]"
                                    >
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="w-full rounded-xl border border-white/10 bg-[#131316]/80 px-4 py-3 text-[#e7e7ea] outline-none transition focus-visible:border-[#2dd4bf]/50 focus-visible:ring-2 focus-visible:ring-[#2dd4bf]"
                                    />
                                </div>

                                {/* Last name */}
                                <div>
                                    <label
                                        htmlFor="last-name"
                                        className="font-mono mb-2 block text-xs uppercase tracking-[0.16em] text-[#9a9aa4]"
                                    >
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="w-full rounded-xl border border-white/10 bg-[#131316]/80 px-4 py-3 text-[#e7e7ea] outline-none transition focus-visible:border-[#2dd4bf]/50 focus-visible:ring-2 focus-visible:ring-[#2dd4bf]"
                                    />
                                </div>

                                {/* Email */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="email"
                                        className="font-mono mb-2 block text-xs uppercase tracking-[0.16em] text-[#9a9aa4]"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="w-full rounded-xl border border-white/10 bg-[#131316]/80 px-4 py-3 text-[#e7e7ea] outline-none transition focus-visible:border-[#2dd4bf]/50 focus-visible:ring-2 focus-visible:ring-[#2dd4bf]"
                                    />
                                </div>

                                {/* Company */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="company"
                                        className="font-mono mb-2 block text-xs uppercase tracking-[0.16em] text-[#9a9aa4]"
                                    >
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        autoComplete="organization"
                                        className="w-full rounded-xl border border-white/10 bg-[#131316]/80 px-4 py-3 text-[#e7e7ea] outline-none transition focus-visible:border-[#2dd4bf]/50 focus-visible:ring-2 focus-visible:ring-[#2dd4bf]"
                                    />
                                </div>

                                {/* Phone number */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="phone-number"
                                        className="font-mono mb-2 block text-xs uppercase tracking-[0.16em] text-[#9a9aa4]"
                                    >
                                        Phone number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        className="w-full rounded-xl border border-white/10 bg-[#131316]/80 px-4 py-3 text-[#e7e7ea] outline-none transition focus-visible:border-[#2dd4bf]/50 focus-visible:ring-2 focus-visible:ring-[#2dd4bf]"
                                    />
                                </div>

                                {/* Message */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="message"
                                        className="font-mono mb-2 block text-xs uppercase tracking-[0.16em] text-[#9a9aa4]"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        className="w-full rounded-xl border border-white/10 bg-[#131316]/80 px-4 py-3 text-[#e7e7ea] outline-none transition focus-visible:border-[#2dd4bf]/50 focus-visible:ring-2 focus-visible:ring-[#2dd4bf] resize-none"
                                    />
                                </div>

                                {/* Submit */}
                                <div className="sm:col-span-2 flex justify-end pt-1">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2dd4bf] px-7 py-3 text-sm font-medium uppercase tracking-[0.12em] text-[#0a0a0b] transition-colors hover:bg-[#5eead4] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2dd4bf] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0b]"
                                    >
                                        Send message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    );
}
