"use client";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React from "react";

const SkillText = () => {
    return (
        <div className="flex h-auto w-full flex-col items-center justify-center ">
            <motion.div
                variants={slideInFromTop}
                className="after:-z-10 relative mt-8 inline-flex h-fit w-fit cursor-pointer rounded-full border border-blue-100/20 bg-blue-200/10 p-2 text-blue-200 text-xl opacity-[0.9] outline-none ring-cyan-300 transition-colors after:absolute after:inset-0 after:animate-pulse after:rounded-full after:bg-cyan-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-cyan-200/40 hover:text-cyan-300 after:hover:bg-opacity-15 focus:ring-2border"
            >
                <SparklesIcon className="mr-2 h-5 w-5 text-[#b49bff]" />
                <h1 className="Welcome-text text-lg">Skills And Tools </h1>
            </motion.div>
            <motion.div
                variants={slideInFromLeft(0.5)}
                className="mt-[10px] mb-[15px] text-center font-medium text-[30px] text-white"
            >
                Making apps with modern technologies
            </motion.div>
            <motion.div
                variants={slideInFromRight(0.5)}
                className="cursive mt-2 mb-10 text-center text-2xl text-gray-200 tracking-wider underline underline-offset-4"
            >
                The best tool for a coder is their brain. Everything else is
                just an extension of that.
            </motion.div>
            {/* <div className="flex h-auto w-full "></div> */}
        </div>
    );
};

export default SkillText;
