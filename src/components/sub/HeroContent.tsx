"use client";

import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { FlipWords } from "../ui/flip-words";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="z-20 flex  h-fit flex-col items-center justify-between gap-20 lg:flex-row"
        >
            <div className="m-auto flex  flex-col justify-center gap-5 text-start">

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="mt-6 flex h-fit w-auto max-w-[600px] flex-col gap-6 font-bold text-6xl "
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
            </div>
            <Image
                src="/main.png"
                alt="profile"
                height={700}
                width={700}
                className="h-[36rem] w-[36rem] rounded-full border-2 bg-slate-300 object-contain p-8 shadow-inner shadow-slate-600 filter dark:bg-transparent"
            />
            {/* <motion.div
                variants={slideInFromRight(0.8)}
                className="flex items-center justify-evenly rounded-full  bg-slate-300 p-8 shadow-inner shadow-slate-600 dark:bg-transparent"
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={500}
                    width={500}
                    className="object-contain"
                />
            </motion.div> */}
        </motion.div>
    );
};

export default HeroContent;
