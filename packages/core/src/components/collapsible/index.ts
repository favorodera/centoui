import {
  type CollapsibleContentEmits as RekaCollapsibleContentEmits,
  type CollapsibleContentProps as RekaCollapsibleContentProps,
  type CollapsibleRootEmits as RekaCollapsibleRootEmits,
  type CollapsibleRootProps as RekaCollapsibleRootProps,
  type CollapsibleTriggerProps as RekaCollapsibleTriggerProps,
} from 'reka-ui'
import { tv, type ClassProp } from 'tailwind-variants'

export const collapsibleVariants = tv({
  slots: {
    root: '',
    trigger: '',
    content: `
      overflow-hidden animation-duration-300

      data-[state=closed]:animate-collapsible-up

      data-[state=open]:animate-collapsible-down
    `,
  },
})


// COMPONENTS

export { default as CollapsibleContent } from './collapsible-content.vue'
export { default as CollapsibleRoot } from './collapsible-root.vue'
export { default as CollapsibleTrigger } from './collapsible-trigger.vue'


// TYPES — Props

export type CollapsibleRootProps = RekaCollapsibleRootProps & Pick<ClassProp, 'class'>

export type CollapsibleTriggerProps = RekaCollapsibleTriggerProps & Pick<ClassProp, 'class'>


export type CollapsibleContentProps = RekaCollapsibleContentProps & Pick<ClassProp, 'class'>


// TYPES — Emits

export type CollapsibleRootEmits = RekaCollapsibleRootEmits

export type CollapsibleContentEmits = RekaCollapsibleContentEmits


// TYPES — Slots

export type CollapsibleRootSlots = {
  default: (props: {
    /** Current open state */
    open: boolean
  }) => []
}
