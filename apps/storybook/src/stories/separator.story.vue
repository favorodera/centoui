<script setup lang="ts">
import { Separator, separatorVariants } from '#centoui/components/separator'
import { useStory } from '@/composables/use-story'

const controls = useStory('Separator', {
  orientation: {
    default: separatorVariants.defaultVariants.orientation,
    options: Object.keys(separatorVariants.variants.orientation),
    type: 'array',
  },
})
</script>

<template>
  <Separator :orientation="controls.orientation" />

  <Separator :orientation="controls.orientation">
    OR
  </Separator>
</template>
