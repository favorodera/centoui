<script setup lang="ts">
import { ref } from 'vue'
import { Input, inputVariants } from '#centoui/components/input'
import { useStory } from '@/composables/use-story'

const values = useStory('Input', {
  disabled: {
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
  <div class="inline-full max-inline-sm grid place-items-center gap-4">
    <Input
      id="input"
      v-model:value="inputModel"
      :size="values.size"
      :disabled="values.disabled"
      placeholder="Enter your text here..."
      name="input"
    />

    <p class="text-sm text-muted-foreground">
      {{ inputModel }}
    </p>
  </div>
</template>
