<script setup lang="ts">
import { ProgressBarRoot, ProgressBarIndicator } from '#centoui/components/progress-bar'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'
import { ref, onMounted, onBeforeUnmount } from 'vue'

useApp().preview.initPreview('ProgressBar', {})

const progressValue = ref(10)
const timer = ref()

onMounted(() => {
  timer.value = setInterval(() => {
    if (progressValue.value === 100) {
      progressValue.value = 10
    }
    else {
      progressValue.value += 30
    }
  }, 2000)
})

onBeforeUnmount(() => {
  clearTimeout(timer.value)
})
</script>

<template>
  <ViewContainer>
    <ProgressBarRoot v-model="progressValue">
      <ProgressBarIndicator />
    </ProgressBarRoot>
  </ViewContainer>
</template>
