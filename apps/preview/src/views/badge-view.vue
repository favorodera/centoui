<script setup lang="ts">
import { Badge, badgeVariants } from '#centoui/components/badge'
import { Icon } from '@iconify/vue'
import ViewContainer from '@/components/view-container.vue'
import { usePreview } from '@/composables/use-preview'

const values = usePreview('Badge', {
  variant: {
    type: 'select',
    label: 'Variant',
    options: Object.keys(badgeVariants.variants.variant),
    default: badgeVariants.defaultVariants.variant,
  },
  size: {
    type: 'select',
    label: 'Size',
    options: Object.keys(badgeVariants.variants.size),
    default: badgeVariants.defaultVariants.size,
  },
})
</script>

<template>
  <ViewContainer>

    <Badge
      :variant="values.variant"
      :size="values.size"
    >
      Badge
    </Badge>

    <Badge
      :variant="values.variant"
      :size="values.size"
    >
      <Icon
        icon="lucide:plus"
      />
      
      Badge
    </Badge>
      
    <Badge
      :variant="values.variant"
      :size="values.size"
    >
      <Icon
        icon="lucide:plus"
      />
    </Badge>

  </ViewContainer>
</template>
