import { usePreviewStore } from '@/stores/preview-store'
import type { InferValuesFromSchema, PropsSchema } from '@/utils/types'
import { storeToRefs } from 'pinia'
import type { Ref } from 'vue'

/**
 * Registers a view component's schema and returns its typed values ref.
 *
 * Call during setup — no `onMounted` needed, no `setPreviewState` call needed.
 *
 * @example
 * const schema = {
 *   variant: { type: 'select', options: ['default', 'ghost'], default: 'default' },
 *   disabled: { type: 'boolean', default: false },
 * } satisfies PropsSchema
 *
 * const values = usePreview('Button', schema)
 * // values.variant → string
 * // values.disabled → boolean
 */
export function usePreview<TSchema extends PropsSchema>(name: string, schema: TSchema) {
  const store = usePreviewStore()
  // Synchronous — no onMounted needed. Pinia state is available immediately
  // during setup and the router ensures each view is a fresh instance.
  store.setPreviewState(name, schema)
  const { values } = storeToRefs(store)
  return values as unknown as Ref<InferValuesFromSchema<TSchema>>
}
