<script setup lang="ts">
import { Icon } from '#centoui/components/icon'
import { useStory } from '@/composables/use-story'

const values = useStory('Icon', {
  icon: {
    default: 'lucide:user',
    hint: 'Iconify icon IDs',
    type: 'string',
  },
})
</script>

<template>
  <Icon :icon="values.icon" />
</template>
