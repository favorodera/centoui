import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const proseH3Variants = tv({
  slots: {
    anchor: `
      outline-none opacity-0 align-middle no-underline text-muted-foreground
      transition-[color,opacity] group/h3-anchor

      group-hover/prose-h3:opacity-100

      hover:text-primary

      lg:opacity-0

      focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring
    `,
    root: `group/prose-h3 flex gap-1 items-center`,
  },
})

// Component
export { default as ProseH3 } from './prose-h3.vue'

// Props
export interface ProseH3Props {
  /** Unique identifier for the heading */
  id?: string

  /** Custom style class */
  class?: HTMLAttributes['class']
}
