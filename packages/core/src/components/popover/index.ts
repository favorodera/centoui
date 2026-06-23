import type {
  PrimitiveProps,
  PopoverAnchorProps as RekaPopoverAnchorProps,
  PopoverContentEmits as RekaPopoverContentEmits,
  PopoverContentProps as RekaPopoverContentProps,
  PopoverRootEmits as RekaPopoverRootEmits,
  PopoverRootProps as RekaPopoverRootProps,
  PopoverTriggerProps as RekaPopoverTriggerProps,
} from 'reka-ui'
import { tv } from 'tailwind-variants'

export const popoverVariants = tv({
  slots: {
    arrow: 'z-50 fill-surface-raised stroke-border',
    content: `
      relative z-50 inline-xs origin-(--reka-popover-content-transform-origin)

      data-[side=bottom]:slide-in-from-top-2

      data-[side=left]:slide-in-from-right-2

      data-[side=right]:slide-in-from-left-2

      data-[side=top]:slide-in-from-bottom-2

      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=closed]:zoom-out-95 data-[state=closed]:duration-100
      data-[state=closed]:ease-in

      data-[state=open]:animate-in data-[state=open]:fade-in-0
      data-[state=open]:zoom-in-95 data-[state=open]:duration-200
      data-[state=open]:ease-out
    `,
    contentWrapper: `
      gap-4 rounded-xl border grid border-border bg-surface-raised p-4
      overflow-hidden relative
    `,
    description: 'text-muted-foreground',
    footer: `-mx-4 -mbe-4 bg-neutral p-4 flex items-center gap-2`,
    header: `-mx-4 -mbs-4 px-4 pbs-4 text-sm flex flex-col gap-1`,
    title: 'font-medium',
    trigger: '',
  },
})

// COMPONENTS
export { default as PopoverAnchor } from './popover-anchor.vue'
export { default as PopoverContent } from './popover-content.vue'
export { default as PopoverDescription } from './popover-description.vue'
export { default as PopoverFooter } from './popover-footer.vue'
export { default as PopoverHeader } from './popover-header.vue'
export { default as PopoverRoot } from './popover-root.vue'
export { default as PopoverTitle } from './popover-title.vue'
export { default as PopoverTrigger } from './popover-trigger.vue'

// PROPS
export type PopoverRootProps = RekaPopoverRootProps

export type PopoverTriggerProps = RekaPopoverTriggerProps & { class?: any }

export type PopoverAnchorProps = RekaPopoverAnchorProps

export type PopoverContentProps = RekaPopoverContentProps & {
  class?: any

  /**
   * Whether to show an arrow alongside the content.
   * @default false
   */
  showArrow?: boolean
}

export type PopoverHeaderProps = PrimitiveProps & { class?: any }

export type PopoverTitleProps = PrimitiveProps & { class?: any }

export type PopoverDescriptionProps = PrimitiveProps & { class?: any }

export type PopoverFooterProps = PrimitiveProps & { class?: any }

// EMITS
export type PopoverRootEmits = RekaPopoverRootEmits

export type PopoverContentEmits = RekaPopoverContentEmits

// SLOTS
export interface PopoverRootSlots {
  default?: (props: {
    /** Current open state */
    open: boolean

    /** Close the popover */
    close: () => void
  }) => any
}
