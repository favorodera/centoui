import type { ProgressRootEmits, ProgressRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
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

// Component
export { default as Progress } from './progress.vue'

// Props
export type ProgressProps = ProgressRootProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

// Emits
export type ProgressEmits = ProgressRootEmits
