import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { PropsSchema } from '../utils/types'

export const usePreviewStore = defineStore('preview', () => {
  const componentName = ref('')
  const schema = ref<null | PropsSchema>(null)
  const values = ref<Record<string, unknown>>({})
  const activeKey = ref('')
  const valuesByComponent = ref<Record<string, Record<string, unknown>>>({})

  const hasProps = computed(() => !!schema.value && Object.keys(schema.value).length > 0)

  /**
   * @param name
   * @param nextSchema
   */
  function setPreviewState(name: string, nextSchema: PropsSchema) {
    componentName.value = name
    schema.value = nextSchema
    activeKey.value = name

    const initial = Object.fromEntries(Object.entries(nextSchema).map(([
      key,
      def,
    ]) => [
      key,
      def.default,
    ]))

    values.value = { ...initial, ...valuesByComponent.value[name] }
    valuesByComponent.value[name] ??= { ...initial }
  }

  /**
   * @param next
   */
  function updateValues(next: Record<string, unknown>) {
    values.value = next
    if (activeKey.value) {
      valuesByComponent.value[activeKey.value] = { ...next }
    }
  }

  return {
    componentName,
    hasProps,
    schema,
    setPreviewState,
    updateValues,
    values,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePreviewStore, import.meta.hot))
}
