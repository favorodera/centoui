<script setup lang="ts">
import { onMounted } from 'vue'
import { Badge, badgeVariants } from '#centoui/components/badge'
import { Icon } from '@iconify/vue'
import { usePreview } from '../utils/use-preview'
import type { PropsSchema } from '../components/props-panel.vue'
import ViewContainer from '../components/view-container.vue'

const { values, setPreviewState } = usePreview()

const schema: PropsSchema = {
  variant: {
    type: 'select',
    label: 'Variant',
    options: Object.keys(badgeVariants.variants.variant),
    default: badgeVariants.defaultVariants.variant,
  },
  color: {
    type: 'select',
    label: 'Color',
    options: Object.keys(badgeVariants.variants.color),
    default: badgeVariants.defaultVariants.color,
  },
  size: {
    type: 'select',
    label: 'Size',
    options: Object.keys(badgeVariants.variants.size),
    default: badgeVariants.defaultVariants.size,
  },
}

onMounted(() => {
  setPreviewState('Badge', schema)
})
</script>

<template>
  <ViewContainer>

    <Badge
      :variant="values.variant"
      :color="values.color"
      :size="values.size"
    >
      Badge
    </Badge>

    <Badge
      :variant="values.variant"
      :color="values.color"
      :size="values.size"
    >
      <Icon
        icon="lucide:plus"
      />
      
      Badge
    </Badge>
      
    <Badge
      :variant="values.variant"
      :color="values.color"
      :size="values.size"
      :square="true"
    >
      <Icon
        icon="lucide:plus"
      />
    </Badge>

  </ViewContainer>
</template>
