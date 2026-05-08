import { storeToRefs } from 'pinia'
import { usePreviewStore } from '../stores/preview'

/**
 * Backward-compatible preview composable now powered by Pinia.
 */
export function usePreview() {
  const store = usePreviewStore()
  const { componentName, schema, values, hasProps } = storeToRefs(store)

  return {
    componentName,
    schema,
    values,
    hasProps,
    setPreviewState: store.setPreviewState,
    updateValues: store.updateValues,
  }
}

