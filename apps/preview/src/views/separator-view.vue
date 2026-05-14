<script setup lang="ts">
import { Separator, separatorVariants } from '#centoui/components/separator'
import { Icon } from '@iconify/vue'
import ViewContainer from '@/components/view-container.vue'
import { usePreview } from '@/composables/use-preview'

const values = usePreview('Separator', {
  orientation: {
    type: 'select',
    label: 'Orientation',
    options: Object.keys(separatorVariants.variants.orientation),
    default: separatorVariants.defaultVariants.orientation,
  },
})
</script>

<template>
  <ViewContainer>
    <Separator
      :orientation="values.orientation"
    />

    <Separator
      :orientation="values.orientation"
    >
      <Icon icon="lucide:user" />
    </Separator>

    <Separator
      :orientation="values.orientation"
    >
      Hello
    </Separator>
  </ViewContainer>
</template>
