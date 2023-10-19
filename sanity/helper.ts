import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const sanityConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    useCdn: false, // Enable CDN caching
    apiVersion: '2023-05-03', // Update to the latest API version
};


const client = createClient(sanityConfig);

const builder = createImageUrlBuilder(sanityConfig);

export const urlFor = (source: any) => builder.image(source);

export default client;