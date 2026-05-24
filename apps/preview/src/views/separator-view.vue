<script setup lang="ts">
import { Separator, separatorVariants } from '#centoui/components/separator'
import { Icon } from '#centoui/components/icon'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Separator', {
  orientation: {
    type: 'array',
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
