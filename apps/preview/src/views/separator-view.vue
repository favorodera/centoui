<script setup lang="ts">
import { onMounted } from 'vue'
import { Separator, separatorVariants } from '#centoui/components/separator'
import { Icon } from '@iconify/vue'
import { usePreview } from '../utils/use-preview'
import type { PropsSchema } from '../components/props-panel.vue'
import ViewContainer from '../components/view-container.vue'

const { values, setPreviewState } = usePreview()

const schema: PropsSchema = {
  size: {
    type: 'select',
    label: 'Size',
    options: Object.keys(separatorVariants.variants.size),
    default: separatorVariants.defaultVariants.size,
  },
  color: {
    type: 'select',
    label: 'Color',
    options: Object.keys(separatorVariants.variants.color),
    default: separatorVariants.defaultVariants.color,
  },
  variant: {
    type: 'select',
    label: 'Variant',
    options: Object.keys(separatorVariants.variants.variant),
    default: separatorVariants.defaultVariants.variant,
  },
  orientation: {
    type: 'select',
    label: 'Orientation',
    options: Object.keys(separatorVariants.variants.orientation),
    default: separatorVariants.defaultVariants.orientation,
  },
}

onMounted(() => {
  setPreviewState('Separator', schema)
})
</script>

<template>
  <ViewContainer>
    <Separator
      :size="values.size"
      :color="values.color"
      :variant="values.variant"
      :orientation="values.orientation"
    />

    <Separator
      :size="values.size"
      :color="values.color"
      :variant="values.variant"
      :orientation="values.orientation"
    >
      <Icon icon="lucide:user" />
    </Separator>

    <Separator
      :size="values.size"
      :color="values.color"
      :variant="values.variant"
      :orientation="values.orientation"
    >
      Hello
    </Separator>
  </ViewContainer>
</template>
