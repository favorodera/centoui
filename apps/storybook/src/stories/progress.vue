<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { Icon } from '#centoui/components/icon'
import { Progress } from '#centoui/components/progress'
import { useStory } from '@/composables/use-story'

useStory('Progress', {})

const progressValue = ref(10)
const timer = ref()

onMounted(() => {
  timer.value = setInterval(() => {
    if (progressValue.value >= 100) {
      progressValue.value = 0
    } else {
      progressValue.value += 15
    }
  }, 1000)
})

onBeforeUnmount(() => {
  clearTimeout(timer.value)
})

const uploadedSize = computed(() => {
  return (2.4 * (progressValue.value / 100)).toFixed(1)
})
</script>

<template>
  <div class="flex inline-full flex-col gap-3">
    <div class="flex items-center gap-3">
      <div
        class="
          flex block-10 inline-10 shrink-0 items-center justify-center
          rounded-lg border border-border bg-elevated
        "
      >
        <Icon
          name="lucide:image"
          class="block-5 inline-5 text-muted-foreground"
        />
      </div>

      <div class="flex flex-1 flex-col justify-center gap-1.5">
        <div class="flex items-center justify-between leading-none">
          <span class="text-sm font-medium">avatar-update.jpg</span>
          <span class="text-xs text-muted-foreground">{{ progressValue }}%</span>
        </div>

        <div
          class="
            flex items-center justify-between text-xs leading-none
            text-muted-foreground
          "
        >
          <span>{{ uploadedSize }} MB of 2.4 MB</span>
          <span>Uploading...</span>
        </div>
      </div>
    </div>

    <Progress
      id="upload"
      v-model="progressValue"
    />
  </div>
</template>
