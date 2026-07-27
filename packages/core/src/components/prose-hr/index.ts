import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const proseHrVariants = tv({
  slots: {
    root: `group/prose-hr border-0 border-bs border-border mbs-content-spacing`,
  },
})

// Component
export { default as ProseHr } from './prose-hr.vue'

// Props
export interface ProseHrProps {
  /** Custom style class */
  class?: HTMLAttributes['class']
}
