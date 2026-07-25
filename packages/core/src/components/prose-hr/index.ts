import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const proseHrVariants = tv({
  slots: {
    root: `group/prose-hr mbs-content-flow border-bs`,
  },
})

// Component
export { default as ProseHr } from './prose-hr.vue'

// Props
export interface ProseHrProps {
  /** Custom style class */
  class?: HTMLAttributes['class']
}
