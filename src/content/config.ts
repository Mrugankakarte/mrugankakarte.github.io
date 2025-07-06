// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  // Type-check your frontmatter using a schema
  schema: ({ image }) => z.object({ // Use the `image` helper from the callback
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Update the image object to use Astro's image() schema helper
    image: z.object({
        src: image(), // This will process the image
        alt: z.string(),
    }).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};