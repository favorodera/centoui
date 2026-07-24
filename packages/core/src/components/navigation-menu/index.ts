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
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const navigationMenuVariants = tv({
  defaultVariants: {
    triggerSize: 'md',
  },
  slots: {
    content: `
      group/navigation-menu-content absolute inset-bs-0 inset-s-0 p-3

      data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in

      data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out

      data-[motion=from-end]:slide-in-from-right-52

      data-[motion=from-start]:slide-in-from-left-52

      data-[motion=to-end]:slide-out-to-right-52

      data-[motion=to-start]:slide-out-to-left-52

      group-not-has-data-[slot=navigation-menu-viewport-wrapper]/navigation-menu-root:bg-overlay
      group-not-has-data-[slot=navigation-menu-viewport-wrapper]/navigation-menu-root:inset-bs-full
      group-not-has-data-[slot=navigation-menu-viewport-wrapper]/navigation-menu-root:mbs-1
      group-not-has-data-[slot=navigation-menu-viewport-wrapper]/navigation-menu-root:overflow-hidden
      group-not-has-data-[slot=navigation-menu-viewport-wrapper]/navigation-menu-root:rounded-xl
      group-not-has-data-[slot=navigation-menu-viewport-wrapper]/navigation-menu-root:border
      group-not-has-data-[slot=navigation-menu-viewport-wrapper]/navigation-menu-root:bg-clip-padding
      group-not-has-data-[slot=navigation-menu-viewport-wrapper]/navigation-menu-root:z-50

      group-not-has-data-[slot=navigation-menu-viewport-wrapper]/navigation-menu-root:data-[state=open]:animate-in
      group-not-has-data-[slot=navigation-menu-viewport-wrapper]/navigation-menu-root:data-[state=open]:zoom-in-95
      group-not-has-data-[slot=navigation-menu-viewport-wrapper]/navigation-menu-root:data-[state=open]:fade-in-0

      group-not-has-data-[slot=navigation-menu-viewport-wrapper]/navigation-menu-root:data-[state=closed]:animate-out
      group-not-has-data-[slot=navigation-menu-viewport-wrapper]/navigation-menu-root:data-[state=closed]:zoom-out-95
      group-not-has-data-[slot=navigation-menu-viewport-wrapper]/navigation-menu-root:data-[state=closed]:fade-out-0
    `,
    indicator: `
      translate-x-(--reka-navigation-menu-indicator-position)
      inline-(--reka-navigation-menu-indicator-size) flex block-2.5 items-end
      justify-center overflow-hidden absolute inset-s-0 inset-be-0 -mbe-2

      data-[state=visible]:animate-in data-[state=visible]:fade-in

      data-[state=hidden]:animate-out data-[state=hidden]:fade-out
    `,
    indicatorArrow: `
      relative inset-bs-3/10 block-2.5 inline-2.5 rotate-45 border bg-overlay
      rounded-xs
    `,
    item: `group/navigation-menu-item`,
    link: `
      group/navigation-menu-link relative flex shrink-0 border-transparent
      border outline-none select-none transition-colors font-medium
      bg-clip-padding flex-col items-start p-2 rounded-lg gap-1 text-sm

      data-active:bg-accent/50 data-active:text-accent-foreground

      data-active:focus:bg-accent

      data-active:hover:bg-accent

      hover:bg-accent hover:text-accent-foreground

      focus:bg-accent focus:text-accent-foreground

      focus-visible:ring-2 focus-visible:ring-ring
    `,
    list: `
      group/navigation-menu-list flex gap-2 items-center min-inline-0
      inline-full
    `,
    root: `
      group/navigation-menu-root relative flex items-center gap-2 inline-max
    `,
    trigger: `
      group/navigation-menu-trigger relative inline-flex items-center
      bg-background shrink-0 border-transparent border outline-none select-none
      transition-colors font-medium justify-center bg-clip-padding

      hover:not-disabled:bg-accent hover:not-disabled:text-accent-foreground

      focus:not-disabled:bg-accent focus:not-disabled:text-accent-foreground

      disabled:cursor-not-allowed disabled:opacity-70

      focus-visible:ring-2 focus-visible:ring-ring

      data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50

      data-[state=open]:hover:not-disabled:bg-accent

      data-[state=open]:focus:not-disabled:bg-accent
    `,
    triggerIcon: `
      relative inset-bs-px transition-transform

      group-data-[state=open]/navigation-menu-trigger:rotate-180
    `,
    viewport: `
      group/navigation-menu-viewport origin-[top,center] bg-overlay relative
      border block-(--reka-navigation-menu-viewport-height) overflow-hidden
      perspective-near rounded-xl bg-clip-padding mbs-1
      inset-s-(--reka-navigation-menu-viewport-left)
      transition-[width,height,left,right]
      inline-(--reka-navigation-menu-viewport-width)

      data-[state=open]:animate-in data-[state=open]:zoom-in-90
      data-[state=open]:fade-in-0

      data-[state=closed]:animate-out data-[state=closed]:zoom-out-95
      data-[state=closed]:fade-out-0
    `,
    viewportWrapper: 'absolute inset-bs-full inset-s-0 z-50',
  },
  variants: {
    triggerSize: {
      lg: {
        trigger: `
          block-9 min-inline-9 px-3 text-sm gap-2 rounded-lg

          *:data-[slot=icon]:block-4.5 *:data-[slot=icon]:inline-4.5
        `,
      },
      md: {
        trigger: `
          block-8 min-inline-8 px-2.5 text-sm gap-1.5 rounded-lg

          *:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4
        `,
      },
      sm: {
        trigger: `
          block-7 min-inline-7 px-2 text-xs gap-1 rounded-lg

          *:data-[slot=icon]:block-3.5 *:data-[slot=icon]:inline-3.5
        `,
      },
    },
  },
})
export type NavigationMenuVariants = VariantProps<typeof navigationMenuVariants>

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
  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: NavigationMenuVariants['triggerSize']

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
