import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const proseH4Variants = tv({
  slots: {
    anchor: `
      outline-none opacity-0 align-middle no-underline text-muted-foreground
      transition-[color,opacity] group/h4-anchor

      group-hover/prose-h4:opacity-100

      hover:text-primary

      focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring
    `,
    root: `group/prose-h4 flex gap-1 items-center`,
  },
})

// Component
export { default as ProseH4 } from './prose-h4.vue'

// Props
export interface ProseH4Props {
  /** Unique identifier for the heading */
  id?: string

  /** Custom style class */
  class?: HTMLAttributes['class']
}
