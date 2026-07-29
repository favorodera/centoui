import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const proseH6Variants = tv({
  slots: {
    anchor: `
      outline-none opacity-0 align-middle no-underline text-muted-foreground
      transition-[color,opacity] group/h6-anchor

      group-hover/prose-h6:opacity-100

      hover:text-primary

      focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring
    `,
    root: `group/prose-h6 flex gap-1 items-center`,
  },
})

// Component
export { default as ProseH6 } from './prose-h6.vue'

// Props
export interface ProseH6Props {
  /** Unique identifier for the heading */
  id?: string

  /** Custom style class */
  class?: HTMLAttributes['class']
}
