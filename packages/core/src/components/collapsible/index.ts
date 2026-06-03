import {
  type CollapsibleContentEmits as RekaCollapsibleContentEmits,
  type CollapsibleContentProps as RekaCollapsibleContentProps,
  type CollapsibleRootEmits as RekaCollapsibleRootEmits,
  type CollapsibleRootProps as RekaCollapsibleRootProps,
  type CollapsibleTriggerProps as RekaCollapsibleTriggerProps,
} from 'reka-ui'
import { tv } from 'tailwind-variants'

export const collapsibleVariants = tv({
  slots: {
    root: '',
    trigger: '',
    content: `
      overflow-hidden

      data-[state=closed]:animate-collapsible-up

      data-[state=open]:animate-collapsible-down
    `,
  },
})


// COMPONENTS
export { default as CollapsibleContent } from './collapsible-content.vue'
export { default as CollapsibleRoot } from './collapsible-root.vue'
export { default as CollapsibleTrigger } from './collapsible-trigger.vue'


// PROPS
export type CollapsibleRootProps = RekaCollapsibleRootProps & { class?: any }

export type CollapsibleTriggerProps = RekaCollapsibleTriggerProps & { class?: any }


export type CollapsibleContentProps = RekaCollapsibleContentProps & { class?: any }


// EMITS
export type CollapsibleRootEmits = RekaCollapsibleRootEmits

export type CollapsibleContentEmits = RekaCollapsibleContentEmits


// SLOTS
export type CollapsibleRootSlots = {
  default?: (props: {
    /** Current open state */
    open: boolean
  }) => any
}
