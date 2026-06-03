<script setup lang="ts">
import { Badge, badgeVariants } from '#centoui/components/badge'
import { Icon } from '#centoui/components/icon'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Badge', {
  variant: {
    type: 'array',
    label: 'Variant',
    options: Object.keys(badgeVariants.variants.variant),
    default: badgeVariants.defaultVariants.variant,
  },
})
</script>

<template>
  <ViewContainer>

    <Badge
      :variant="values.variant"
    >
      Badge
    </Badge>

    <Badge
      :variant="values.variant"
    >
      <Icon
        icon="lucide:plus"
      />
      
      Badge
    </Badge>
      
    <Badge
      :variant="values.variant"
      as-child
    >
      <a
        href="#"
      >
        <Icon
          icon="lucide:plus"
        />
      </a>
    </Badge>

  </ViewContainer>
</template>
