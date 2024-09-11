"use client";

import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function About() {
    return (
        // <div>
        <motion.div
            initial="hidden"
            animate="visible"
            className="z-[20] mt-24 flex w-full flex-col items-center justify-between gap-24 px-20 lg:flex-row dark:bg-white/40"
        >
            <div className="m-auto flex h-full w-full flex-col justify-center gap-5 text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box border border-[#7042f88b] p-2 opacity-[0.9]"
                >
                    <SparklesIcon className="mr-[10px] h-8 w-8 text-[#b49bff]" />
                    <h1 className="Welcome-text flex flex-col py-2 text-lg tracking-wider md:flex-row">
                        <span> - Fullstack Developer </span>
                        <span> - DevOps Engineer </span>
                        <span> - Electrical Engineer</span>
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="mt-6 flex h-auto w-auto max-w-[600px] flex-col gap-6 font-bold text-6xl text-white"
                >
                    <span>
                        Hi I&apos;m{" "}
                        <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                            Ansh Roshan
                        </span>
                    </span>
                    <span>Wecome To My </span>
                    <span className="bg-gradient-to-r from-orange-500 to-violet-500 bg-clip-text text-transparent">
                        Portfolio Website
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="my-5 max-w-[600px] text-gray-400 text-lg"
                >
                    I&apos;m a Full Stack Software Engineer with experience in
                    Website, Mobile, and Software development and dedicated
                    DevOps Engineer, skilled in software development tools,
                    Linux, git, Kubernetes, AWS, and a seasoned Web Developer in
                    MERN Stack, Next.js.Check out my Resume below!
                </motion.p>
                <motion.a
                    variants={slideInFromLeft(1)}
                    className="button-primary max-w-[200px] cursor-pointer rounded-full py-2 text-center text-white text-xl"
                    href="/Ansh_Roshan_Resume.pdf"
                >
                    Resume
                </motion.a>
            </div>
            <Image
                src="/main.png"
                alt="work icons"
                height={700}
                width={800}
                className="m-8 mx-auto rounded-full border-2 object-contain p-8 shadow-lg shadow-slate-600 filter"
            />

        </motion.div>
    );
}
export default About;
