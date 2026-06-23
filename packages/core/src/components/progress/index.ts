import type { ProgressRootEmits, ProgressRootProps } from 'reka-ui'
import { tv } from 'tailwind-variants'

export const progressVariants = tv({
  slots: {
    indicator: `
      block-full inline-full origin-left rounded-[inherit] transition-transform
      duration-300 ease-out bg-primary
    `,
    root: 'relative block-1.5 inline-full overflow-hidden rounded-full bg-muted',
  },
})

// COMPONENT
export { default as Progress } from './progress.vue'

// PROPS
export type ProgressProps = ProgressRootProps & { class?: any }

// EMITS
export type ProgressEmits = ProgressRootEmits
