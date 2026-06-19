<script setup lang="ts">
import { Label } from '#centoui/components/label'
import { Switch } from '#centoui/components/switch'
import { useStory } from '@/composables/use-story'

const values = useStory('Input', {
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
      :disabled="values.disabled"
      name="switch"
    />
  </Label>
</template>
