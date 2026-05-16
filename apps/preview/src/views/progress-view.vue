<script setup lang="ts">
import { ProgressRoot, ProgressIndicator } from '#centoui/components/progress'
import ViewContainer from '@/components/view-container.vue'
import { usePreview } from '@/composables/use-preview'
import { ref, onMounted, onBeforeUnmount } from 'vue'

usePreview('Progress', {})

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

    <ProgressRoot v-model="progressValue">
      <ProgressIndicator />
    </ProgressRoot>

  </ViewContainer>
</template>
