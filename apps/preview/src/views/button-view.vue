<script setup lang="ts">
import { onMounted } from 'vue'
import { Button, buttonVariants } from '#centoui/components/button'
import { Icon } from '@iconify/vue'
import { usePreview } from '../utils/use-preview'
import type { PropsSchema } from '../components/props-panel.vue'
import ViewContainer from '../components/view-container.vue'

const { values, setPreviewState } = usePreview()

const schema: PropsSchema = {
  variant: {
    type: 'select',
    label: 'Variant',
    options: Object.keys(buttonVariants.variants.variant),
    default: buttonVariants.defaultVariants.variant,
  },
  color: {
    type: 'select',
    label: 'Color',
    options: Object.keys(buttonVariants.variants.color),
    default: buttonVariants.defaultVariants.color,
  },
  size: {
    type: 'select',
    label: 'Size',
    options: Object.keys(buttonVariants.variants.size),
    default: buttonVariants.defaultVariants.size,
  },
  disabled: {
    type: 'boolean',
    label: 'Disabled',
    default: false,
  },
}

onMounted(() => {
  setPreviewState('Button', schema)
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
