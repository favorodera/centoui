<script setup lang="ts">
import { Button, buttonVariants } from '#centoui/components/button'
import { Icon } from '#centoui/components/icon'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Button', {
  variant: {
    type: 'array',
    label: 'Variant',
    options: Object.keys(buttonVariants.variants.variant),
    default: buttonVariants.defaultVariants.variant,
  },
  size: {
    type: 'array',
    label: 'Size',
    options: Object.keys(buttonVariants.variants.size),
    default: buttonVariants.defaultVariants.size,
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
</script>

<template>
  <ViewContainer>

    <Button
      :variant="values.variant"
      :size="values.size"
      :disabled="values.disabled"
      :aria-invalid="values.invalid"
    >
      Button
    </Button>

    <Button
      :variant="values.variant"
      :size="values.size"
      :disabled="values.disabled"
      :aria-invalid="values.invalid"
    >
      <Icon
        icon="lucide:plus"
      />
      
      Button
    </Button>
      
    <Button
      :variant="values.variant"
      :size="values.size"
      :disabled="values.disabled"
      :square="true"
      :aria-invalid="values.invalid"
    >
      <Icon
        icon="lucide:plus"
      />
    </Button>

  </ViewContainer>
</template>
