<script setup lang="ts">
import { Badge, badgeVariants } from '#centoui/components/badge'
import { Icon } from '#centoui/components/icon'
import { useStory } from '@/composables/use-story'

const values = useStory('Badge', {
  status: {
    default: badgeVariants.defaultVariants.status,
    options: Object.keys(badgeVariants.variants.status),
    type: 'array',
  },
})
</script>

<template>
  <Badge :status="values.status">
    Badge
  </Badge>

  <Badge :status="values.status">
    <Icon icon="lucide:user" />
    User
  </Badge>

  <Badge :status="values.status">
    Loading...
    <Icon icon="svg-spinners:180-ring" />
  </Badge>
</template>
