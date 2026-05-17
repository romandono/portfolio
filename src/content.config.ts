import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    url: z.string().optional(),
    startDate: z.string(),
    endDate: z.string().nullable(),
    description: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().optional(),
    repo: z.string().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/skills' }),
  schema: z.object({
    name: z.string(),
    category: z.string(),
    level: z.number().min(0).max(100),
    order: z.number(),
  }),
});

export const collections = { experience, projects, skills };
