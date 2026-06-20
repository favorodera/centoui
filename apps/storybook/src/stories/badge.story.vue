<script setup lang="ts">
import { Badge, badgeVariants } from '#centoui/components/badge'
import { Icon } from '#centoui/components/icon'
import { useStory } from '@/composables/use-story'

const controls = useStory('Badge', {
  color: {
    default: badgeVariants.defaultVariants.color,
    options: Object.keys(badgeVariants.variants.color),
    type: 'array',
  },
})
</script>

<template>
  <Badge :color="controls.color">
    Badge
  </Badge>

  <Badge :color="controls.color">
    <Icon icon="lucide:user" />
    User
  </Badge>

  <Badge :color="controls.color">
    Loading...
    <Icon icon="svg-spinners:180-ring" />
  </Badge>
</template>
