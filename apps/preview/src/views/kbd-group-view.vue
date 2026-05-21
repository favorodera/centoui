<script setup lang="ts">
import { Kbd, kbdVariants } from '#centoui/components/kbd'
import { KbdGroup } from '#centoui/components/kbd-group'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Kbd Group', {
  kbdSize: {
    type: 'array',
    label: 'Kbd Size',
    options: Object.keys(kbdVariants.variants.size),
    default: kbdVariants.defaultVariants.size,
  },
})
</script>

<template>
  <ViewContainer>
    <KbdGroup>
      <Kbd
        :size="values.kbdSize"
      >
        ⌘
      </Kbd>
      <Kbd
        :size="values.kbdSize"
      >
        K
      </Kbd>
    </KbdGroup>

    <KbdGroup>
      <Kbd
        :size="values.kbdSize"
      >
        Ctrl
      </Kbd>

      <Kbd
        :size="values.kbdSize"
      >
        C
      </Kbd>
    </KbdGroup>
  </ViewContainer>
</template>
