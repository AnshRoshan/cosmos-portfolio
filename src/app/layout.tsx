import BackgroundVideo from "@/components/main/BackgroundVideo";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import { ThemeProvider } from "@/components/main/theme-provider";
import { siteConfig } from "@/config/site";
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-display",
    display: "swap",
});

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
        <html lang="en" className="dark" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${spaceGrotesk.variable} flex min-h-[100dvh] w-full flex-col overflow-x-clip bg-[#040115] text-white antialiased selection:bg-[#F5B544] selection:text-[#040115]`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                    forcedTheme="dark"
                >
                    <BackgroundVideo />
                    <Navbar />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
