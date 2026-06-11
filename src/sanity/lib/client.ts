import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
    // "placeholder" keeps createClient from throwing before the project is set
    // up; all reads are gated behind `isSanityConfigured` in fetch.ts anyway.
    projectId: projectId || "placeholder",
    dataset,
    apiVersion,
    useCdn: true,
    perspective: "published",
});
