<script setup lang="ts">
import { Switch } from '#centoui/components/switch'
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

    <Switch
      id="switch"
      v-model="switchState"
    />
  </ViewContainer>
</template>

