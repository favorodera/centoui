<script setup lang="ts">
import { Badge, badgeVariants } from '#centoui/components/badge'
import { Icon } from '@iconify/vue'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Badge', {
  variant: {
    type: 'array',
    label: 'Variant',
    options: Object.keys(badgeVariants.variants.variant),
    default: badgeVariants.defaultVariants.variant,
  },
  size: {
    type: 'array',
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
