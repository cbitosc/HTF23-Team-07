import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";
const apiKey = process.env.SANITY_API_KEY;

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: true,
	token: apiKey,
});

export const publicClient = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false,
});
