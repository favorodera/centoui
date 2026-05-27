<script setup lang="ts">
import { Input, inputVariants } from '#centoui/components/input'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'
import { ref } from 'vue'

const values = useApp().preview.initPreview('Input', {
  size: {
    type: 'array',
    label: 'Size',
    options: Object.keys(inputVariants.variants.size),
    default: inputVariants.defaultVariants.size,
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
  <ViewContainer>

    <div class="flex flex-col gap-1">
      <Input
        id="input-model"
        v-model:value="modelValue"
        :size="values.size"
        :disabled="values.disabled"
        :aria-invalid="values.invalid"
        placeholder="Enter your name"
        name="input-model"
      />
      <p class="text-sm text-muted-foreground">
        {{ modelValue }}
      </p>
    </div>

  </ViewContainer>
</template>
