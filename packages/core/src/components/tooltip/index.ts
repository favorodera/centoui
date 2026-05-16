import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'
import {
  type TooltipProviderProps as RekaTooltipProviderProps,
  type TooltipRootProps as RekaTooltipRootProps,
  type TooltipTriggerProps as RekaTooltipTriggerProps,
  type TooltipPortalProps as RekaTooltipPortalProps,
  type TooltipContentProps as RekaTooltipContentProps,
  type TooltipArrowProps as RekaTooltipArrowProps,
  type TooltipContentEmits as RekaTooltipContentEmits,
  type TooltipRootEmits as RekaTooltipRootEmits,
  createContext,
} from 'reka-ui'

export const tooltipVariants = tv({
  slots: {
    trigger: '',
    content: `
      pointer-events-auto z-50 w-fit animate-in rounded-lg bg-foreground px-3
      py-1.5 text-sm text-balance text-background fade-in-0 zoom-in-95
      data-[side=bottom]:slide-in-from-top-2
      data-[side=left]:slide-in-from-right-2
      data-[side=right]:slide-in-from-left-2
      data-[side=top]:slide-in-from-bottom-2
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
export { default as TooltipPortal } from './tooltip-portal.vue'
export { default as TooltipContent } from './tooltip-content.vue'
export { default as TooltipArrow } from './tooltip-arrow.vue'


// CONTEXT

export const [injectCentouiTooltipRootContext, provideCentouiTooltipRootContext] = createContext<TooltipRootContext>('TooltipRoot', 'centoui:tooltip:context')


// TYPES — Variants

export type TooltipVariants = VariantProps<typeof tooltipVariants>


// TYPES — Context

export type TooltipRootContext = {
  /** Styles for the tooltip */
  styles: ReturnType<typeof tooltipVariants>
}


// TYPES — Props

export type TooltipProviderProps = Omit<RekaTooltipProviderProps, 'delayDuration'> & {
  /**
   * The duration from when the pointer enters the trigger until the tooltip gets opened.
   * @defaultValue 0
   */
  delayDuration?: number
}

export type TooltipRootProps = RekaTooltipRootProps

export type TooltipTriggerProps = RekaTooltipTriggerProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type TooltipPortalProps = RekaTooltipPortalProps

export type TooltipContentProps = Omit<RekaTooltipContentProps, 'sideOffset'> & {
  /**
   * The distance in pixels from the trigger.
   * @default 4
   */
  sideOffset?: number
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type TooltipArrowProps = RekaTooltipArrowProps & {
  class?: ClassValue
}


// TYPES — Emits

export type TooltipRootEmits = RekaTooltipRootEmits

export type TooltipContentEmits = RekaTooltipContentEmits


// TYPES — Slots
export type TooltipProviderSlots = {
  default: []
}

export type TooltipRootSlots = {
  default: (props: {
    /** Current open state */
    open: boolean
  }) => []
}

export type TooltipTriggerSlots = {
  default: []
}

export type TooltipPortalSlots = {
  default: []
}

export type TooltipContentSlots = {
  default: []
}

export type TooltipArrowSlots = {
  default: []
}
