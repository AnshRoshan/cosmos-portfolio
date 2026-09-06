import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = siteConfig.url.replace(/\/$/, "");

    return ["", "/about", "/projects", "/contact"].map((path) => ({
        url: `${base}${path}`,
        lastModified: new Date(),
    }));
}
