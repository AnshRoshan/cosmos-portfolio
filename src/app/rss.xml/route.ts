import { siteConfig } from "@/config/site";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import type { SanityPost } from "@/sanity/lib/types";

export const revalidate = 3600;

function escapeXml(unsafe: string): string {
    return unsafe.replace(/[<>&'"]/g, (c) => {
        switch (c) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case "'":
                return "&apos;";
            default:
                return "&quot;";
        }
    });
}

export async function GET() {
    const base = siteConfig.url.replace(/\/$/, "");
    const posts = await sanityFetch<SanityPost[]>(
        { query: postsQuery, tags: ["post"] },
        [],
    );

    const items = posts
        .map((post) => {
            const url = `${base}/blog/${post.slug}`;
            const pubDate = post.date
                ? new Date(post.date).toUTCString()
                : new Date().toUTCString();
            return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>${
          post.description
              ? `\n      <description>${escapeXml(post.description)}</description>`
              : ""
      }
    </item>`;
        })
        .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.name)}: Writing</title>
    <link>${base}/blog</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en</language>
    <atom:link href="${base}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
        },
    });
}
