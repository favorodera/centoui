/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { PropsSchema } from '../components/props-panel.vue'

/**
 * Shared state for the preview workspace.
 */
export const usePreviewStore = defineStore('preview', () => {
  const componentName = ref('')
  const schema = ref<PropsSchema | null>(null)
  const values = ref<Record<string, any>>({})
  const activeKey = ref('')
  const valuesByComponent = ref<Record<string, Record<string, any>>>({})

  const hasProps = computed(() => {
    return !!schema.value && Object.keys(schema.value).length > 0
  })

  /**
   * Registers the current component and its editable props.
   */
  function setPreviewState(name: string, nextSchema: PropsSchema) {
    componentName.value = name
    schema.value = nextSchema
    activeKey.value = name

    const initialValues: Record<string, any> = {}
    Object.entries(nextSchema).forEach(([key, prop]) => {
      initialValues[key] = prop.default
    })

    const existingValues = valuesByComponent.value[name]
    if (existingValues) {
      values.value = { ...initialValues, ...existingValues }
      return
    }

    values.value = initialValues
    valuesByComponent.value[name] = { ...initialValues }
  }

  /**
   * Replaces the active props values.
   */
  function updateValues(nextValues: Record<string, any>) {
    values.value = nextValues
    if (activeKey.value) {
      valuesByComponent.value[activeKey.value] = { ...nextValues }
    }
  }

  return {
    componentName,
    schema,
    values,
    hasProps,
    setPreviewState,
    updateValues,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePreviewStore, import.meta.hot))
}
