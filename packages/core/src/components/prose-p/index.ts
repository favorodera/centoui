import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const prosePVariants = tv({
  slots: {
    root: `group/prose-p text-base mbs-content-flow text-pretty`,
  },
})

// Component
export { default as ProseP } from './prose-p.vue'

// Props
export interface ProsePProps {
  /** Custom style class */
  class?: HTMLAttributes['class']
}
