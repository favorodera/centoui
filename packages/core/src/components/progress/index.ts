import type { ProgressRootEmits, ProgressRootProps } from 'reka-ui'
import { tv } from 'tailwind-variants'

export const progressVariants = tv({
  slots: {
    indicator: `
      block-full inline-full origin-left rounded-[inherit] transition-transform
      bg-primary group/progress-indicator
    `,
    root: `
      relative block-2 inline-full overflow-hidden rounded-full bg-muted
      group/progress-bar-root
    `,
  },
})

// COMPONENT
export { default as Progress } from './progress.vue'

// PROPS
export type ProgressProps = ProgressRootProps & { class?: any }

// EMITS
export type ProgressEmits = ProgressRootEmits
