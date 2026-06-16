import {
  type AcceptableValue,
  type AccordionContentProps as RekaAccordionContentProps,
  type AccordionHeaderProps as RekaAccordionHeaderProps,
  type AccordionItemProps as RekaAccordionItemProps,
  type AccordionRootEmits as RekaAccordionRootEmits,
  type AccordionRootProps as RekaAccordionRootProps,
  type AccordionTriggerProps as RekaAccordionTriggerProps,
} from 'reka-ui'
import { tv } from 'tailwind-variants'

export const accordionVariants = tv({
  slots: {
    root: 'w-full',
    item: 'group/accordion-item w-full',
    trigger: `
      group/accordion-trigger flex w-full flex-1 cursor-default items-center
      justify-between gap-4 py-3 text-left text-sm font-medium text-foreground
      outline-none

      focus-visible:ring-2 focus-visible:ring-ring

      data-disabled:pointer-events-none data-disabled:opacity-65

      *:data-[slot=icon]:text-muted-foreground
    `,
    content: `
      overflow-hidden text-sm

      *:data-[slot=accordion-content-inner]:pb-4

      data-[state=closed]:animate-accordion-up

      data-[state=open]:animate-accordion-down
    `,
  },
})


// COMPONENTS
export { default as AccordionRoot } from './accordion-root.vue'
export { default as AccordionItem } from './accordion-item.vue'
export { default as AccordionTrigger } from './accordion-trigger.vue'
export { default as AccordionContent } from './accordion-content.vue'


// PROPS
export type AccordionRootProps = RekaAccordionRootProps & { class?: any }

export type AccordionItemProps = RekaAccordionItemProps & { class?: any }

export type AccordionHeaderProps = RekaAccordionHeaderProps & { class?: any }

export type AccordionTriggerProps = RekaAccordionTriggerProps & { class?: any }

export type AccordionContentProps = RekaAccordionContentProps & { class?: any }


// EMITS
export type AccordionRootEmits = RekaAccordionRootEmits


// SLOTS
export type AccordionRootSlots = {
  default?: (props: {
    /** Current active value of the accordion. */
    modelValue?: AcceptableValue | AcceptableValue[]
  }) => any
}

export type AccordionItemSlots = {
  default?: (props: {
    /** Current open state. */
    open: boolean
  }) => any
}
