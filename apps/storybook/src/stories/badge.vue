<script setup lang="ts">
import { Badge, badgeVariants } from '#centoui/components/badge'
import { Icon } from '#centoui/components/icon'
import { useStory } from '@/composables/use-story'

const controls = useStory('Badge', {
  variant: {
    default: badgeVariants.defaultVariants.variant,
    options: Object.keys(badgeVariants.variants.variant),
    type: 'array',
  },
})
</script>

<template>
  <Badge :variant="controls.variant">
    Badge
  </Badge>

  <Badge :variant="controls.variant">
    <Icon icon="lucide:user" />
    User
  </Badge>

  <Badge :variant="controls.variant">
    Loading...
    <Icon icon="svg-spinners:180-ring" />
  </Badge>
</template>
