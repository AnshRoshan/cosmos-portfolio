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
            {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.link}
                    className={
                        "text-sm font-medium uppercase tracking-[0.12em] transition-colors " +
                        (pathname === item.link
                            ? "text-[#F5B544]"
                            : "text-[#9a9aac] hover:text-[#f4f4f7]")
                    }
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    );
};

export default NavItems;
