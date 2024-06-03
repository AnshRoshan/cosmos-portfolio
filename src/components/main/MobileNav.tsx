"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export function MobileNav() {
    const [open, setOpen] = useState(false);
    const Items = [
        {
            name: "Instagram",
            link: siteConfig.links.instagram,
        },
        {
            name: "Facebook",
            link: siteConfig.links.facebook,
        },
        {
            name: "Discord",
            link: siteConfig.links.discord,
        },
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
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" className="w-10 px-0 sm:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Theme</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <MobileLink
                    onOpenChange={setOpen}
                    href="/"
                    className="flex items-center"
                >
                    <span className="font-bold">{siteConfig.name}</span>
                </MobileLink>
                <div className="mt-3 flex flex-col gap-3">
                    {Items.map((item) => (
                        <Link
                            href={item.link}
                            target={item.link.startsWith("/") ? "" : "_blank"}
                            rel="norefferrer"
                            key={item.name}
                        >
                            <div
                                className={cn(
                                    buttonVariants({ variant: "outline" }),
                                    "w-48 p-1 px-4 text-left"
                                )}
                            >
                                {item.name}
                                <span className="sr-only">{item.name}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
}

interface MobileLinkProps extends LinkProps {
    children: React.ReactNode;
    onOpenChange?: (open: boolean) => void;
    className?: string;
}

function MobileLink({
    href,
    onOpenChange,
    children,
    className,
    ...props
}: MobileLinkProps) {
    const router = useRouter();
    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString());
                onOpenChange?.(false);
            }}
            className={className}
            {...props}
        >
            {children}
        </Link>
    );
}
