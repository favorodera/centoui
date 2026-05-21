<script setup lang="ts">
import { SwitchRoot, SwitchThumb, switchVariants } from '#centoui/components/switch'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'
import { ref } from 'vue'

const values = useApp().preview.initPreview('Switch', {
  size: {
    type: 'array',
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

