<script setup lang="ts">
import { Button, buttonVariants } from '#centoui/components/button'
import { Icon } from '#centoui/components/icon'
import { useStory } from '@/composables/use-story'

const controls = useStory('Button', {
  disabled: {
    default: false,
    type: 'boolean',
  },
  size: {
    default: buttonVariants.defaultVariants.size,
    options: Object.keys(buttonVariants.variants.size),
    type: 'array',
  },
  variant: {
    default: buttonVariants.defaultVariants.variant,
    options: Object.keys(buttonVariants.variants.variant),
    type: 'array',
  },
})
</script>

<template>
  <Button
    :size="controls.size"
    :variant="controls.variant"
    :disabled="controls.disabled"
  >
    Button
  </Button>

  <Button
    :size="controls.size"
    :variant="controls.variant"
    :square="true"
    :disabled="controls.disabled"
  >
    <Icon name="lucide:user" />
  </Button>

  <Button
    :size="controls.size"
    :variant="controls.variant"
    :disabled="controls.disabled"
    as-child
  >
    <a to="#">
      <Icon name="lucide:download" />

      Download
    </a>
  </Button>
</template>
