import {
  type AcceptableValue,
  type AccordionContentProps as RekaAccordionContentProps,
  type AccordionHeaderProps as RekaAccordionHeaderProps,
  type AccordionItemProps as RekaAccordionItemProps,
  type AccordionRootEmits as RekaAccordionRootEmits,
  type AccordionRootProps as RekaAccordionRootProps,
  type AccordionTriggerProps as RekaAccordionTriggerProps,
} from 'reka-ui'
import { tv, type ClassProp } from 'tailwind-variants'

export const accordionVariants = tv({
  slots: {
    root: 'w-full',
    item: `
      border-b border-border text-sm
      last:border-b-0
    `,
    header: 'flex',
    trigger: `
      group/trigger flex flex-1 cursor-pointer items-start justify-between gap-3
      py-3.5 text-left font-medium transition-colors outline-none
      focus-visible:ring-2 focus-visible:ring-ring
      data-disabled:pointer-events-none data-disabled:opacity-60
    `,
    triggerIcon: `
      pointer-events-none h-lh w-4 shrink-0 text-muted-foreground
      transition-transform duration-200
      group-data-[state=open]/trigger:rotate-180
    `,
    content: `
      overflow-hidden
      *:data-[slot="accordion-content-inner"]:pb-4
      data-[state=closed]:animate-accordion-up
      data-[state=open]:animate-accordion-down
    `,
  },
})


// COMPONENTS

export { default as AccordionContent } from './accordion-content.vue'
export { default as AccordionHeader } from './accordion-header.vue'
export { default as AccordionItem } from './accordion-item.vue'
export { default as AccordionRoot } from './accordion-root.vue'
export { default as AccordionTrigger } from './accordion-trigger.vue'


// TYPES — Props

export type AccordionRootProps = RekaAccordionRootProps & Pick<ClassProp, 'class'>

export type AccordionItemProps = RekaAccordionItemProps & Pick<ClassProp, 'class'>

export type AccordionHeaderProps = RekaAccordionHeaderProps & Pick<ClassProp, 'class'>

export type AccordionTriggerProps = RekaAccordionTriggerProps & Pick<ClassProp, 'class'>

export type AccordionContentProps = RekaAccordionContentProps & Pick<ClassProp, 'class'>


// TYPES — Emits
export type AccordionRootEmits = RekaAccordionRootEmits


// TYPES — Slots

export type AccordionRootSlots = {
  default: (props: {
    /** Current active value of the accordion. */
    modelValue?: AcceptableValue | AcceptableValue[]
  }) => []
}

export type AccordionItemSlots = {
  default: (props: {
    /** Current open state. */
    open: boolean
  }) => []
}

export type AccordionTriggerSlots = {
  default: []
  icon: []
}

