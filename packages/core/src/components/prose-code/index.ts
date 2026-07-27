import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const proseCodeVariants = tv({
  slots: {
    root: `
      group/prose-code px-1 py-0.5 text-sm font-mono font-medium rounded-md
      inline-block bg-elevated text-foreground whitespace-nowrap border
      bg-clip-padding shadow-xs not-italic
    `,
  },
})

export type ProseCodeVariants = VariantProps<typeof proseCodeVariants>

// Component
export { default as ProseCode } from './prose-code.vue'

// Props
export interface ProseCodeProps {
  /** Language of the inline code */
  lang?: string

  /** Custom style class */
  class?: HTMLAttributes['class']
}
