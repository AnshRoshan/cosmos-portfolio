/**
 * Sanity Studio configuration.
 *
 * The Studio is embedded in the Next.js app at /studio (see
 * src/app/studio/[[...tool]]/page.tsx) — that is the dashboard you log into to
 * write and publish posts/projects without redeploying.
 */
import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
    name: "default",
    title: "Ansh Roshan — Studio",
    basePath: "/studio",
    projectId: projectId || "placeholder",
    dataset,
    schema,
    plugins: [
        structureTool(),
        codeInput(),
        visionTool({ defaultApiVersion: apiVersion }),
    ],
});
