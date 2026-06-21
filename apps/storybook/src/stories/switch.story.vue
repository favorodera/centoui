<script setup lang="ts">
import { Switch, switchVariants } from '#centoui/components/switch'
import { useStory } from '@/composables/use-story'

const controls = useStory('Switch', {
  disabled: {
    default: false,
    type: 'boolean',
  },
  invalid: {
    default: false,
    type: 'boolean',
  },
  size: {
    default: switchVariants.defaultVariants.size,
    options: Object.keys(switchVariants.variants.size),
    type: 'array',
  },
})
</script>

<template>
  <Switch
    id="switch"
    :aria-invalid="controls.invalid"
    :disabled="controls.disabled"
    :size="controls.size"
    name="switch"
  >Hello</Switch>
</template>
