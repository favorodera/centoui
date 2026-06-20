<script setup lang="ts">
import { Label } from '#centoui/components/label'
import { Switch } from '#centoui/components/switch'
import { useStory } from '@/composables/use-story'

const controls = useStory('Input', {
  disabled: {
    default: false,
    type: 'boolean',
  },
})
</script>

<template>
  <Label class="flex items-center gap-2">
    Toggle notifications
    <Switch
      id="switch"
      :disabled="controls.disabled"
      name="switch"
    />
  </Label>
</template>
