<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { ButtonGroup } from '#centoui/components/button-group'
import { Icon } from '#centoui/components/icon'
import Control from '@/components/control.vue'
import { useApp } from '@/composables/use-app'

const { models, story } = useApp()

const socials = [
  {
    href: 'https://github.com/favorodera/centoui',
    icon: 'lucide:github',
    name: 'GitHub',
  },
  {
    href: 'https://x.com/favorodera',
    icon: 'lucide:twitter',
    name: 'Twitter',
  },
]
</script>

<template>
  <div class="grid block-full inline-full grid-cols-[1fr_auto]">
    <main
      class="
        grid block-full inline-full max-block-[calc(100dvh-(--spacing(11)))]
        scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent
        place-items-center overflow-auto py-3
      "
    >
      <div
        class="
          flex inline-full max-inline-3xl flex-wrap content-center items-center
          justify-center gap-8 bg-background px-3 block-full
        "
      >
        <slot />
      </div>
    </main>

    <!-- Props Panel (mobile: overlay, desktop: sidebar)-->
    <aside
      v-if="story.hasProps && story.schema"
      class="
        fixed inset-y-0 inset-e-0 z-50 flex inline-72 shrink-0 flex-col border-s
        border-border bg-overlay transition-transform

        md:relative md:inset-auto md:translate-x-0 md:bg-elevated
      "
      :class="models.controlPanelModel.value ? 'translate-x-0' : `
        translate-x-full

        md:translate-x-0
      `"
    >
      <div
        class="
          flex block-11 shrink-0 items-center justify-between border-be
          border-border px-3
        "
      >
        <h2 class="text-xs font-semibold">
          Control
        </h2>

        <Button
          size="xs"
          variant="ghost"
          square
          class="md:hidden"
          aria-label="Close props panel"
          @click="models.controlPanelModel.value = false"
        >
          <Icon icon="lucide:x" />
        </Button>
      </div>

      <div class="flex-1 overflow-auto p-3">
        <Control
          :schema="story.schema.value"
          :values="story.values.value"
          @update:values="story.updateValues"
        />
      </div>

      <div
        class="
          flex block-11 shrink-0 items-center justify-between border-bs
          border-border px-3
        "
      >
        <ButtonGroup class="inline-full">
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
              rel="noopener noreferrer"
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
      v-if="story.hasProps && models.controlPanelModel.value"
      class="
        fixed inset-0 z-20 bg-scrim

        md:hidden
      "
      @click="models.controlPanelModel.value = false"
    />
  </div>
</template>
