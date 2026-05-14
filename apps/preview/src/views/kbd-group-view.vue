<script setup lang="ts">
import { Kbd, kbdVariants } from '#centoui/components/kbd'
import { KbdGroup } from '#centoui/components/kbd-group'
import ViewContainer from '@/components/view-container.vue'
import { usePreview } from '@/composables/use-preview'

const values = usePreview('Kbd Group', {
  kbdSize: {
    type: 'select',
    label: 'Kbd Size',
    options: Object.keys(kbdVariants.variants.size),
    default: kbdVariants.defaultVariants.size,
  },
  kbdVariant: {
    type: 'select',
    label: 'Kbd Variant',
    options: Object.keys(kbdVariants.variants.variant),
    default: kbdVariants.defaultVariants.variant,
  },
})
</script>

<template>
  <ViewContainer>
    <KbdGroup>
      <Kbd
        :size="values.kbdSize"
        :variant="values.kbdVariant"
      >
        ⌘
      </Kbd>
      <Kbd
        :size="values.kbdSize"
        :variant="values.kbdVariant"
      >
        K
      </Kbd>
    </KbdGroup>

    <KbdGroup>
      <Kbd
        :size="values.kbdSize"
        :variant="values.kbdVariant"
      >
        Ctrl
      </Kbd>

      <Kbd
        :size="values.kbdSize"
        :variant="values.kbdVariant"
      >
        C
      </Kbd>
    </KbdGroup>
  </ViewContainer>
</template>
