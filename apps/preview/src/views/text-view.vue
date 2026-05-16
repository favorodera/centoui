<script setup lang="ts">
import { Text, textVariants } from '#centoui/components/text'
import ViewContainer from '@/components/view-container.vue'
import { usePreview } from '@/composables/use-preview'

const values = usePreview('Text', {
  size: {
    type: 'select',
    label: 'Size',
    options: Object.keys(textVariants.variants.size),
    default: textVariants.defaultVariants.size,
  },
  weight: {
    type: 'select',
    label: 'Weight',
    options: Object.keys(textVariants.variants.weight),
    default: textVariants.defaultVariants.weight,
  },
})
</script>

<template>
  <ViewContainer>
    <Text
      :size="values.size"
      :weight="values.weight"
    >
      Hello World
    </Text>
  </ViewContainer>
</template>
