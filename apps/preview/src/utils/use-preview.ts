/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from 'vue'
import type { PropsSchema } from '../components/props-panel.vue'

/**
 * The name of the component currently being previewed.
 */
const activeComponentName = ref<string>('')

/**
 * The props schema defining controls for the current component.
 */
const activePropsSchema = ref<PropsSchema | null>(null)

/**
 * Reactive values bound to the previewed component's props.
 */
const activePreviewValues = ref<Record<string, any>>({})

/**
 * Composable for managing the shared state between specific component views
 * and the global preview layout (sidebar and properties panel).
 */
export function usePreview() {
  /**
   * Registers a component for the preview environment.
   *
   * @param name - The display name of the component (e.g., "Button")
   * @param schema - The schema defining available props and their types
   */
  function setPreviewState(name: string, schema: PropsSchema) {
    activeComponentName.value = name
    activePropsSchema.value = schema
    
    // Initialize default values from the schema
    const initialValues: Record<string, any> = {}
    Object.entries(schema).forEach(([key, prop]) => {
      initialValues[key] = prop.default
    })
    activePreviewValues.value = initialValues
  }

  return {
    componentName: activeComponentName,
    schema: activePropsSchema,
    values: activePreviewValues,
    setPreviewState,
  }
}

