import {
  type ProgressIndicatorProps as RekaProgressIndicatorProps,
  type ProgressRootEmits as RekaProgressRootEmits,
  type ProgressRootProps as RekaProgressRootProps,
} from 'reka-ui'
import { tv, type ClassProp } from 'tailwind-variants'

export const progressBarVariants = tv({
  slots: {
    root: 'relative h-2 w-full overflow-hidden rounded-xs bg-muted',
    indicator: `
      size-full origin-left rounded-[inherit] bg-primary transition-transform
      duration-300
    `,
  },
})


// COMPONENTS

export { default as ProgressBarIndicator } from './progress-bar-indicator.vue'
export { default as ProgressBarRoot } from './progress-bar-root.vue'


// TYPES — Props

export type ProgressBarRootProps = RekaProgressRootProps & Pick<ClassProp, 'class'>

export type ProgressBarIndicatorProps = RekaProgressIndicatorProps & Pick<ClassProp, 'class'>


// TYPES — Emits

export type ProgressBarRootEmits = RekaProgressRootEmits


// TYPES — Slots

export type ProgressBarRootSlots = {
  default: (props: {
    /** Current input values */
    modelValue?: number | null
  }) => []
}
