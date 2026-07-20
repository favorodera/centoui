import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      schema: z.object({
        description: z.string(),
        title: z.string(),
      }),
      source: 'docs/**/*.md',
      type: 'page',
    }),
    home: defineCollection({
      source: 'index.md',
      type: 'page',
    }),
  },
})
