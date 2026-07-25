import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const proseBlockquoteVariants = tv({
  slots: {
    root: `group/prose-blockquote border-s-2 ps-4 italic mbs-content-flow`,
  },
})

// Component
export { default as ProseBlockquote } from './prose-blockquote.vue'

// Props
export interface ProseBlockquoteProps {
  /** Custom style class */
  class?: HTMLAttributes['class']
}
