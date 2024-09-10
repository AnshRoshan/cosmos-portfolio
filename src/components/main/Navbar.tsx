"use client";
import { SiteConfig, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ModeToggle } from "../sub/Mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button, buttonVariants } from "../ui/button";
import { MobileNav } from "./MobileNav";

const Navbar = () => {
    const pathname = usePathname();
    const Socials = [
        {
            name: "Instagram",
            src: "/instagram.svg",
            link: siteConfig.links.instagram,
        },
        {
            name: "Facebook",
            src: "/facebook.svg",
            link: siteConfig.links.facebook,
        },
        {
            name: "Discord",
            src: "/discord.svg",
            link: siteConfig.links.discord,
        },
    ];

    const navitems = [
        {
            name: "About",
            link: "/about",
        },
        {
            name: "Projects",
            link: "/projects",
        },
        {
            name: "Blogs",
            link: "/blog",
        },
        {
            name: "Contact",
            link: "/contact",
        },
    ];
    return (
        <div className="top-0 z-50 h-[65px] w-full bg-[#03001417] px-10 py-2 shadow-[#2A0E61]/50 shadow-lg backdrop-blur-md">
            <div className="m-auto flex h-full w-full flex-row items-center justify-between px-[10px]">
                <Link href="/" className="h-auto flex-row items-center md:flex">
                    <Avatar className="h-12 w-12 ">
                        <AvatarImage src="/glaxy.png" alt="logo" />
                        <AvatarFallback className="md:block">AR</AvatarFallback>
                    </Avatar>
                </Link>
                <div className="hidden h-full w-full flex-row items-center justify-between md:mr-20 md:w-1/2 lg:flex">
                    <div className="mr-[15px] flex h-auto w-full items-center justify-between rounded-full border border-[#7042f861] px-[20px] py-[10px] text-gray-200">
                        {navitems.map((item) => (
                            <Link
                                href={item.link}
                                key={item.name}
                                className={cn(
                                    "font-medium transition-colors hover:text-primary",
                                    pathname === item.link
                                        ? "text-primary"
                                        : "text-primary/30"
                                )}
                            >
                                <p>{item.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex w-fit gap-5 md:flex">
                    {Socials.map((social) => (
                        <Link
                            href={social.link}
                            target="_blank"
                            rel="norefferrer"
                            key={social.name}
                        >
                            <div
                                className={cn(
                                    buttonVariants({ variant: "ghost" }),
                                    "w-10 px-0"
                                )}
                            >
                                <Image
                                    src={social.src}
                                    alt={social.name}
                                    key={social.name}
                                    width={24}
                                    height={24}
                                />
                                <span className="sr-only">{social.name}</span>
                            </div>
                        </Link>
                    ))}
                    <ModeToggle />
                    <MobileNav />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
