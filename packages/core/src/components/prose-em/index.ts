import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const proseEmVariants = tv({
  slots: {
    root: `group/prose-em`,
  },
})

// Component
export { default as ProseEm } from './prose-em.vue'

// Props
export interface ProseEmProps {
  /** Custom style class */
  class?: HTMLAttributes['class']
}
