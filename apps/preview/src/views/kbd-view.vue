<script setup lang="ts">
import { onMounted } from 'vue'
import { Kbd, kbdVariants } from '#centoui/components/kbd'
import { usePreview } from '../utils/use-preview'
import type { PropsSchema } from '../components/props-panel.vue'
import ViewContainer from '../components/view-container.vue'

const { values, setPreviewState } = usePreview()

const kbdPropsSchema: PropsSchema = {
  size: {
    type: 'select',
    label: 'Size',
    options: Object.keys(kbdVariants.variants.size),
    default: 'md',
  },
  color: {
    type: 'select',
    label: 'Color',
    options: Object.keys(kbdVariants.variants.color),
    default: 'neutral',
  },
  variant: {
    type: 'select',
    label: 'Variant',
    options: Object.keys(kbdVariants.variants.variant),
    default: 'solid',
  },
}

onMounted(() => {
  setPreviewState('Kbd', kbdPropsSchema)
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
      ⇧
    </Kbd>

    <Kbd
      :size="values.size"
      :color="values.color"
      :variant="values.variant"
    >
      ⌥
    </Kbd>

    <Kbd
      :size="values.size"
      :color="values.color"
      :variant="values.variant"
    >
      ⌃
    </Kbd>
  </ViewContainer>
</template>
