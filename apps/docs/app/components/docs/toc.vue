<script setup lang="ts">
type TocLink = {
  children?: TocLink[]
  depth: number
  id: string
  text: string
}

const props = defineProps<{
  items?: TocLink[]
}>()

/** Tracks the currently active section identifier based on scroll position. */
const activeSectionId = ref('')

/** Stores the stop functions for all intersection observers to ensure proper cleanup. */
const intersectionObserverStops: Array<() => void> = []

/**
 * Helper function to determine if a specific item is currently active.
 * @param itemId The identifier to check against the active state.
 * @returns True if the item is active, false otherwise.
 */
function isItemActive(itemId: string): boolean {
  return activeSectionId.value === itemId
}

onMounted(async () => {
  await nextTick()

  for (const item of props.items ?? []) {
    const headingElement: HTMLDivElement | null = document.querySelector(`#${item.id}`)

    if (headingElement) {
      const observer = useIntersectionObserver(
        headingElement,
        ([entry]) => {
          if (entry?.isIntersecting) {
            activeSectionId.value = item.id
          }
        },
        {
          rootMargin: '-40px 0px -60% 0px',
          threshold: 0,
        },
      )

      intersectionObserverStops.push(observer.stop)
    }
  }
})

onUnmounted(() => {
  for (const stop of intersectionObserverStops) {
    stop()
  }
})
</script>

<template>
  <nav
    class="
      sticky inset-bs-[calc(var(--prose-spacing)+80px)] flex flex-col gap-2
    "
    data-not-prose="true"
  >
    <h3
      class="inline-flex items-center gap-1.5 text-sm text-muted-foreground"
    >
      <Icon
        svg
        name="lucide:text-align-start"
      />
      On this page
    </h3>

    <ul>
      <li
        v-for="item in items"
        :key="item.id"
      >
        <NuxtLink
          :to="`#${item.id}`"
          :data-active="isItemActive(item.id)"
          class="
            group/toc-item text-sm text-muted-foreground transition-colors

            hover:text-foreground

            data-[active=true]:text-primary data-[active=true]:font-medium
          "
        >
          {{ item.text }}
        </NuxtLink>

        <ul>
          <li
            v-for="child in item.children"
            :key="child.id"
          >
            <NuxtLink
              :to="`#${child.id}`"
              :data-active="isItemActive(child.id)"
              class="
                group/toc-item text-sm text-muted-foreground transition-colors

                hover:text-foreground

                data-[active=true]:text-primary data-[active=true]:font-medium
              "
              :style="{ paddingInlineStart: `${10 * (item.depth + 1)}px` }"
            >
              {{ child.text }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
