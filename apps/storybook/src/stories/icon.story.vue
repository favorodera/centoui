<script setup lang="ts">
import { Icon } from '#centoui/components/icon'
import { useStory } from '@/composables/use-story'

const controls = useStory('Icon', {
  icon: {
    default: 'lucide:user',
    hint: 'Iconify icon IDs',
    type: 'string',
  },
})
</script>

<template>
  <Icon :icon="controls.icon" />
</template>
