import {
  type ProgressRootEmits,
  type ProgressRootProps,
} from 'reka-ui'
import { tv } from 'tailwind-variants'

export const progressBarVariants = tv({
  slots: {
    root: 'relative h-1.5 w-full overflow-hidden rounded-xs bg-input',
    indicator: `
      size-full origin-left rounded-[inherit] bg-primary transition-all
    `,
  },
})


// COMPONENT
export { default as Progress } from './progress.vue'


// PROPS
export type ProgressProps = ProgressRootProps & { class?: any }


// EMITS
export type ProgressEmits = ProgressRootEmits
