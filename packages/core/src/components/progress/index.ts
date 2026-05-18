import {
  type ProgressIndicatorProps as RekaProgressIndicatorProps,
  type ProgressRootEmits as RekaProgressRootEmits,
  type ProgressRootProps as RekaProgressRootProps,
} from 'reka-ui'
import { tv, type ClassProp } from 'tailwind-variants'

export const progressVariants = tv({
  slots: {
    root: 'relative h-2 w-full overflow-hidden rounded-full bg-muted',
    indicator: `
      size-full origin-left rounded-[inherit] bg-primary transition-transform
      duration-200
    `,
  },
})


// COMPONENTS

export { default as ProgressIndicator } from './progress-indicator.vue'
export { default as ProgressRoot } from './progress-root.vue'


// TYPES — Props

export type ProgressRootProps = RekaProgressRootProps & Pick<ClassProp, 'class'>

export type ProgressIndicatorProps = RekaProgressIndicatorProps & Pick<ClassProp, 'class'>


// TYPES — Emits

export type ProgressRootEmits = RekaProgressRootEmits


// TYPES — Slots

export type ProgressRootSlots = {
  default: (props: {
    /** Current input values */
    modelValue?: number | null
  }) => []
}
