import {
    Backend_skill,
    DevOps,
    Frontend_skill,
    Other_skill,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
    return (
        <section
            id="skills"
            className="relative flex h-full  flex-col items-center justify-center gap-3 overflow-hidden bg-black/20 dark:bg-white/10 w-fit mx-auto p-20 rounded-3xl "
        >
            <SkillText />
            <div className=" bg-gradient-radial from-white/5 to-transparent p-4 ">
                <div className="mt-4 flex flex-row flex-wrap items-center justify-around gap-5">
                    {DevOps.map((image, index) => (
                        <SkillDataProvider
                            key={`${index}-${image}`}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>
                <div className="mt-4 flex flex-row flex-wrap items-center justify-around gap-5">
                    {Frontend_skill.map((image, index) => (
                        <SkillDataProvider
                            key={`${index}-${image}`}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>
                <div className="mt-4 flex flex-row flex-wrap items-center justify-around gap-5">
                    {Backend_skill.map((image, index) => (
                        <SkillDataProvider
                            key={`${index}-${image}`}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>
                <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-5">
                    {Other_skill.map((image, index) => (
                        <SkillDataProvider
                            key={`${index}-${image}`}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>
            </div>
            <div className="absolute h-full w-full">
                <div className="absolute z-[-10] flex h-full w-full items-center justify-center bg-cover opacity-60">
                    {/* <video
                        className="hidden h-auto w-full dark:block"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    /> */}
                </div>
            </div>
        </section>
    );
};

export default Skills;
