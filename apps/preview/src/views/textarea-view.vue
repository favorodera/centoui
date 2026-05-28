<script setup lang="ts">
import { Textarea, textareaVariants } from '#centoui/components/textarea'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'
import { ref } from 'vue'

const values = useApp().preview.initPreview('Textarea', {
  size: {
    type: 'array',
    label: 'Size',
    options: Object.keys(textareaVariants.variants.size),
    default: textareaVariants.defaultVariants.size,
  },
  disabled: {
    type: 'boolean',
    label: 'Disabled',
    default: false,
  },
  invalid: {
    type: 'boolean',
    label: 'Invalid',
    default: false,
  },
})

const modelValue = ref('')
</script>

<template>
  <ViewContainer class="flex-col flex-nowrap">
    <Textarea
      id="textarea-model"
      v-model:value="modelValue"
      :size="values.size"
      :disabled="values.disabled"
      :aria-invalid="values.invalid"
      placeholder="Type your message here."
      name="textarea-model"
    />

    <p class="text-sm text-muted-foreground">
      {{ modelValue }}
    </p>
  </ViewContainer>
</template>
