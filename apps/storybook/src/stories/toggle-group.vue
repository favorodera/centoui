<script setup lang="ts">
import { Icon } from '#centoui/components/icon'
import { toggleVariants } from '#centoui/components/toggle'
import { ToggleGroupItem, ToggleGroupRoot, toggleGroupVariants } from '#centoui/components/toggle-group'
import { useStory } from '@/composables/use-story'

const controls = useStory('Toggle Group', {
  compact: {
    default: toggleGroupVariants.defaultVariants.compact,
    options: Object.keys(toggleGroupVariants.variants.compact),
    type: 'array',
  },
  disabled: {
    default: false,
    type: 'boolean',
  },
  orientation: {
    default: toggleGroupVariants.defaultVariants.orientation,
    options: Object.keys(toggleGroupVariants.variants.orientation),
    type: 'array',
  },
  size: {
    default: toggleVariants.defaultVariants.size,
    options: Object.keys(toggleVariants.variants.size),
    type: 'array',
  },
  type: {
    default: 'single' as any,
    options: [
      'multiple',
      'single',
    ],
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
  <ToggleGroupRoot
    :disabled="controls.disabled"
    :orientation="controls.orientation"
    :compact="controls.compact"
    :type="controls.type"
  >
    <ToggleGroupItem
      square
      :disabled="controls.disabled"
      value="bold"
      :variant="controls.variant"
      :size="controls.size"
    >
      <Icon icon="lucide:bold" />
    </ToggleGroupItem>

    <ToggleGroupItem
      square
      :disabled="controls.disabled"
      value="italic"
      :variant="controls.variant"
      :size="controls.size"
    >
      <Icon icon="lucide:italic" />
    </ToggleGroupItem>
  </ToggleGroupRoot>
</template>
