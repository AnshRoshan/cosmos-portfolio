import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
    title: "Studio",
    // Keep the CMS dashboard out of search engines.
    robots: { index: false, follow: false },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function StudioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
