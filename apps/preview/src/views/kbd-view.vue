<script setup lang="ts">
import { onMounted } from 'vue'
import { Kbd, kbdVariants } from '#centoui/components/kbd'
import { usePreview } from '../utils/use-preview'
import type { PropsSchema } from '../components/props-panel.vue'
import ViewContainer from '../components/view-container.vue'

const { values, setPreviewState } = usePreview()

const schema: PropsSchema = {
  size: {
    type: 'select',
    label: 'Size',
    options: Object.keys(kbdVariants.variants.size),
    default: kbdVariants.defaultVariants.size,
  },
  color: {
    type: 'select',
    label: 'Color',
    options: Object.keys(kbdVariants.variants.color),
    default: kbdVariants.defaultVariants.color,
  },
  variant: {
    type: 'select',
    label: 'Variant',
    options: Object.keys(kbdVariants.variants.variant),
    default: kbdVariants.defaultVariants.variant,
  },
}

onMounted(() => {
  setPreviewState('Kbd', schema)
})
</script>

<template>
  <ViewContainer>
    <Kbd
      :size="values.size"
      :color="values.color"
      :variant="values.variant"
    >
      ⌘
    </Kbd>

    <Kbd
      :size="values.size"
      :color="values.color"
      :variant="values.variant"
    >
      Ctrl
    </Kbd>
  </ViewContainer>
</template>
