<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import { onClickOutside, onKeyStroke, useDark, useSwipe, useToggle } from '@vueuse/core'
import PropsPanel from './props-panel.vue'
import { usePreview } from '../utils/use-preview'

type ComponentOption = {
  path: string
  label: string
}

const router = useRouter()
const route = useRoute()
const { schema, values, hasProps, updateValues } = usePreview()

const dropdownRef = ref<HTMLElement | null>(null)
const arenaRef = ref<HTMLElement | null>(null)
const isSelectOpen = ref(false)
const isPropsPanelOpen = ref(false)

const isDark = useDark()
const toggleDarkMode = useToggle(isDark)

/** Creates route options for the custom component selector. */
const components = computed<ComponentOption[]>(() => {
  return router
    .getRoutes()
    .filter(routeItem => routeItem.name && routeItem.path !== '/' && !routeItem.path.includes(':'))
    .map((routeItem) => {
      const routeName = routeItem.name as string
      const label = routeName
        .split('-')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ')

      return { path: routeItem.path, label }
    })
    .sort((a, b) => a.label.localeCompare(b.label))
})

const activeIndex = computed(() => {
  return components.value.findIndex(item => item.path === route.path)
})

const selectedLabel = computed(() => {
  return components.value[activeIndex.value]?.label ?? 'Select'
})

function goTo(path: string) {
  isSelectOpen.value = false
  router.push(path)
}

/** Moves to the previous or next component by index. */
function navigateByStep(step: number) {
  const target = components.value[activeIndex.value + step]
  if (target) {
    router.push(target.path)
  }
}

/** Avoids keyboard navigation while inputs are active. */
function shouldIgnoreKeyboardEvent(event: KeyboardEvent) {
  const element = event.target as HTMLElement | null
  if (!element) {
    return false
  }

  return ['INPUT', 'TEXTAREA', 'SELECT'].includes(element.tagName) || element.isContentEditable
}

onKeyStroke(['ArrowLeft', 'ArrowRight'], (event) => {
  if (shouldIgnoreKeyboardEvent(event)) {
    return
  }

  if (event.key === 'ArrowLeft') {
    navigateByStep(-1)
  }
  if (event.key === 'ArrowRight') {
    navigateByStep(1)
  }
})

/** Swipe gestures provide component navigation on touch devices. */
const { direction } = useSwipe(arenaRef, {
  threshold: 36,
})

watch(direction, (currentDirection) => {
  if (currentDirection === 'left') {
    navigateByStep(1)
  }
  if (currentDirection === 'right') {
    navigateByStep(-1)
  }
})

watch(() => route.path, () => {
  isSelectOpen.value = false
  isPropsPanelOpen.value = false
})

onClickOutside(dropdownRef, () => {
  isSelectOpen.value = false
})
</script>

<template>
  <div class="relative flex h-dvh w-full flex-col bg-background">
    <header
      class="
        sticky top-0 z-20 flex h-12 items-center justify-between border-b
        border-border bg-background/90 px-3 backdrop-blur-sm
        sm:px-4
      "
    >
      <div
        ref="dropdownRef"
        class="relative"
      >
        <button
          type="button"
          class="
            flex h-8 items-center gap-2 rounded-sm border border-border
            bg-surface px-2 text-xs
          "
          @click="isSelectOpen = !isSelectOpen"
        >
          <span
            class="
              max-w-44 truncate
              sm:max-w-64
            "
          >
            {{ selectedLabel }}
          </span>
          <span
            class="rounded-sm bg-muted px-1.5 py-0.5 text-[10px] tabular-nums"
          >
            {{ components.length }}
          </span>
          <Icon icon="lucide:chevrons-up-down" />
        </button>

        <div
          v-if="isSelectOpen"
          class="
            absolute left-0 mt-1 w-56 rounded-sm border border-border bg-surface
            p-1 shadow-lg
          "
        >
          <button
            v-for="item in components"
            :key="item.path"
            type="button"
            class="
              flex w-full items-center justify-between rounded-sm px-2 py-1.5
              text-left text-xs
              hover:bg-muted
            "
            @click="goTo(item.path)"
          >
            <span>{{ item.label }}</span>
            <Icon
              v-if="item.path === route.path"
              icon="lucide:check"
              class="text-primary"
            />
          </button>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button
          v-if="hasProps && schema"
          type="button"
          class="
            flex h-8 items-center gap-1 rounded-sm border border-border
            bg-surface px-2 text-xs
            lg:hidden
          "
          @click="isPropsPanelOpen = !isPropsPanelOpen"
        >
          <Icon :icon="isPropsPanelOpen ? 'lucide:panel-right-close' : 'lucide:panel-right-open'" />
          Props
        </button>

        <button
          type="button"
          class="
            flex size-8 items-center justify-center rounded-sm border
            border-border bg-surface text-xs
          "
          @click="toggleDarkMode()"
        >
          <Icon :icon="isDark ? 'lucide:sun' : 'lucide:moon'" />
        </button>
      </div>
    </header>

    <div class="flex min-h-0 flex-1">
      <main
        ref="arenaRef"
        class="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-auto"
      >
        <div class="flex min-h-0 flex-1 items-center justify-center">
          <slot />
        </div>

        <div class="flex justify-center px-3 py-2">
          <p
            class="
              inline-flex rounded-full border border-border bg-surface px-3 py-1
              text-[11px] text-muted-foreground
            "
          >
            <span class="lg:hidden">Swipe left or right to paginate</span>
            <span
              class="
                hidden
                lg:inline
              "
            >
              Use left and right arrow keys to paginate
            </span>
          </p>
        </div>
      </main>

      <aside
        v-if="hasProps && schema"
        class="
          hidden min-h-0 shrink-0 border-l border-border bg-surface
          lg:flex lg:w-88 lg:flex-col
        "
      >
        <div class="border-b border-border px-4 py-3">
          <p class="text-xs font-semibold tracking-wide uppercase">
            Props
          </p>
        </div>

        <div
          class="min-h-0 flex-1 overflow-auto border-b border-border px-4 py-3"
        >
          <PropsPanel
            :schema="schema"
            :values="values"
            @update:values="updateValues"
          />
        </div>

      </aside>
    </div>

    <div
      v-if="hasProps && schema && isPropsPanelOpen"
      class="
        absolute inset-0 z-20 bg-overlay backdrop-blur-[1px]
        lg:hidden
      "
      @click.self="isPropsPanelOpen = false"
    >
      <div
        class="
          absolute inset-y-0 right-0 w-[min(22rem,92vw)] border-l border-border
          bg-surface shadow-2xl
        "
      >
        <div class="flex h-full min-h-0 flex-col">
          <div
            class="
              flex items-center justify-between gap-2 border-b border-border p-3
            "
          >
            <p class="text-xs font-semibold tracking-wide uppercase">
              Props
            </p>
            <button
              type="button"
              class="
                flex size-8 items-center justify-center rounded-sm border
                border-border bg-surface text-xs
              "
              @click="isPropsPanelOpen = false"
            >
              <Icon icon="lucide:x" />
            </button>
          </div>

          <div class="min-h-0 flex-1 overflow-auto p-3">
            <PropsPanel
              :schema="schema"
              :values="values"
              @update:values="updateValues"
            />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
