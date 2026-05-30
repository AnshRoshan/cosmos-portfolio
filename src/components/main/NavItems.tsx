'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "About",    link: "/about"    },
    { name: "Projects", link: "/projects" },
    { name: "Blogs",    link: "/blog"     },
    { name: "Contact",  link: "/contact"  },
];

const NavItems = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-8">
            {navItems.map((item) => {
                const active =
                    pathname === item.link || pathname?.startsWith(`${item.link}/`);
                return (
                    <Link
                        key={item.name}
                        href={item.link}
                        className={
                            "text-sm font-medium uppercase tracking-[0.12em] transition-colors " +
                            (active
                                ? "text-[#2dd4bf]"
                                : "text-[#9a9aa4] hover:text-[#e7e7ea]")
                        }
                    >
                        {item.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default NavItems;
