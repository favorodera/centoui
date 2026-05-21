<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { useApp } from '@/composables/use-app'
import { Icon } from '@iconify/vue'
import PropsControl from '@/components/props-control.vue'

const { preview, navigation, models } = useApp()
</script>

<template>
  <div class="grid size-full grid-cols-[1fr_auto]">

    <main class="grid size-full place-items-center">
      <slot />
    </main>
   
    <!-- Props Panel (mobile: overlay, desktop: sidebar)-->
    <aside
      v-if="preview.hasProps && preview.schema"
      class="
        fixed inset-y-0 right-0 z-50 flex w-72 shrink-0 flex-col border-l
        border-border bg-surface transition-transform
        md:relative md:inset-auto md:translate-x-0
      "
      :class="models.propsPanelModel.value ? 'translate-x-0' : `
        translate-x-full
        md:translate-x-0
      `"
    >

      <div
        class="
          flex h-11 shrink-0 items-center justify-between border-b border-border
          px-3
        "
      >
        <h2 class="text-xs font-semibold">
          {{ navigation.activeComponentLabel }} Props
        </h2>

        <Button
          size="xs"
          variant="ghost"
          square
          class="md:hidden"
          aria-label="Close props panel"
          @click="models.propsPanelModel.value = false"
        >
          <Icon icon="lucide:x" />
        </Button>
      </div>

      <div class="flex-1 overflow-auto p-3">
        <PropsControl
          :schema="preview.schema.value"
          :values="preview.values.value"
          @update:values="preview.updateValues"
        />
      </div>

    </aside>

    <!-- Mobile overlay backdrop -->
    <div
      v-if="preview.hasProps && models.propsPanelModel.value"
      class="
        fixed inset-0 z-20 bg-overlay
        md:hidden
      "
      @click="models.propsPanelModel.value = false"
    />
  </div>
</template>
