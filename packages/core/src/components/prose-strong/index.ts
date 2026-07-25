import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const proseStrongVariants = tv({
  slots: {
    root: `group/prose-strong`,
  },
})

// Component
export { default as ProseStrong } from './prose-strong.vue'

// Props
export interface ProseStrongProps {
  /** Custom style class */
  class?: HTMLAttributes['class']
}
