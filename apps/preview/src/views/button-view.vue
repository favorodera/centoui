<script setup lang="ts">
import { onMounted } from 'vue'
import { Button } from '../../../../packages/core/src/components/button'
import { Icon } from '@iconify/vue'
import { usePreview } from '../utils/use-preview'
import type { PropsSchema } from '../components/props-panel.vue'
import ViewContainer from '../components/view-container.vue'

const { values, setPreviewState } = usePreview()

const buttonPropsSchema: PropsSchema = {
  variant: {
    type: 'select',
    label: 'Variant',
    options: ['solid', 'soft', 'subtle', 'outline', 'ghost', 'link'],
    default: 'solid',
  },
  color: {
    type: 'select',
    label: 'Color',
    options: ['primary', 'secondary', 'accent', 'neutral', 'success', 'warning', 'error', 'info'],
    default: 'primary',
  },
  size: {
    type: 'select',
    label: 'Size',
    options: ['xs', 'sm', 'md', 'lg', 'xl'],
    default: 'md',
  },
  disabled: {
    type: 'boolean',
    label: 'Disabled',
    default: false,
  },
}

onMounted(() => {
  setPreviewState('Button', buttonPropsSchema)
})
</script>

<template>
  <ViewContainer>

    <Button
      :variant="values.variant"
      :color="values.color"
      :size="values.size"
      :disabled="values.disabled"
    >
      Button
    </Button>

    <Button
      :variant="values.variant"
      :color="values.color"
      :size="values.size"
      :disabled="values.disabled"
    >
      <Icon
        icon="lucide:plus"
      />
      
      Button
    </Button>
      
    <Button
      :variant="values.variant"
      :color="values.color"
      :size="values.size"
      :disabled="values.disabled"
      :square="true"
    >
      <Icon
        icon="lucide:plus"
      />
    </Button>

  </ViewContainer>
</template>
