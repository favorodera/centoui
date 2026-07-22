import type {
  NavigationMenuContentEmits as RekaNavigationMenuContentEmits,
  NavigationMenuContentProps as RekaNavigationMenuContentProps,
  NavigationMenuIndicatorProps as RekaNavigationMenuIndicatorProps,
  NavigationMenuItemProps as RekaNavigationMenuItemProps,
  NavigationMenuLinkEmits as RekaNavigationMenuLinkEmits,
  NavigationMenuLinkProps as RekaNavigationMenuLinkProps,
  NavigationMenuListProps as RekaNavigationMenuListProps,
  NavigationMenuRootEmits as RekaNavigationMenuRootEmits,
  NavigationMenuRootProps as RekaNavigationMenuRootProps,
  NavigationMenuTriggerProps as RekaNavigationMenuTriggerProps,
  NavigationMenuViewportProps as RekaNavigationMenuViewportProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const navigationMenuVariants = tv({
  slots: {
    content: '',
    indicator: '',
    item: '',
    link: '',
    list: '',
    root: '',
    sub: '',
    trigger: '',
    triggerIcon: '',
    viewport: '',
  },
})

// Components
export { default as NavigationMenuContent } from './navigation-menu-content.vue'
export { default as NavigationMenuIndicator } from './navigation-menu-indicator.vue'
export { default as NavigationMenuItem } from './navigation-menu-item.vue'
export { default as NavigationMenuLink } from './navigation-menu-link.vue'
export { default as NavigationMenuList } from './navigation-menu-list.vue'
export { default as NavigationMenuRoot } from './navigation-menu-root.vue'
export { default as NavigationMenuTrigger } from './navigation-menu-trigger.vue'
export { default as NavigationMenuViewport } from './navigation-menu-viewport.vue'

// Props
export type NavigationMenuRootProps = RekaNavigationMenuRootProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type NavigationMenuListProps = RekaNavigationMenuListProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type NavigationMenuItemProps = RekaNavigationMenuItemProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type NavigationMenuTriggerProps = RekaNavigationMenuTriggerProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type NavigationMenuContentProps = RekaNavigationMenuContentProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type NavigationMenuLinkProps = RekaNavigationMenuLinkProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type NavigationMenuIndicatorProps = RekaNavigationMenuIndicatorProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type NavigationMenuViewportProps = RekaNavigationMenuViewportProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

// Emits
export type NavigationMenuRootEmits = RekaNavigationMenuRootEmits

export type NavigationMenuContentEmits = RekaNavigationMenuContentEmits

export type NavigationMenuLinkEmits = RekaNavigationMenuLinkEmits

// Slots
export interface NavigationMenuRootSlots {
  default: (props: {
    /** Current input values */
    modelValue: string
  }) => void
}
