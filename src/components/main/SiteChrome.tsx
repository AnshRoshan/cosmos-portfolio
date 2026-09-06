"use client";

import BackgroundVideo from "@/components/main/BackgroundVideo";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import ScrollProgress from "@/components/sub/ScrollProgress";

/**
 * Renders the site shell (background, scroll bar, nav, footer) around page
 * content.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
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
