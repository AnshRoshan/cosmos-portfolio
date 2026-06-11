import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({
    projectId: projectId || "placeholder",
    dataset,
});

/** Build a CDN URL for a Sanity image (supports .width()/.height()/.url()). */
export function urlForImage(source: SanityImageSource) {
    return builder.image(source).auto("format").fit("max");
}
