"use client";

import { usePathname } from "next/navigation";
import BackgroundVideo from "@/components/main/BackgroundVideo";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import ScrollProgress from "@/components/sub/ScrollProgress";

/**
 * Renders the site shell (background, scroll bar, nav, footer) around page
 * content — except under /studio, where the embedded Sanity Studio takes over
 * the full viewport and the marketing chrome would only get in the way.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    if (pathname?.startsWith("/studio")) {
        return <>{children}</>;
    }

    return (
        <>
            <BackgroundVideo />
            <ScrollProgress />
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </>
    );
}
