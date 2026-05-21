<script setup lang="ts">
import { AspectRatio } from '#centoui/components/aspect-ratio'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

function parseRatio(ratio: string) {
  const [w, h] = ratio.split('/').map(Number)
  if (!w || isNaN(w)) return 1
  return h && !isNaN(h) ? w / h : w
}

const values = useApp().preview.initPreview('Aspect Ratio', {
  ratio: {
    type: 'array',
    label: 'Ratio',
    options: [
      '1/1',
      '4/3',
      '3/2',
      '16/9',
      '16/10',
      '21/9',
      '2.39/1',
      '3/4',
      '2/3',
      '9/16',
      '9/21',
    ],
    default: '16/9',
  },
})
</script>

<template>
  <ViewContainer>
    <AspectRatio
      :ratio="parseRatio(values.ratio)"
      class="rounded-lg bg-muted"
    >
      <img
        src="https://github.com/favorodera.png"
        alt="Favour Emeka"
        class="size-full rounded-[inherit] object-cover"
      >
    </AspectRatio>
  </ViewContainer>
</template>
