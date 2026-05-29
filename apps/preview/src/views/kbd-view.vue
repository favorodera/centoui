<script setup lang="ts">
import { Kbd, kbdVariants, KbdGroup } from '#centoui/components/kbd'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Kbd', {
  size: {
    type: 'array',
    label: 'Size',
    options: Object.keys(kbdVariants.variants.size),
    default: kbdVariants.defaultVariants.size,
  },
})
</script>

<template>
  <ViewContainer>
    <Kbd
      :size="values.size"
    >
      ⌘
    </Kbd>

    <Kbd
      :size="values.size"
    >
      Ctrl
    </Kbd>

    <KbdGroup>
      <Kbd :size="values.size">
        Ctrl
      </Kbd>

      <Kbd :size="values.size">
        C
      </Kbd>
    </KbdGroup>
  </ViewContainer>
</template>
