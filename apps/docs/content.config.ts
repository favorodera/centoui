import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      source: 'index.md',
      type: 'page',
    }),
  },
})
