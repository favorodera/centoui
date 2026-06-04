import { tv } from 'tailwind-variants'
import {
  type TooltipProviderProps as RekaTooltipProviderProps,
  type TooltipRootProps as RekaTooltipRootProps,
  type TooltipTriggerProps as RekaTooltipTriggerProps,
  type TooltipContentProps as RekaTooltipContentProps,
  type TooltipContentEmits as RekaTooltipContentEmits,
  type TooltipRootEmits as RekaTooltipRootEmits,
} from 'reka-ui'

export const tooltipVariants = tv({
  slots: {
    trigger: '',
    content: `
      pointer-events-auto relative z-50 w-fit
      origin-(--reka-tooltip-content-transform-origin) animate-in rounded-md
      bg-foreground px-3 py-1 text-xs text-background fade-in-0 zoom-in-95

      data-[side=bottom]:slide-in-from-top-1

      data-[side=left]:slide-in-from-right-1

      data-[side=right]:slide-in-from-left-1

      data-[side=top]:slide-in-from-bottom-1

      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=closed]:zoom-out-95
    `,
    arrow: 'z-50 fill-foreground',
  },
})


// COMPONENTS
export { default as TooltipProvider } from './tooltip-provider.vue'
export { default as TooltipRoot } from './tooltip-root.vue'
export { default as TooltipTrigger } from './tooltip-trigger.vue'
export { default as TooltipContent } from './tooltip-content.vue'


// PROPS
export type TooltipProviderProps = RekaTooltipProviderProps

export type TooltipRootProps = RekaTooltipRootProps

export type TooltipTriggerProps = RekaTooltipTriggerProps & { class?: any }

export type TooltipContentProps = RekaTooltipContentProps & {
  /**
   * Whether to show an arrow alongside the content.\
   * @default true
   */
  showArrow?: boolean
  class?: any
}

// EMITS
export type TooltipRootEmits = RekaTooltipRootEmits

export type TooltipContentEmits = RekaTooltipContentEmits


// SLOTS
export type TooltipRootSlots = {
  default?: (props: {
    /** Current open state */
    open: boolean
  }) => any
}

