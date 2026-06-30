import type {
  TooltipContentEmits as RekaTooltipContentEmits,
  TooltipContentProps as RekaTooltipContentProps,
  TooltipProviderProps as RekaTooltipProviderProps,
  TooltipRootEmits as RekaTooltipRootEmits,
  TooltipRootProps as RekaTooltipRootProps,
  TooltipTriggerProps as RekaTooltipTriggerProps,
} from 'reka-ui'
import { tv } from 'tailwind-variants'

export const tooltipVariants = tv({
  slots: {
    arrow: 'z-50 fill-foreground',
    content: `
      pointer-events-auto relative z-50 inline-fit
      origin-(--reka-tooltip-content-transform-origin) animate-in rounded-lg
      bg-foreground px-2.5 py-1.5 text-xs text-background fade-in-0 zoom-in-95
      border-border border

      data-[side=bottom]:slide-in-from-top-1

      data-[side=left]:slide-in-from-right-1

      data-[side=right]:slide-in-from-left-1

      data-[side=top]:slide-in-from-bottom-1

      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=closed]:zoom-out-95
    `,
    trigger: '',
  },
})

// COMPONENTS
export { default as TooltipContent } from './tooltip-content.vue'
export { default as TooltipProvider } from './tooltip-provider.vue'
export { default as TooltipRoot } from './tooltip-root.vue'
export { default as TooltipTrigger } from './tooltip-trigger.vue'

// PROPS
export type TooltipProviderProps = RekaTooltipProviderProps

export type TooltipRootProps = RekaTooltipRootProps

export type TooltipTriggerProps = RekaTooltipTriggerProps & { class?: any }

export type TooltipContentProps = RekaTooltipContentProps & {
  class?: any

  /**
   * Whether to show an arrow alongside the content.
   * @default true
   */
  showArrow?: boolean
}

// EMITS
export type TooltipRootEmits = RekaTooltipRootEmits

export type TooltipContentEmits = RekaTooltipContentEmits

// SLOTS
export interface TooltipRootSlots {
  default?: (props: {
    /** Current open state */
    open: boolean
  }) => any
}
