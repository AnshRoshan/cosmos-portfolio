import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

const WEBHOOK_SECRET =
    process.env.SANITY_REVALIDATE_SECRET || process.env.MY_SECRET_TOKEN;

/**
 * Sanity content webhook. Configure in Manage > API > Webhooks:
 *   URL:    https://<your-site>/api/revalidate?secret=<SANITY_REVALIDATE_SECRET>
 *   Trigger: Create / Update / Delete
 *   Projection: {_type}   (so we know which cache tag to bust)
 *
 * Publishing a post/project busts the matching cache tag and the page shows the
 * new content within seconds — no redeploy.
 */
export async function POST(request: NextRequest) {
    const secret =
        request.nextUrl.searchParams.get("secret") ??
        request.headers.get("x-revalidate-secret");

    if (!WEBHOOK_SECRET || secret !== WEBHOOK_SECRET) {
        return NextResponse.json({ message: "Invalid Token" }, { status: 401 });
    }

    let type: string | undefined;
    try {
        const body = await request.json();
        type = body?._type;
    } catch {
        // No/invalid body — fall through and revalidate everything below.
    }

    const revalidateBlog = () => {
        revalidateTag("post"); // busts every fetch tagged "post" (list + detail)
        revalidatePath("/blog");
        revalidatePath("/blog/[...slug]", "page");
        revalidatePath("/tags");
        revalidatePath("/tags/[tag]", "page");
        revalidatePath("/rss.xml");
        revalidatePath("/sitemap.xml");
    };
    const revalidateProjects = () => {
        revalidateTag("project"); // busts list, featured, AND detail queries
        revalidatePath("/");
        revalidatePath("/projects");
        revalidatePath("/projects/[slug]", "page");
    };

    if (type === "post") {
        revalidateBlog();
    } else if (type === "project") {
        revalidateProjects();
    } else {
        revalidateBlog();
        revalidateProjects();
    }

    return NextResponse.json({ revalidated: true, type: type ?? "all" });
}

/**
 * Legacy manual path revalidation:
 *   GET /api/revalidate?secret=<MY_SECRET_TOKEN>&path=/blog
 */
export async function GET(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get("secret");

    if (secret !== process.env.MY_SECRET_TOKEN) {
        return NextResponse.json({ message: "Invalid Token" }, { status: 401 });
    }

    const path = request.nextUrl.searchParams.get("path") || "/";
    revalidatePath(path);

    return NextResponse.json({ revalidated: true, path });
}
