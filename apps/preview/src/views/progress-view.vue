<script setup lang="ts">
import { Progress } from '#centoui/components/progress'
import { Icon } from '#centoui/components/icon'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

useApp().preview.initPreview('Progress', {})

const progressValue = ref(10)
const timer = ref()

onMounted(() => {
  timer.value = setInterval(() => {
    if (progressValue.value >= 100) {
      progressValue.value = 0
    }
    else {
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
  <ViewContainer>
    <div class="flex w-full max-w-sm flex-col gap-12">
      <!-- Example 1: File Upload -->
      <div class="flex w-full flex-col gap-3">
        <div class="flex items-center gap-3">
          <div
            class="
              flex size-10 shrink-0 items-center justify-center rounded-lg
              border border-border bg-surface
            "
          >
            <Icon
              icon="lucide:image"
              class="size-5 text-muted-foreground"
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
        
        <Progress v-model="progressValue" />
      </div>

      <!-- Example 2: Storage Usage -->
      <div class="flex w-full flex-col gap-3">
        <div class="flex flex-col gap-1.5">
          <div class="flex items-center justify-between leading-none">
            <h4 class="text-sm font-medium">
              System Storage
            </h4>
            <span class="text-sm font-medium">82%</span>
          </div>
          <p class="text-xs text-muted-foreground">
            You have used 82% of your available storage. Upgrade your plan to get more space.
          </p>
        </div>

        <Progress :model-value="82" />

        <div
          class="
            flex items-center justify-between text-xs text-muted-foreground
          "
        >
          <span>205 GB used</span>
          <span>250 GB total</span>
        </div>
      </div>
    </div>
  </ViewContainer>
</template>
