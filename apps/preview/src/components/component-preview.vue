<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { useDark, useToggle, useStorage } from '@vueuse/core'
import { usePreview } from '../utils/use-preview'
import PropsPanel from './props-panel.vue'

const router = useRouter()
const route = useRoute()
const { componentName, schema, values } = usePreview()

/**
 * Handles dark mode state and persistence using VueUse.
 */
const isDark = useDark()
const toggleDarkMode = useToggle(isDark)

/**
 * Tracks the open/closed state of the navigation sidebar.
 * Persisted in localStorage for a consistent user experience.
 */
const isSidebarVisible = useStorage('centoui-preview-sidebar', true)

/**
 * Discovers and processes all available component routes for navigation.
 * Normalizes component names by removing hyphens and sorts them alphabetically.
 */
const componentList = computed(() => {
  return router
    .getRoutes()
    .filter(routeItem => routeItem.name && routeItem.path !== '/' && !routeItem.path.includes(':'))
    .map((routeItem) => {
      const name = routeItem.name as string
      // Normalize name: remove hyphens and capitalize
      const label = (routeItem.meta?.label as string)
        ?? name.split('-').map(pattern => pattern.charAt(0).toUpperCase() + pattern.slice(1)).join(' ')

      return {
        name,
        path: routeItem.path,
        label,
      }
    })
    .sort((a, b) => a.label.localeCompare(b.label))
})

/**
 * The index of the currently active component in the navigation list.
 */
const activeComponentIndex = computed(() => {
  return componentList.value.findIndex(component => component.path === route.path)
})

/**
 * Navigates to the next or previous component in the list.
 *
 * @param delta - The number of steps to move (e.g., -1 for previous, 1 for next)
 */
function navigateToComponent(delta: number) {
  const nextComponent = componentList.value[activeComponentIndex.value + delta]
  if (nextComponent) {
    router.push(nextComponent.path)
  }
}

/**
 * Toggles the visibility of the component navigation sidebar.
 */
function toggleSidebar() {
  isSidebarVisible.value = !isSidebarVisible.value
}

/**
 * Updates the preview state values.
 * Used for sync with the PropsPanel v-model.
 *
 * @param newValues - The updated values object
 */
function updatePreviewValues(newValues: Record<string, unknown>) {
  values.value = newValues
}

/**
 * Global keyboard listener for navigation and UI toggles.
 */
function handleGlobalKeydown(event: KeyboardEvent) {
  const target = event.target as HTMLElement
  const isInputActive = ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) || target.isContentEditable

  if (isInputActive) return

  // Left/Right arrow navigation between components
  if (event.key === 'ArrowLeft') {
    navigateToComponent(-1)
  }
  if (event.key === 'ArrowRight') {
    navigateToComponent(1)
  }

  // 'b' key to toggle sidebar (common shortcut)
  if (event.key === 'b' && (event.ctrlKey || event.metaKey)) {
    event.preventDefault()
    toggleSidebar()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleGlobalKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalKeydown)
})
</script>

<template>
  <div
    class="
      flex h-screen w-full overflow-hidden bg-background font-sans
      transition-colors
    "
  >
    <!-- SIDEBAR -->
    <aside
      v-if="isSidebarVisible"
      class="flex w-64 shrink-0 flex-col border-r border-muted bg-surface"
    >
      <!-- Sidebar Header -->
      <div
        class="
          flex h-12 items-center justify-between border-b border-muted px-4
        "
      >
        <span
          class="
            text-[10px] font-bold tracking-widest text-muted-foreground
            uppercase
          "
        >
          Components
        </span>
        <span
          class="
            rounded-sm bg-secondary px-1.5 py-0.5 text-[10px]
            text-muted-foreground tabular-nums
          "
        >
          {{ componentList.length }}
        </span>
      </div>

      <!-- Navigation List -->
      <nav class="flex-1 space-y-0.5 overflow-y-auto p-2">
        <RouterLink
          v-for="component in componentList"
          :key="component.path"
          :to="component.path"
          class="
            group flex items-center gap-3 rounded-sm px-3 py-2 text-sm
            font-medium transition-all
          "
          :class="[
            $route.path === component.path
              ? 'bg-primary text-primary-foreground'
              : `
                text-muted-foreground
                hover:bg-secondary hover:text-foreground
              `
          ]"
        >
          <Icon
            icon="lucide:box"
            class="
              size-4 transition-transform
              group-hover:scale-110
            "
          />
          <span class="truncate">{{ component.label }}</span>
        </RouterLink>
      </nav>

      <!-- Sidebar Footer -->
      <div class="border-t border-muted p-4">
        <div
          class="
            flex items-center gap-2 text-[10px] text-muted-foreground opacity-60
          "
        >
          <kbd
            class="
              rounded-sm border border-muted bg-secondary px-1.5 py-0.5
              font-mono
            "
          >
            ←
          </kbd>
          <kbd
            class="
              rounded-sm border border-muted bg-secondary px-1.5 py-0.5
              font-mono
            "
          >
            →
          </kbd>
          <span>to navigate</span>
        </div>
      </div>
    </aside>

    <!-- MAIN CONTENT -->
    <div class="relative flex h-full min-w-0 flex-1 flex-col">
      <!-- Top Header Bar -->
      <header
        class="
          z-10 flex h-12 shrink-0 items-center justify-between border-b
          border-muted bg-surface px-4
        "
      >
        <button
          type="button"
          class="
            rounded-sm p-1.5 text-muted-foreground transition-colors
            outline-none
            hover:bg-secondary hover:text-foreground
            focus-visible:ring-1 focus-visible:ring-primary
          "
          :title="isSidebarVisible ? 'Hide Sidebar (Ctrl+B)' : 'Show Sidebar (Ctrl+B)'"
          @click="toggleSidebar"
        >
          <Icon
            :icon="isSidebarVisible ? 'lucide:panel-left-close' : 'lucide:panel-left-open'"
            class="size-4"
          />
        </button>

        <div class="flex shrink-0 items-center gap-2">
          <!-- Dark Mode Toggle -->
          <button
            type="button"
            class="
              rounded-sm p-1.5 text-muted-foreground transition-colors
              outline-none
              hover:bg-secondary hover:text-foreground
              focus-visible:ring-1 focus-visible:ring-primary
            "
            @click="toggleDarkMode()"
          >
            <Icon
              :icon="isDark ? 'lucide:sun' : 'lucide:moon'"
              class="size-4"
            />
          </button>

          <div class="mx-1 h-4 w-px bg-muted" />

          <!-- Component Pagination Controls -->
          <div class="flex items-center gap-1">
            <button
              type="button"
              :disabled="activeComponentIndex <= 0"
              class="
                rounded-sm p-1.5 text-muted-foreground transition-colors
                outline-none
                hover:bg-secondary hover:text-foreground
                disabled:pointer-events-none disabled:opacity-30
              "
              @click="navigateToComponent(-1)"
            >
              <Icon
                icon="lucide:chevron-left"
                class="size-4"
              />
            </button>
            <button
              type="button"
              :disabled="activeComponentIndex >= componentList.length - 1"
              class="
                rounded-sm p-1.5 text-muted-foreground transition-colors
                outline-none
                hover:bg-secondary hover:text-foreground
                disabled:pointer-events-none disabled:opacity-30
              "
              @click="navigateToComponent(1)"
            >
              <Icon
                icon="lucide:chevron-right"
                class="size-4"
              />
            </button>
          </div>
        </div>
      </header>

      <!-- Workspace Area -->
      <div class="flex min-h-0 flex-1 overflow-hidden">
        <!-- Canvas Background Layer -->
        <main
          class="relative flex flex-1 flex-col overflow-auto bg-background"
        >
          <!-- Actual View Slot -->
          <slot />
        </main>

        <!-- Properties Panel (Inline sidebar) -->
        <PropsPanel
          v-if="schema"
          :component-name="componentName"
          :schema="schema"
          :values="values"
          @update:values="updatePreviewValues"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-thin::-webkit-scrollbar {
  width: 4px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: var(--muted);
  border-radius: 2px;
}
</style>
