<script setup lang="ts">
import { Kbd, kbdVariants } from '#centoui/components/kbd'
import ViewContainer from '@/components/view-container.vue'
import { usePreview } from '@/composables/use-preview'

const values = usePreview('Kbd', {
  size: {
    type: 'select',
    label: 'Size',
    options: Object.keys(kbdVariants.variants.size),
    default: kbdVariants.defaultVariants.size,
  },
  variant: {
    type: 'select',
    label: 'Variant',
    options: Object.keys(kbdVariants.variants.variant),
    default: kbdVariants.defaultVariants.variant,
  },
})
</script>

<template>
  <ViewContainer>
    <Kbd
      :size="values.size"
      :variant="values.variant"
    >
      ⌘
    </Kbd>

    <Kbd
      :size="values.size"
      :variant="values.variant"
    >
      Ctrl
    </Kbd>
  </ViewContainer>
</template>
