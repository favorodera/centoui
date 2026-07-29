import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const proseH5Variants = tv({
  slots: {
    anchor: `
      outline-none opacity-0 align-middle no-underline text-muted-foreground
      transition-[color,opacity] group/h5-anchor

      group-hover/prose-h5:opacity-100

      hover:text-primary

      focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring
    `,
    root: `group/prose-h5 flex gap-1 items-center`,
  },
})

// Component
export { default as ProseH5 } from './prose-h5.vue'

// Props
export interface ProseH5Props {
  /** Unique identifier for the heading */
  id?: string

  /** Custom style class */
  class?: HTMLAttributes['class']
}
