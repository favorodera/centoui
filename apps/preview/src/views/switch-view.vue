<script setup lang="ts">
import { SwitchRoot, SwitchThumb, switchVariants } from '#centoui/components/switch'
import ViewContainer from '@/components/view-container.vue'
import { usePreview } from '@/composables/use-preview'
import { ref } from 'vue'

const values = usePreview('Switch', {
  size: {
    type: 'select',
    label: 'Size',
    options: Object.keys(switchVariants.variants.size),
    default: switchVariants.defaultVariants.size,
  },
})

const switchState = ref(false)
</script>

<template>
  <ViewContainer>
    <SwitchRoot
      v-model="switchState"
      :size="values.size"
    >
      <SwitchThumb />
    </SwitchRoot>
  </ViewContainer>
</template>

