<script setup lang="ts">
import { Badge, badgeVariants } from '#centoui/components/badge'
import { Icon } from '#centoui/components/icon'
import { useStory } from '@/composables/use-story'

const values = useStory('Badge', {
  color: {
    default: badgeVariants.defaultVariants.color,
    options: Object.keys(badgeVariants.variants.color),
    type: 'array',
  },
})
</script>

<template>
  <Badge :color="values.color">
    Badge
  </Badge>

  <Badge :color="values.color">
    <Icon icon="lucide:user" />
    User
  </Badge>

  <Badge :color="values.color">
    Loading...
    <Icon icon="svg-spinners:180-ring" />
  </Badge>
</template>
