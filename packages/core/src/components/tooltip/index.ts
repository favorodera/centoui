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
} from 'reka-ui'

/** Tooltip style variants */
export const tooltipVariants = tv({
  slots: {
    trigger: '',
    content: `
      pointer-events-auto w-fit animate-in rounded-md px-3 py-1.5 text-sm
      text-balance fade-in-0 zoom-in-95
      data-[centoui-side=bottom]:slide-in-from-top-2
      data-[centoui-side=left]:slide-in-from-right-2
      data-[centoui-side=right]:slide-in-from-left-2
      data-[centoui-side=top]:slide-in-from-bottom-2
      data-[centoui-state=closed]:animate-out
      data-[centoui-state=closed]:fade-out-0
      data-[centoui-state=closed]:zoom-out-95
    `,
    arrow: '',
  },
  variants: {
    variant: {
      solid: {
        content: `
          bg-foreground text-background
          **:data-[centoui-slot=tooltip-arrow]:fill-foreground
        `,
      },
      soft: {
        content: `
          bg-foreground/15 text-foreground
          **:data-[centoui-slot=tooltip-arrow]:fill-foreground/15
        `,
      },
      subtle: {
        content: `
          bg-foreground/8 text-foreground ring ring-foreground/25 ring-inset
          **:data-[centoui-slot=tooltip-arrow]:fill-foreground/8
          **:data-[centoui-slot=tooltip-arrow]:stroke-foreground/25
        `,
      },
      outline: {
        content: `
          bg-transparent text-foreground ring ring-foreground ring-inset
          **:data-[centoui-slot=tooltip-arrow]:fill-transparent
          **:data-[centoui-slot=tooltip-arrow]:stroke-foreground
        `,
      },
    },
  },

  defaultVariants: {
    variant: 'solid',
  },
})


// Component exports

export { default as TooltipProvider } from './tooltip-provider.vue'
export { default as TooltipRoot } from './tooltip-root.vue'
export { default as TooltipTrigger } from './tooltip-trigger.vue'
export { default as TooltipPortal } from './tooltip-portal.vue'
export { default as TooltipContent } from './tooltip-content.vue'
export { default as TooltipArrow } from './tooltip-arrow.vue'

// Types exports

/** Variant props for Tooltip component. */
export type TooltipVariants = VariantProps<typeof tooltipVariants>

/** Props for TooltipProvider component. */
export type TooltipProviderProps = Omit<RekaTooltipProviderProps, 'delayDuration'> & {
  /**
   * The duration from when the pointer enters the trigger until the tooltip gets opened.
   * @defaultValue 0
   */
  delayDuration?: number
}

/** Props for TooltipRoot component. */
export type TooltipRootProps = RekaTooltipRootProps

/** Props for TooltipTrigger component. */
export type TooltipTriggerProps = RekaTooltipTriggerProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

/** Props for TooltipPortal component. */
export type TooltipPortalProps = RekaTooltipPortalProps

/** Props for TooltipContent component. */
export type TooltipContentProps = Omit<RekaTooltipContentProps, 'sideOffset'> & {
  /**
   * The distance in pixels from the trigger.
   * @default 4
   */
  sideOffset?: number
  /**
   * The visual style of the tooltip.
   * @default 'solid'
   */
  variant?: TooltipVariants['variant']
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

/** Props for TooltipArrow component. */
export type TooltipArrowProps = RekaTooltipArrowProps & {
  class?: ClassValue
}

/** Emits for TooltipRoot component. */
export type TooltipRootEmits = RekaTooltipRootEmits

/** Emits for TooltipContent component. */
export type TooltipContentEmits = RekaTooltipContentEmits

/** Slots for TooltipProvider component. */
export type TooltipProviderSlots = {
  /** Default slot. */
  default: []
}

/** Slots for TooltipRoot component. */
export type TooltipRootSlots = {
  /** Default slot. */
  default: (props: {
    /** Current open state */
    open: boolean
  }) => []
}

/** Slots for TooltipTrigger component. */
export type TooltipTriggerSlots = {
  /** Default slot. */
  default: []
}

/** Slots for TooltipPortal component. */
export type TooltipPortalSlots = {
  /** Default slot. */
  default: []
}

/** Slots for TooltipContent component. */
export type TooltipContentSlots = {
  /** Default slot. */
  default: []
}

/** Slots for TooltipArrow component. */
export type TooltipArrowSlots = {
  /** Default slot. */
  default: []
}
