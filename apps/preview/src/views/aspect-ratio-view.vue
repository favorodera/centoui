<script setup lang="ts">
import { AspectRatio } from '#centoui/components/aspect-ratio'
import ViewContainer from '@/components/view-container.vue'
import { usePreview } from '@/composables/use-preview'

function parseRatio(ratio: string) {
  const [w, h] = ratio.split('/').map(Number)
  if (!w || isNaN(w)) return 1
  return h && !isNaN(h) ? w / h : w
}

const values = usePreview('Aspect Ratio', {
  ratio: {
    type: 'string',
    label: 'Ratio',
    default: '16/9',
  },
})
</script>

<template>
  <ViewContainer>
    <AspectRatio
      :ratio="parseRatio(values.ratio)"
      class="bg-muted rounded-lg"
    >
      <img
        src="https://github.com/favorodera.png"
        alt="Favour Emeka"
        class="size-full rounded-[inherit] object-cover "
      >
    </AspectRatio>
  </ViewContainer>
</template>
