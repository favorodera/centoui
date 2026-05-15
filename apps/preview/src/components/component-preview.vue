<script lang="ts">
import defaultThemeCss from '../../../../packages/core/src/defaults/centoui.css?raw'
</script>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import {
  onClickOutside,
  onKeyStroke,
  useClipboard,
  useDark,
  useStorage,
  useSwipe,
  useToggle,
} from '@vueuse/core'
import PropsPanel from './props-panel.vue'
import { usePreviewStore } from '@/stores/preview-store'
import { storeToRefs } from 'pinia'

type ComponentOption = {
  path: string
  label: string
}

const router = useRouter()
const route = useRoute()
const { schema, values, hasProps } = storeToRefs(usePreviewStore())
const { updateValues } = usePreviewStore()

const dropdownRef = ref<HTMLElement | null>(null)
const arenaRef = ref<HTMLElement | null>(null)
const themeDropdownRef = ref<HTMLElement | null>(null)

const isSelectOpen = ref(false)
const isPropsPanelOpen = ref(false)
const isThemeOpen = ref(false)

const isDark = useDark()
const toggleDarkMode = useToggle(isDark)

// Theme injection

const customThemeStyleTagId = 'cento-custom-theme'

const customThemeCss = useStorage(
  'cento-custom-theme',
  defaultThemeCss,
)

const hasCustomTheme = computed(() => {
  return customThemeCss.value.trim() !== defaultThemeCss.trim()
})

const { copy, copied } = useClipboard()

function resetCustomTheme() {
  customThemeCss.value = defaultThemeCss

  document.getElementById(customThemeStyleTagId)?.remove()
}

function copyCustomTheme() {
  copy(customThemeCss.value)
}

watch(
  customThemeCss,
  (value) => {
    if (value.trim() === defaultThemeCss.trim()) {
      document.getElementById(customThemeStyleTagId)?.remove()
      return
    }

    let styleTag = document.getElementById(customThemeStyleTagId) as HTMLStyleElement | null

    if (!styleTag) {
      styleTag = document.createElement('style')
      styleTag.id = customThemeStyleTagId
      document.head.appendChild(styleTag)
    }

    styleTag.textContent = value
  },
  { immediate: true },
)

// Component navigation

const components = computed<ComponentOption[]>(() => {
  return router
    .getRoutes()
    .filter(r => r.name && r.path !== '/' && !r.path.includes(':'))
    .map((r) => {
      const label = (r.name as string)
        .split('-')
        .map(p => p.charAt(0).toUpperCase() + p.slice(1))
        .join(' ')
      return { path: r.path, label }
    })
    .sort((a, b) => a.label.localeCompare(b.label))
})

const activeIndex = computed(() => components.value.findIndex(i => i.path === route.path))
const selectedLabel = computed(() => components.value[activeIndex.value]?.label ?? 'Select')

function goTo(path: string) {
  isSelectOpen.value = false
  router.push(path)
}

function navigateByStep(step: number) {
  const target = components.value[activeIndex.value + step]
  if (target) router.push(target.path)
}

function shouldIgnoreKeyboardEvent(e: KeyboardEvent) {
  const el = e.target as HTMLElement | null
  return !!el && (['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName) || el.isContentEditable)
}

onKeyStroke(['ArrowLeft', 'ArrowRight'], (e) => {
  if (shouldIgnoreKeyboardEvent(e)) return
  navigateByStep(e.key === 'ArrowLeft' ? -1 : 1)
})

const { direction } = useSwipe(arenaRef, { threshold: 36 })
watch(direction, d => navigateByStep(d === 'left' ? 1 : -1))

watch(() => route.path, () => {
  isSelectOpen.value = false
  isPropsPanelOpen.value = false
})

onClickOutside(dropdownRef, () => {
  isSelectOpen.value = false
})
onClickOutside(themeDropdownRef, () => {
  isThemeOpen.value = false
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
            bg-surface px-2 text-xs outline-none
            focus-visible:ring-2 focus-visible:ring-ring
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
            absolute left-0 mt-1 w-56 rounded-sm border border-border
            bg-surface-raised p-1 shadow-lg
          "
        >
          <button
            v-for="item in components"
            :key="item.path"
            type="button"
            class="
              flex w-full items-center justify-between rounded-sm px-2 py-1.5
              text-left text-xs
              hover:bg-accent
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
            bg-surface px-2 text-xs outline-none
            focus-visible:ring-2 focus-visible:ring-ring
            lg:hidden
          "
          @click="isPropsPanelOpen = !isPropsPanelOpen"
        >
          <Icon :icon="isPropsPanelOpen ? 'lucide:panel-right-close' : 'lucide:panel-right-open'" />
          Props
        </button>

        <!-- Theme injector -->
        <div
          ref="themeDropdownRef"
          class="relative"
        >
          <button
            type="button"
            :class="[
              `
                flex size-8 items-center justify-center rounded-sm border
                text-xs outline-none
              `,
              'focus-visible:ring-2 focus-visible:ring-ring',
              hasCustomTheme ? 'border-ring bg-ring/10 text-ring' : `
                border-border bg-surface
              `,
            ]"
            @click="isThemeOpen = !isThemeOpen"
          >
            <Icon icon="lucide:swatch-book" />
          </button>

          <Transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="opacity-0 translate-y-1 scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-if="isThemeOpen"
              class="
                absolute right-0 mt-1 w-[min(26rem,92vw)] rounded-sm border
                border-border bg-surface-raised shadow-xl
              "
            >
              <div
                class="
                  flex items-center justify-between border-b border-border px-3
                  py-2
                "
              >
                <p class="text-xs font-semibold">
                  Custom Theme
                </p>
                <button
                  v-if="hasCustomTheme"
                  type="button"
                  class="
                    flex h-6 items-center gap-1 rounded-sm border border-border
                    px-2 text-[11px] text-muted-foreground
                    hover:border-error hover:text-error
                  "
                  @click="resetCustomTheme"
                >
                  <Icon
                    icon="lucide:rotate-ccw"
                    class="size-3"
                  />
                  Reset
                </button>
              </div>

              <div class="p-3">
                <textarea
                  v-model="customThemeCss"
                  spellcheck="false"
                  rows="10"
                  class="
                    w-full resize-none rounded-sm border border-input bg-muted
                    px-3 py-2 font-mono text-[11px] leading-relaxed
                    text-foreground outline-none
                    placeholder:text-muted-foreground
                    focus:border-ring focus:ring-1 focus:ring-ring
                  "
                />
              </div>

              <div class="border-t border-border p-3">
                <button
                  type="button"
                  class="
                    flex h-8 w-full items-center justify-center gap-1.5
                    rounded-sm border border-border bg-surface text-[11px]
                    font-medium
                    hover:bg-accent
                  "
                  @click="copyCustomTheme"
                >
                  <Icon
                    :icon="copied ? 'lucide:check' : 'lucide:copy'"
                    class="size-3"
                  />
                  {{ copied ? 'Copied to clipboard' : 'Copy theme' }}
                </button>
              </div>
            </div>
          </Transition>
        </div>

        <button
          type="button"
          class="
            flex size-8 items-center justify-center rounded-sm border
            border-border bg-surface text-xs outline-none
            focus-visible:ring-2 focus-visible:ring-ring
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
