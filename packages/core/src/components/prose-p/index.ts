import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const prosePVariants = tv({
  slots: {
    root: `group/prose-p text-base leading-[1.75] mbs-content-spacing`,
  },
})

// Component
export { default as ProseP } from './prose-p.vue'

// Props
export interface ProsePProps {
  /** Custom style class */
  class?: HTMLAttributes['class']
}
