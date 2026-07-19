import type {
  AcceptableValue,
  AccordionContentProps as RekaAccordionContentProps,
  AccordionHeaderProps as RekaAccordionHeaderProps,
  AccordionItemProps as RekaAccordionItemProps,
  AccordionRootEmits as RekaAccordionRootEmits,
  AccordionRootProps as RekaAccordionRootProps,
  AccordionTriggerProps as RekaAccordionTriggerProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const accordionVariants = tv({
  slots: {
    content: `
      overflow-hidden pbe-2 grid gap-2.5 group/accordion-content

      data-[state=closed]:animate-accordion-up

      data-[state=open]:animate-accordion-down
    `,
    item: 'inline-full text-sm group/accordion-item',
    root: 'inline-full group/accordion-root',
    trigger: `
      flex inline-full cursor-default items-center justify-between py-2.5
      group/accordion-trigger font-medium outline-none

      focus-visible:ring-2 focus-visible:ring-ring

      data-disabled:cursor-not-allowed data-disabled:opacity-70
    `,
  },
})

// Components
export { default as AccordionContent } from './accordion-content.vue'
export { default as AccordionItem } from './accordion-item.vue'
export { default as AccordionRoot } from './accordion-root.vue'
export { default as AccordionTrigger } from './accordion-trigger.vue'

// Props
export type AccordionRootProps = RekaAccordionRootProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type AccordionItemProps = RekaAccordionItemProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type AccordionHeaderProps = RekaAccordionHeaderProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type AccordionTriggerProps = RekaAccordionTriggerProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type AccordionContentProps = RekaAccordionContentProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

// Emits
export type AccordionRootEmits = RekaAccordionRootEmits

// Slots
export interface AccordionRootSlots {
  default?: (props: {
    /** Current active value of the accordion. */
    modelValue?: AcceptableValue | Array<AcceptableValue>
  }) => void
}

export interface AccordionItemSlots {
  default?: (props: {
    /** Current open state. */
    open: boolean
  }) => void
}
