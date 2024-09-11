'use client'

import Link from "next/link";
import { Button } from "../ui/moving-border";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavItems = () => {
        const pathname = usePathname();
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
            <div className="mr-4 flex h-auto w-full items-center justify-between rounded-full border border-[#7042f861] px-[20px] py-[10px] text-gray-200">

                {navitems.map((item) => (
                    <Link
                    href={item.link}
                    key={item.name}
                    className={cn(
                        "font-bold transition-colors hover:text-primary hover:font-extrabold",
                        pathname === item.link
                        ? "text-primary underline underline-offset-4"
                        : "text-primary/70"
                    )}
                    >
                        <p>{item.name}</p>
                    </Link>
                ))}
            </div>

);
}

export default NavItems;