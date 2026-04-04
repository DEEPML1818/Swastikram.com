import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    link: z.string().url(),
    alt: z.string(),
    tech: z.string(),
    status: z.string(),
    category: z.string(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
  }),
});

const mediaCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/media' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publication: z.string(),
    image: z.string(),
    link: z.string().url(),
    order: z.number().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  media: mediaCollection,
};
