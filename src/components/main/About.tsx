"use client";

import FadeIn from "@/components/sub/FadeIn";
import AnimatedText from "@/components/sub/AnimatedText";
import PillButton from "@/components/sub/PillButton";

function About() {
    return (
        <section className="relative mx-auto w-full max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
            <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
                <FadeIn>
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                        About
                    </h2>
                </FadeIn>

                <div className="mt-10 md:mt-14">
                    <AnimatedText
                        text="I'm Ansh, a full-stack developer who turns rough ideas into shipped products. I care about clean interfaces, fast load times, and infrastructure that doesn't page me at 3am. Lately I work across React, Next.js, and the DevOps stack that keeps it all running."
                        className="font-display text-2xl sm:text-3xl lg:text-[2.6rem] leading-[1.35] tracking-tight text-[#f4f4f7] max-w-[20ch] sm:max-w-[24ch] md:max-w-[34ch]"
                    />
                </div>

                <FadeIn delay={0.2}>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm uppercase tracking-[0.18em] text-[#9a9aac] mt-12">
                        <span>Full-stack</span>
                        <span className="hidden sm:block h-4 w-px bg-white/15 self-center" />
                        <span>DevOps</span>
                        <span className="hidden sm:block h-4 w-px bg-white/15 self-center" />
                        <span>Product-minded</span>
                    </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <div className="mt-12">
                        <PillButton href="/about" variant="ghost">
                            More about me
                        </PillButton>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

export default About;
