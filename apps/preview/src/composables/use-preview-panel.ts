import { storeToRefs } from 'pinia'
import { usePreviewStore } from '@/stores/preview-store'

/**
 * Exposes preview workspace state for the shell UI (component-preview).
 * Not intended for use in individual view SFCs.
 */
export function usePreviewPanel() {
  const store = usePreviewStore()
  const { componentName, schema, values, hasProps } = storeToRefs(store)

  return {
    componentName,
    schema,
    values,
    hasProps,
    updateValues: store.updateValues,
  }
}
