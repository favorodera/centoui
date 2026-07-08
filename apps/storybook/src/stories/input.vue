<script setup lang="ts">
import { ref } from 'vue'
import { Input, inputVariants } from '#centoui/components/input'
import { useStory } from '@/composables/use-story'

const controls = useStory('Input', {
  disabled: {
    default: false,
    type: 'boolean',
  },
  invalid: {
    default: false,
    type: 'boolean',
  },
  size: {
    default: inputVariants.defaultVariants.size,
    options: Object.keys(inputVariants.variants.size),
    type: 'array',
  },
})

const inputModel = ref('')
</script>

<template>
  <Input
    id="input"
    v-model:value="inputModel"
    :size="controls.size"
    :disabled="controls.disabled"
    :aria-invalid="controls.invalid"
    placeholder="Enter your text here..."
    name="input"
  />

  <p class="text-sm text-muted-foreground">
    {{ inputModel }}
  </p>
</template>
