import type { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import type { InferValuesFromSchema, PropsSchema } from '@/utils/types'
import { useStoryStore } from '@/stores/story-store'

/**
 * Clean API for defining and using a story within a component.
 * @template TSchema - The type of the props schema.
 * @param name The name of the story/component.
 * @param schema The schema defining the props and their default values.
 * @returns A reactive reference to the story's values inferred from the schema.
 */
export function useStory<TSchema extends PropsSchema>(name: string, schema: TSchema) {
  const store = useStoryStore()
  const { values } = storeToRefs(store)

  store.setStoryState(name, schema)

  return values as unknown as Ref<InferValuesFromSchema<TSchema>>
}
