"use client";

import { FaLocationArrow } from "react-icons/fa6";

import Link from "next/link";
import { PinContainer } from "../ui/3d-pin";

const projects = [
    {
        id: 1,
        title: "Modern Next.js Portfolio",
        des: "A modern portfolio built with Next.js, Tailwind CSS , Framer Motion",
        img: "/p1.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
        link: "https://anshroshan.vercel.app/",
        github: "https://github.com/AnshRoshan/cosmos-portfolio",
    },
    {
        id: 2,
        title: "Collection Of React Projects",
        des: "A collection of React projects built with MERN stack. with Tailwind CSS viejs and more.",
        img: "/p2.svg",
        iconLists: [
            "/next.svg",
            "/tail.svg",
            "/ts.svg",
            "/stream.svg",
            "/c.svg",
        ],
        link: "https://anshroshan.github.io/React-Projects/",
        github: "https://github.com/AnshRoshan/React-Projects",
    },
    {
        id: 3,
        title: "Social Media App",
        des: "A social media app built with Next.js, Tailwind CSS , MongoDB .",
        img: "/p3.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "https://anshroshan.vercel.app/",
        github: "https://github.com/AnshRoshan/social-app",
    },
    {
        id: 4,
        title: "Ecommerce Website",
        des: "A Ecommerce website built with Next.js, Tailwind CSS , MongoDB , Stripe Payment",
        img: "/p4.svg",
        iconLists: [
            "/next.svg",
            "/tail.svg",
            "/ts.svg",
            "/three.svg",
            "/gsap.svg",
        ],
        link: "https://anshroshan.vercel.app/",
        github: "https://github.com/AnshRoshan/eshop",
    },
];

const RecentProjects = () => {
    return (
        <div className="py-20">
            <div className="mt-10 flex flex-wrap items-center justify-center gap-16 p-4">
                {projects.map((item) => (
                    <div
                        className="flex h-[25rem] w-[80vw] items-center justify-center sm:w-96 lg:min-h-[32.5rem]"
                        key={item.id}
                    >
                        <PinContainer title={item.title} href={item.github}>
                            <div className="relative mb-10 flex h-[20vh] w-[80vw] items-center justify-center overflow-hidden sm:w-96 lg:h-[30vh]">
                                <div
                                    className="relative h-full w-full overflow-hidden lg:rounded-3xl"
                                    style={{ backgroundColor: "#13162D" }}
                                >
                                    <img src="/bg.png" alt="bgimg" />
                                </div>
                                <img
                                    src={item.img}
                                    alt="cover"
                                    className="absolute bottom-0 z-10"
                                />
                            </div>

                            <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                                {item.title}
                            </h1>

                            <p
                                className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal"
                                style={{
                                    color: "#BEC1DD",
                                    margin: "1vh 0",
                                }}
                            >
                                {item.des}
                            </p>

                            <div className="mb-3 mt-7 flex items-center justify-between">
                                <div className="flex items-center">
                                    {item.iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[.2] bg-black lg:h-10 lg:w-10"
                                            style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                        >
                                            <img
                                                src={icon}
                                                alt="icon5"
                                                className="p-2"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={item.github}
                                    className="flex items-center justify-center"
                                >
                                    <p className="text-purple flex text-sm md:text-xs lg:text-xl">
                                        Github
                                    </p>
                                    <FaLocationArrow
                                        className="ms-3"
                                        color="#CBACF9"
                                    />
                                </Link>

                                <Link
                                    href={item.link}
                                    className="flex items-center justify-center"
                                >
                                    <p className="text-purple flex text-sm md:text-xs lg:text-xl">
                                        Live
                                    </p>
                                    <FaLocationArrow
                                        className="ms-3"
                                        color="#CBACF9"
                                    />
                                </Link>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;