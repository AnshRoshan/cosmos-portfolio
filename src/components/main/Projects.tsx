import Link from "next/link";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const Projects_db = [
    {
        title: "Modern Next.js Portfolio",
        src: "/anshportfolio.webp",
        description:
            "A modern portfolio built with Next.js, Tailwind CSS , Framer Motion",
        link: "https://anshroshan.vercel.app/",
        github: "https://github.com/AnshRoshan/cosmos-portfolio",
        tailwind: "h-72 ",
    },
    {
        title: "Collection Of React Projects",
        src: "/project-react.jpeg",
        description:
            "A collection of React projects built with MERN stack. with Tailwind CSS viejs and more.",
        link: "https://anshroshan.github.io/React-Projects/",
        github: "https://github.com/AnshRoshan/React-Projects",
        tailwind: "col-span-2 h-72 ",
    },
    {
        title: "Social Media App",
        src: "/Instagram.jpg",
        description:
            "A social media app built with Next.js, Tailwind CSS , MongoDB .",
        link: "https://anshmeta.netlify.app/",
        github: "https://github.com/AnshRoshan/social-app",
        tailwind: "col-span-2 h-80",
    },
    {
        title: "Ecommerce Website",
        src: "/ecommerce.webp",
        description:
            "A Ecommerce website built with Next.js, Tailwind CSS , MongoDB , Stripe Payment",
        link: "https://anshstore.vercel.app/",
        github: "https://github.com/AnshRoshan/eshop",
        tailwind: "h-80",
    },
];

const Projects = () => {
    return (
        <div className="mb-20 flex flex-col items-center justify-center bg-black/20 dark:bg-white/10 w-fit mx-auto p-20 rounded-3xl">
            <div
                className="pb-16 underline underline-offset-4  bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text font-extrabold text-7xl text-transparent "
            >
                Projects
            </div>
            {/* <div className="grid h-full w-4/5 grid-cols-1 gap-y-4 lg:w-2/3 lg:grid-cols-3 lg:gap-4 ">
                {Projects_db.map((project, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            src={project.src}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            github={project.github}
                            tailwind={project.tailwind}
                        />
                    );
                })}
            </div> */}
            <BentoGrid>
                {Projects_db.map((project, index) => {
                    return (
                        <BentoGridItem
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            icon={
                                <img
                                    src={project.src}
                                    alt={project.title}
                                    className="h-40 w-full rounded-xl object-cover"
                                />
                            }
                            className={project.tailwind}
                            link={project.link}
                            github={project.github}
                        />
                    );
                })}
            </BentoGrid>
        </div>
    );
};

export default Projects;
