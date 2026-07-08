<script setup lang="ts">
import { AspectRatio } from '#centoui/components/aspect-ratio'
import { useStory } from '@/composables/use-story'

const parseRatio = (ratio: string) => {
  const [
    w,
    h,
  ] = ratio.split('/').map(Number)
  if (!w || Number.isNaN(w)) return 1
  return h && !Number.isNaN(h) ? w / h : w
}

const controls = useStory('Aspect Ratio', {
  ratio: {
    default: '16/9',
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
    type: 'array',
  },
})
</script>

<template>
  <AspectRatio :ratio="parseRatio(controls.ratio)">
    <img
      src="https://avatars.githubusercontent.com/favorodera?v=4"
      alt="Photo"
      class="block-full inline-full object-cover"
    >
  </AspectRatio>
</template>
