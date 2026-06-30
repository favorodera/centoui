<script setup lang="ts">
import { ref } from 'vue'
import { NumberInput, numberInputVariants } from '#centoui/components/number-input'
import { useStory } from '@/composables/use-story'

const controls = useStory('NumberInput', {
  disabled: {
    default: false,
    type: 'boolean',
  },
  invalid: {
    default: false,
    type: 'boolean',
  },
  size: {
    default: numberInputVariants.defaultVariants.size,
    options: Object.keys(numberInputVariants.variants.size),
    type: 'array',
  },
})

const inputModel = ref()
</script>

<template>
  <NumberInput
    id="number-input"
    v-model:model-value="inputModel"
    :size="controls.size"
    :disabled="controls.disabled"
    :aria-invalid="controls.invalid"
    :max="10"
    name="number-input"
    placeholder="Enter a number..."
  />

  <p class="text-sm text-muted-foreground">
    {{ inputModel }}
  </p>
</template>
