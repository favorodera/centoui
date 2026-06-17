<script setup lang="ts">
import { Button, buttonVariants } from '#centoui/components/button'
import { Icon } from '#centoui/components/icon'
import { useStory } from '@/composables/use-story'

const values = useStory('Button', {
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
    :size="values.size"
    :variant="values.variant"
    :disabled="values.disabled"
  >
    Button
  </Button>

  <Button
    :size="values.size"
    :variant="values.variant"
    square
    :disabled="values.disabled"
  >
    <Icon icon="lucide:user" />
  </Button>

  <Button
    :size="values.size"
    :variant="values.variant"
    :disabled="values.disabled"
  >
    Loading...
    <Icon icon="svg-spinners:180-ring" />
  </Button>
</template>
