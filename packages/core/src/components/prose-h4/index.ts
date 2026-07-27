import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const proseH4Variants = tv({
  slots: {
    link: `
      outline-none opacity-0 align-middle no-underline p-1 rounded-sm grid
      place-items-center text-accent-foreground transition-all bg-accent

      hover:text-primary hover:bg-accent/80

      group-hover/prose-h4:opacity-100

      focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring
    `,
    root: `
      group/prose-h4 text-lg font-semibold flex gap-1 mbs-content-spacing
      items-center wrap-break-word scroll-mbs-content-scroll

      [&+*]:mbs-4
    `,
  },
})

// Component
export { default as ProseH4 } from './prose-h4.vue'

// Props
export interface ProseH4Props {
  /** Unique identifier for the heading */
  id?: string

  /**
   * Whether to show the heading with an anchor link
   * Only works if there is an id
   * @default false
   */
  anchor?: boolean

  /** Custom style class */
  class?: HTMLAttributes['class']
}
