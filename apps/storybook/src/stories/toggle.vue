<script setup lang="ts">
import { Icon } from '#centoui/components/icon'
import { Toggle, toggleVariants } from '#centoui/components/toggle'
import { useStory } from '@/composables/use-story'

const controls = useStory('Toggle', {
  disabled: {
    default: false,
    type: 'boolean',
  },
  invalid: {
    default: false,
    type: 'boolean',
  },
  size: {
    default: toggleVariants.defaultVariants.size,
    options: Object.keys(toggleVariants.variants.size),
    type: 'array',
  },
  variant: {
    default: toggleVariants.defaultVariants.variant,
    options: Object.keys(toggleVariants.variants.variant),
    type: 'array',
  },
})
</script>

<template>
  <Toggle
    :size="controls.size"
    :variant="controls.variant"
    :disabled="controls.disabled"
    :aria-invalid="controls.invalid"
  >
    <Icon
      name="lucide:bookmark"
      class="group-aria-pressed/toggle:[&>path]:fill-foreground"
    />
    Bookmark
  </Toggle>

  <Toggle
    :size="controls.size"
    :variant="controls.variant"
    square
    :disabled="controls.disabled"
  >
    <Icon name="lucide:italic" />
  </Toggle>
</template>
