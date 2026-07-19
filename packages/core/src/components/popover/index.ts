import type {
  PrimitiveProps,
  PopoverContentEmits as RekaPopoverContentEmits,
  PopoverContentProps as RekaPopoverContentProps,
  PopoverRootEmits as RekaPopoverRootEmits,
  PopoverRootProps as RekaPopoverRootProps,
  PopoverTriggerProps as RekaPopoverTriggerProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const popoverVariants = tv({
  slots: {
    arrow: 'z-50 fill-overlay stroke-border group/popover-arrow',
    content: `
      relative z-50 inline-xs origin-(--reka-popover-content-transform-origin)
      group/popover-content

      data-[side=bottom]:slide-in-from-top-2

      data-[side=left]:slide-in-from-right-2

      data-[side=right]:slide-in-from-left-2

      data-[side=top]:slide-in-from-bottom-2

      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=closed]:zoom-out-95

      data-[state=open]:animate-in data-[state=open]:fade-in-0
      data-[state=open]:zoom-in-95
    `,
    contentWrapper: `
      gap-4 rounded-xl border grid bg-overlay p-4 bg-clip-padding
      overflow-hidden relative group/popover-content-wrapper
    `,
    description: 'text-muted-foreground group/popover-description',
    footer: `
      -mx-4 -mbe-4 bg-muted/50 p-4 flex items-center gap-2 group/popover-footer
    `,
    header: `
      -mx-4 -mbs-4 px-4 pbs-4 text-sm flex flex-col gap-1 group/popover-header
    `,
    title: 'font-medium group/popover-title',
    trigger: 'group/popover-trigger',
  },
})

// Components
export { default as PopoverContent } from './popover-content.vue'
export { default as PopoverDescription } from './popover-description.vue'
export { default as PopoverFooter } from './popover-footer.vue'
export { default as PopoverHeader } from './popover-header.vue'
export { default as PopoverRoot } from './popover-root.vue'
export { default as PopoverTitle } from './popover-title.vue'
export { default as PopoverTrigger } from './popover-trigger.vue'

// Props
export type PopoverRootProps = RekaPopoverRootProps

export type PopoverTriggerProps = RekaPopoverTriggerProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type PopoverContentProps = RekaPopoverContentProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']

  /**
   * Whether to show an arrow alongside the content.
   * @default false
   */
  showArrow?: boolean
}

export type PopoverHeaderProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type PopoverTitleProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type PopoverDescriptionProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type PopoverFooterProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

// Emits
export type PopoverRootEmits = RekaPopoverRootEmits

export type PopoverContentEmits = RekaPopoverContentEmits

// SLOTS
export interface PopoverRootSlots {
  default?: (props: {
    /** Current open state */
    open: boolean

    /** Close the popover */
    close: () => void
  }) => void
}
