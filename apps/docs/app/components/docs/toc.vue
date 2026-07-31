<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'

type TocLink = {
  children?: TocLink[]
  depth: number
  id: string
  text: string
}

const props = withDefaults(
  defineProps<{
    items?: TocLink[]
    maxDepth?: number
  }>(),
  {
    items: () => [],
    maxDepth: 3,
  },
)

/** Tracks the currently active section identifier. */
const activeSectionId = ref('')

/** Observer cleanup function. */
let stopObserver: (() => void) | null

/**
 * Flattens the nested TOC items into a single-level array.
 * @param items The nested TOC items.
 * @returns A flattened array of TOC items.
 */
function flattenItems(items: TocLink[]): TocLink[] {
  return items.flatMap(item => [
    item,
    ...(item.children ? flattenItems(item.children) : []),
  ])
}

/** Computed property that flattens and filters TOC items based on maxDepth. */
const flattenedItems = computed(() => {
  return flattenItems(props.items).filter(item => item.depth <= props.maxDepth)
})

onMounted(async () => {
  await nextTick()

  // Find all actual DOM nodes for our filtered headings
  const elements = flattenedItems.value
    .map(item => document.querySelector(`#${item.id}`))
    .filter((element): element is HTMLElement => element !== null)

  if (elements.length === 0) return

  // Track the intersecting states of all headings
  const visibleHeadingsMap = new Map<string, IntersectionObserverEntry>()

  const { stop } = useIntersectionObserver(
    elements,
    (entries) => {
      // Update our map with the latest entry states
      for (const entry of entries) {
        visibleHeadingsMap.set(entry.target.id, entry)
      }

      // Filter to find only the elements currently inside the rootMargin box
      const activeEntries = [...visibleHeadingsMap.values()].filter(entry => entry.isIntersecting)

      // If multiple items intersect, select the one closest to the top of the viewport
      if (activeEntries.length > 0) {
        let topElement = activeEntries[0]!
        for (const currentEntry of activeEntries) {
          if (currentEntry.boundingClientRect.top < topElement.boundingClientRect.top) {
            topElement = currentEntry
          }
        }
        activeSectionId.value = topElement.target.id
      }
    },
    {
      rootMargin: '-80px 0px -70% 0px',
      threshold: 0,
    },
  )

  stopObserver = stop
})

onUnmounted(() => {
  if (stopObserver) stopObserver()
})
</script>

<template>
  <nav
    class="
      text-[0.8em] text-muted-foreground flex flex-col gap-2
      inset-bs-(--header-height) sticky pbs-6
    "
    data-not-prose="true"
  >
    <h3>On this page</h3>

    <ul class="space-y-2">
      <li
        v-for="item in flattenedItems"
        :key="item.id"
      >
        <NuxtLink
          :to="`#${item.id}`"
          :data-active="activeSectionId === item.id"
          class="
            transition-colors

            hover:text-foreground

            data-[active=true]:text-primary data-[active=true]:font-medium
          "
          :style="{
            paddingInlineStart: `${Math.max(0, (item.depth - 2) * 16)}px`,
          }"
        >
          {{ item.text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
