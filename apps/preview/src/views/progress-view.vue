<script setup lang="ts">
import { Progress } from '#centoui/components/progress'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'
import { ref, onMounted, onBeforeUnmount } from 'vue'

useApp().preview.initPreview('Progress', {})

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
    <Progress v-model="progressValue" />
  </ViewContainer>
</template>
