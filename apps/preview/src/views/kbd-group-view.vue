<script setup lang="ts">
import { onMounted } from 'vue'
import { Kbd, kbdVariants } from '#centoui/components/kbd'
import { KbdGroup } from '#centoui/components/kbd-group'
import { usePreview } from '../utils/use-preview'
import type { PropsSchema } from '../components/props-panel.vue'
import ViewContainer from '../components/view-container.vue'

const { values, setPreviewState } = usePreview()

const schema: PropsSchema = {
  kbdSize: {
    type: 'select',
    label: 'Kbd Size',
    options: Object.keys(kbdVariants.variants.size),
    default: kbdVariants.defaultVariants.size,
  },
  kbdColor: {
    type: 'select',
    label: 'Kbd Color',
    options: Object.keys(kbdVariants.variants.color),
    default: kbdVariants.defaultVariants.color,
  },
  kbdVariant: {
    type: 'select',
    label: 'Kbd Variant',
    options: Object.keys(kbdVariants.variants.variant),
    default: kbdVariants.defaultVariants.variant,
  },
}

onMounted(() => {
  setPreviewState('Kbd Group', schema)
})
</script>

<template>
  <ViewContainer>
    <KbdGroup>
      <Kbd
        :size="values.kbdSize"
        :color="values.kbdColor"
        :variant="values.kbdVariant"
      >
        ⌘
      </Kbd>
      <Kbd
        :size="values.kbdSize"
        :color="values.kbdColor"
        :variant="values.kbdVariant"
      >
        K
      </Kbd>
    </KbdGroup>

    <KbdGroup>
      <Kbd
        :size="values.kbdSize"
        :color="values.kbdColor"
        :variant="values.kbdVariant"
      >
        Ctrl
      </Kbd>

      <Kbd
        :size="values.kbdSize"
        :color="values.kbdColor"
        :variant="values.kbdVariant"
      >
        C
      </Kbd>
    </KbdGroup>
  </ViewContainer>
</template>
