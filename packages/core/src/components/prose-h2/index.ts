import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const proseH2Variants = tv({
  slots: {
    anchor: `
      outline-none opacity-0 align-middle no-underline text-muted-foreground
      transition-[color,opacity] group/h2-anchor

      group-hover/prose-h2:opacity-100

      hover:text-primary

      focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring
    `,
    root: `group/prose-h2 flex gap-1 items-center`,
  },
})

// Component
export { default as ProseH2 } from './prose-h2.vue'

// Props
export interface ProseH2Props {
  /** Unique identifier for the heading */
  id?: string

  /** Custom style class */
  class?: HTMLAttributes['class']
}
