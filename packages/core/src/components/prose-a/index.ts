import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const proseAVariants = tv({
  slots: {
    root: `
      group/prose-a text-primary outline-none font-medium decoration-primary/80
      underline underline-offset-4

      focus-visible:ring-ring focus-visible:ring-2

      hover:decoration-primary
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
