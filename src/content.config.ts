import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articulos = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/articulos",
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    car: z.string(),
    category: z.string(),
    heroImage: z.string().url(),
    heroAlt: z.string(),
    years: z.string(),
    verdict: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articulos };
