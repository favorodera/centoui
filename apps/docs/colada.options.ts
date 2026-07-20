import type { PiniaColadaOptions } from '@pinia/colada'

export default {
  queryOptions: {
    gcTime: Infinity,
    staleTime: Infinity,
  },
} satisfies PiniaColadaOptions
