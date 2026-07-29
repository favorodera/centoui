import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const proseH1Variants = tv({
  slots: {
    anchor: `
      outline-none opacity-0 align-middle no-underline text-muted-foreground
      transition-[color,opacity] group/h1-anchor

      group-hover/prose-h1:opacity-100

      hover:text-primary

      focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring
    `,
    root: `group/prose-h1 flex gap-1 items-center`,
  },
})

// Component
export { default as ProseH1 } from './prose-h1.vue'

// Props
export interface ProseH1Props {
  /** Unique identifier for the heading */
  id?: string

  /** Custom style class */
  class?: HTMLAttributes['class']
}
