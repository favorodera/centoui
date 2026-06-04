<script setup lang="ts">
import { Switch, switchVariants } from '#centoui/components/switch'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'
import { ref } from 'vue'

const values = useApp().preview.initPreview('Switch', {
  size: {
    type: 'array',
    label: 'Size',
    options: Object.keys(switchVariants.variants.size),
    default: switchVariants.defaultVariants.size,
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

const switchState = ref(false)
</script>

<template>
  <ViewContainer>
    <Switch
      v-model="switchState"
      :size="values.size"
      :disabled="values.disabled"
      :aria-invalid="values.invalid"
    />
  </ViewContainer>
</template>

