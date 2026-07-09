<script setup lang="ts">
import { Badge, badgeVariants } from '#centoui/components/badge'
import { Icon } from '#centoui/components/icon'
import { useStory } from '@/composables/use-story'

const controls = useStory('Badge', {
  size: {
    default: badgeVariants.defaultVariants.size,
    options: Object.keys(badgeVariants.variants.size),
    type: 'array',
  },
  variant: {
    default: badgeVariants.defaultVariants.variant,
    options: Object.keys(badgeVariants.variants.variant),
    type: 'array',
  },
})
</script>

<template>
  <Badge
    :variant="controls.variant"
    :size="controls.size"
  >
    Badge
  </Badge>

  <Badge
    :variant="controls.variant"
    :size="controls.size"
  >
    <Icon icon="lucide:user" />
    User
  </Badge>

  <Badge
    :variant="controls.variant"
    :size="controls.size"
  >
    Loading...
    <Icon icon="svg-spinners:180-ring" />
  </Badge>
</template>
