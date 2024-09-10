import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
interface Props {
    src: string;
    title: string;
    description?: string;
    link: string;
    github: string;
    tailwind?: string;
}

const ProjectCard = ({
    src,
    title,
    description,
    link,
    github,
    tailwind,
}: Props) => {
    return (
        <div
            className={cn(
                "z-30 mx-auto flex w-full cursor-pointer flex-wrap items-center justify-center overflow-hidden rounded-lg border-8 border-white/20 from-sky-400/20 to-emerald-500/20 shadow-inner backdrop-blur-lg hover:bg-gradient-to-r",
                tailwind
            )}
        >
            <div className="h-1/2 w-full p-4">
                <h1 className="font-semibold text-white text-xl underline">
                    {title}
                </h1>
                <p className="mt-2 font-bold text-md text-neutral-500">
                    {description}
                </p>
                <Link
                    href={github}
                    target="_blank"
                    className={cn(buttonVariants({ variant: "link" }), "py-0")}
                >
                    Code →
                </Link>
                <Link
                    href={link}
                    target="_blank"
                    className={cn(buttonVariants({ variant: "link" }), "py-0")}
                >
                    Website →
                </Link>
            </div>
            <Image
                src={src}
                alt={title}
                width={200}
                height={300}
                className="h-1/2 w-full rounded-3xl p-1 px-4"
            />
        </div>
    );
};

export default ProjectCard;
