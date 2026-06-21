<script setup lang="ts">
import { ref } from 'vue'
import { Textarea, textareaVariants } from '#centoui/components/textarea'
import { useStory } from '@/composables/use-story'

const controls = useStory('Textarea', {
  disabled: {
    default: false,
    type: 'boolean',
  },
  invalid: {
    default: false,
    type: 'boolean',
  },
  size: {
    default: textareaVariants.defaultVariants.size,
    options: Object.keys(textareaVariants.variants.size),
    type: 'array',
  },
})

const textareaModel = ref('')
</script>

<template>
  <div class="inline-full max-inline-sm grid place-items-center gap-4">
    <Textarea
      id="textarea"
      v-model:value="textareaModel"
      :size="controls.size"
      :disabled="controls.disabled"
      :aria-invalid="controls.invalid"
      placeholder="Enter your text here..."
      name="textarea"
    />

    <p class="text-sm text-muted-foreground">
      {{ textareaModel }}
    </p>
  </div>
</template>
