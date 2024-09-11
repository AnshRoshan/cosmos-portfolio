"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/moving-border";
import { siteConfig } from "@/config/site";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

function about() {
    // <div>
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="z-[20] mx-auto mt-24 flex max-w-screen-2xl items-center justify-between gap-24 px-20 text-black lg:flex-row  dark:text-white bg-black/40 dark:bg-white/10 p-20 rounded-2xl"
        >
            <div className="m-auto flex h-full max-w-7xl flex-col justify-center gap-5 text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="after:-z-10 relative mt-8 inline-flex h-fit w-fit cursor-pointer rounded-full border border-blue-400/60 bg-blue-400/10 px-4 py-2 text-blue-700 text-xl opacity-0 outline-none ring-cyan-700 transition-colors after:absolute after:inset-0 after:animate-pulse after:rounded-full after:bg-cyan-500 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-cyan-800/60 hover:text-cyan-800 after:hover:bg-opacity-15 focus:ring-2 "
                >
                    <SparklesIcon className="mr-[10px] h-8 w-8 text-[#b49bff]" />
                    <h1 className=" flex ">
                        <span> - Fullstack Developer </span>
                        <span> - DevOps Engineer </span>
                        <span> - Electrical Engineer</span>
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="mt-6 flex h-auto w-auto max-w-[600px] flex-col gap-6 font-bold text-6xl"
                >
                    <span>
                        Hi I&apos;m{" "}
                        <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                            Ansh Roshan
                        </span>
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="my-5 max-w-5xl text-lg"
                >
                    I&apos;m a Full Stack Software Engineer with experience in
                    Website, Mobile, and Software development and dedicated
                    DevOps Engineer, skilled in software development tools,
                    Linux, git, Kubernetes, AWS, and a seasoned Web Developer in
                    MERN Stack, Next.js.Check out my Resume below!
                </motion.p>
                <motion.a
                    href="https://drive.google.com/file/d/1TF-POXkJmb7m69R3nLEwOrxdDkywTBfc/view"
                    target="_blank"
                    variants={slideInFromLeft(1)}
                    className="after:-z-10 relative mt-8 inline-flex h-fit w-fit cursor-pointer rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 opacity-0 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2"
                    rel="noreferrer"
                >
                    Download Resume
                </motion.a>
            </div>

            <Avatar className="h-96 w-96">
                <AvatarImage src="/main.png" alt={siteConfig.author} />
                <AvatarFallback className="text-7xl">AR</AvatarFallback>
            </Avatar>

        </motion.div>
    );
}
export default about;
