<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { ButtonGroup } from '#centoui/components/button-group'
import PropsControl from '@/components/props-control.vue'
import { useApp } from '@/composables/use-app'
import { Icon } from '#centoui/components/icon'

const { preview, navigation, models } = useApp()

const socials = [
  {
    name: 'GitHub',
    icon: 'lucide:github',
    href: 'https://github.com/favorodera/centoui',
  },
  {
    name: 'Twitter',
    icon: 'lucide:twitter',
    href: 'https://x.com/favorodera',
  },
]
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

      <div
        class="
          flex h-11 shrink-0 items-center justify-between border-t border-border
          px-3
        "
      >

        <ButtonGroup class="w-full">
          <Button
            v-for="social in socials"
            :key="social.name"
            variant="outline"
            size="sm"
            as-child
            class="flex-1"
          >
            <a
              :href="social.href"
              target="_blank"
            >
              <Icon :icon="social.icon" />
              {{ social.name }}
            </a>
          </Button>
        </ButtonGroup>
         
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
