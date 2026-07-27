import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const proseAVariants = tv({
  slots: {
    root: `
      group/prose-a outline-none font-medium underline underline-offset-4
      transition-colors decoration-1

      focus-visible:ring-ring focus-visible:ring-2

      hover:text-primary
    `,
  },
})

// Component
export { default as ProseA } from './prose-a.vue'

// Props
export interface ProseAProps {
  /** Href attribute for the anchor link */
  href?: string

  /** Target attribute for the anchor link */
  target?: '_blank' | '_parent' | '_self' | '_top' | (object & string)

  /** Custom style class */
  class?: HTMLAttributes['class']
}
