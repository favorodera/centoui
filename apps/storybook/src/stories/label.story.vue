<script setup lang="ts">
import { Label } from '#centoui/components/label'
import { Switch } from '#centoui/components/switch'
import { useStory } from '@/composables/use-story'

const controls = useStory('Label', {
  disabled: {
    default: false,
    type: 'boolean',
  },
})
</script>

<template>
  <Label for="switch">
    Toggle notifications
    <Switch
      id="switch"
      :disabled="controls.disabled"
      name="switch"
    />
  </Label>
</template>
