import { tv, type ClassProp, type VariantProps } from 'tailwind-variants'
import {
  type TooltipProviderProps as RekaTooltipProviderProps,
  type TooltipRootProps as RekaTooltipRootProps,
  type TooltipTriggerProps as RekaTooltipTriggerProps,
  type TooltipPortalProps as RekaTooltipPortalProps,
  type TooltipContentProps as RekaTooltipContentProps,
  type TooltipArrowProps as RekaTooltipArrowProps,
  type TooltipContentEmits as RekaTooltipContentEmits,
  type TooltipRootEmits as RekaTooltipRootEmits,
} from 'reka-ui'

export const tooltipVariants = tv({
  slots: {
    trigger: '',
    content: `
      pointer-events-auto z-50 w-fit animate-in rounded-md bg-surface-raised
      px-2.5 py-1 text-xs text-pretty text-foreground shadow-md fade-in-0
      zoom-in-95
      data-[side=bottom]:slide-in-from-top-1
      data-[side=left]:slide-in-from-right-1
      data-[side=right]:slide-in-from-left-1
      data-[side=top]:slide-in-from-bottom-1
      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=closed]:zoom-out-95
    `,
    arrow: 'z-50 fill-surface-raised',
  },
})


// COMPONENTS

export { default as TooltipProvider } from './tooltip-provider.vue'
export { default as TooltipRoot } from './tooltip-root.vue'
export { default as TooltipTrigger } from './tooltip-trigger.vue'
export { default as TooltipPortal } from './tooltip-portal.vue'
export { default as TooltipContent } from './tooltip-content.vue'
export { default as TooltipArrow } from './tooltip-arrow.vue'


// TYPES — Variants

export type TooltipVariants = VariantProps<typeof tooltipVariants>


// TYPES — Props

export type TooltipProviderProps = Omit<RekaTooltipProviderProps, 'delayDuration'> & {
  /**
   * The duration from when the pointer enters the trigger until the tooltip gets opened.
   * @defaultValue 0
   */
  delayDuration?: number
}

export type TooltipRootProps = RekaTooltipRootProps

export type TooltipTriggerProps = RekaTooltipTriggerProps & Pick<ClassProp, 'class'>

export type TooltipPortalProps = RekaTooltipPortalProps

export type TooltipContentProps = Omit<RekaTooltipContentProps, 'sideOffset'> & Pick<ClassProp, 'class'> & {
  /**
   * The distance in pixels from the trigger.
   * @default 4
   */
  sideOffset?: number
}

export type TooltipArrowProps = RekaTooltipArrowProps & Pick<ClassProp, 'class'>

// TYPES — Emits

export type TooltipRootEmits = RekaTooltipRootEmits

export type TooltipContentEmits = RekaTooltipContentEmits


// TYPES — Slots

export type TooltipRootSlots = {
  default: (props: {
    /** Current open state */
    open: boolean
  }) => []
}

