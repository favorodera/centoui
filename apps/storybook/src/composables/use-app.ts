import { useClipboard, useDark, useStorage, useToggle } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStoryStore } from '@/stores/story-store'
import rawDefaultTheme from '../../../../packages/core/src/theme.css?raw'

/** Determines whether the control panel is visible. */
const controlPanelModel = ref(false)

/** Controls visibility of the theme selection popover. */
const themePopoverModel = ref(false)

/** Reactive boolean representing whether dark mode is active. */
const isDarkMode = useDark()

/** Toggles between light and dark color modes. */
const toggleColorMode = useToggle(isDarkMode)

/**
 * Main composable for application-wide state and behavior.
 * @returns Application helper object with color mode, navigation, and story utilities.
 */
export function useApp() {
  return {
    colorMode: {
      isDarkMode,
      toggleColorMode,
    },
    models: {
      controlPanelModel,
      themePopoverModel,
    },
    navigation: navigation(),
    story: story(),
    theme: theme(),
  }
}

/**
 * Manages navigation state and functionality for components.
 * @returns Navigation object with computed properties and navigation methods.
 */
function navigation() {
  const router = useRouter()
  const route = useRoute()

  /** List of all available components with their paths and labels. */
  const components = computed(() => {
    const result = router
      .getRoutes()
      .filter((route) => {
        return route.name && route.path !== '/' && !route.path.includes(':')
      })
      .map((route) => {
        const label = String(route.name)
          .split('-')
          .map(part => part.charAt(0).toUpperCase() + part.slice(1))
          .join(' ')
        return { label, path: route.path }
      })

    return result
      .toSorted((componentA, componentB) => componentA.label.localeCompare(componentB.label))
  })

  /** Index of the currently active component. */
  const activeComponentIndex = computed(() => {
    return components
      .value
      .findIndex(component => component.path === route.path)
  })

  /** Label of the currently active component. */
  const activeComponentLabel = computed(() => {
    return components.value[activeComponentIndex.value]?.label ?? ''
  })

  /** Whether the previous component is available. */
  const canGoPrev = computed(() => activeComponentIndex.value > 0)

  /** Whether the next component is available. */
  const canGoNext = computed(() => activeComponentIndex.value < components.value.length - 1)

  /**
   * Navigate to a specific component path.
   * @param path The component path to navigate to.
   */
  function goTo(path: string) {
    router.push(path)
  }

  /**
   * Navigate to the previous component if available.
   */
  function goPrev() {
    const target = components.value[activeComponentIndex.value - 1]
    if (target) router.push(target.path)
  }

  /**
   * Navigate to the next component if available.
   */
  function goNext() {
    const target = components.value[activeComponentIndex.value + 1]
    if (target) router.push(target.path)
  }

  return {
    activeComponentIndex,
    activeComponentLabel,
    canGoNext,
    canGoPrev,
    components,
    goNext,
    goPrev,
    goTo,
  }
}

/**
 * Provides story store helpers for component story controls.
 * @returns Story store helper.
 */
function story() {
  const store = useStoryStore()
  const { hasProps, schema, values } = storeToRefs(store)

  return {
    hasProps,
    schema,
    setStoryState: store.setStoryState,
    updateValues: store.updateValues,
    values,
  }
}

/**
 * Manages theme customization state and utilities.
 * @returns Theme helpers for custom theme storage, copy, reset, and state tracking.
 */
function theme() {
  /** ID used for the injected custom theme style element. */
  const customThemeStyleId = 'centoui-custom-theme'

  const { copied, copy } = useClipboard()

  /** Stored custom theme CSS content persisted in local storage. */
  const customTheme = useStorage('centoui-custom-theme', rawDefaultTheme)

  /** Whether the stored theme has been modified from the default theme. */
  const hasCustomTheme = computed(() => customTheme.value.trim() !== rawDefaultTheme.trim())

  /** Reset the custom theme back to the default theme and remove the injected style element. */
  function resetTheme() {
    customTheme.value = rawDefaultTheme
    document.querySelector(`#${customThemeStyleId}`)?.remove()
  }

  return {
    copyTheme: () => copy(customTheme.value),
    customTheme,
    customThemeStyleId,
    hasCustomTheme,
    isThemeCopied: copied,
    rawDefaultTheme,
    resetTheme,
  }
}
