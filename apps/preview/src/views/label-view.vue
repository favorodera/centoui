<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from '#centoui/components/switch'
import { Label } from '#centoui/components/label'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'
import { ref } from 'vue'

useApp().preview.initPreview('Label', {})

const switchState = ref(false)
</script>

<template>
  <ViewContainer>
    <Label
      for="switch"
    >
      Click on Switch label
    </Label>

    <SwitchRoot
      id="switch"
      v-model="switchState"
    >
      <SwitchThumb />
    </SwitchRoot>
  </ViewContainer>
</template>

