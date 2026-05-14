<script setup lang="ts">
import { Button, buttonVariants } from '#centoui/components/button'
import { Icon } from '@iconify/vue'
import ViewContainer from '@/components/view-container.vue'
import { usePreview } from '@/composables/use-preview'

const values = usePreview('Button', {
  variant: {
    type: 'select',
    label: 'Variant',
    options: Object.keys(buttonVariants.variants.variant),
    default: buttonVariants.defaultVariants.variant,
  },
  size: {
    type: 'select',
    label: 'Size',
    options: Object.keys(buttonVariants.variants.size),
    default: buttonVariants.defaultVariants.size,
  },
  disabled: {
    type: 'boolean',
    label: 'Disabled',
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
    >
      Button
    </Button>

    <Button
      :variant="values.variant"
      :size="values.size"
      :disabled="values.disabled"
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
    >
      <Icon
        icon="lucide:plus"
      />
    </Button>

  </ViewContainer>
</template>
