<script setup lang="ts">
import { onMounted } from 'vue'
import { Button } from '../../../../packages/core/src/components/button'
import { Icon } from '@iconify/vue'
import { usePreview } from '../utils/use-preview'
import type { PropsSchema } from '../components/props-panel.vue'
import ViewContainer from '../components/view-container.vue'

const { values, setPreviewState } = usePreview()

const buttonPropsSchema: PropsSchema = {
  label: {
    type: 'string',
    label: 'Label',
    default: 'Button',
  },
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
  square: {
    type: 'boolean',
    label: 'Square',
    default: false,
  },
  disabled: {
    type: 'boolean',
    label: 'Disabled',
    default: false,
  },
  icon: {
    type: 'string',
    label: 'Icon',
    hint: 'Enter an Iconify icon name (e.g., lucide:plus)',
    default: '',
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
      :square="values.square"
    >
      <Icon
        v-if="values.icon"
        :icon="values.icon"
      />

      {{ values.label }}

    </Button>

  </ViewContainer>
</template>
