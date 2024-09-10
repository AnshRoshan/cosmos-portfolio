import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import StarsCanvas from "@/components/main/StarBackground";
import { ThemeProvider } from "@/components/main/theme-provider";
import { siteConfig } from "@/config/site";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
};

// viewport is other theme in mobile devices
export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} flex h-dvh w-dvw flex-col overflow-x-hidden overflow-y-scroll text-black dark:bg-[#040115] dark:text-white `}
            >
                <ThemeProvider attribute="class" defaultTheme="system">
                    <StarsCanvas />
                    <Navbar />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
