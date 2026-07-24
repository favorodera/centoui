import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const proseH1Variants = tv({
  defaultVariants: {
    anchor: false,
  },
  slots: {
    link: `
      outline-none group/prose-h1

      focus-visible:ring-2 focus-visible:ring-ring
    `,
    root: `group/prose-h1-link text-3xl font-semibold mbe-0 flex gap-2 relative`,
  },
  variants: {
    anchor: {
      false: {},
      true: {},
    },
  },
})
export type ProseH1Variants = VariantProps<typeof proseH1Variants>

// Component
export { default as ProseH1 } from './prose-h1.vue'

// Props
export interface ProseH1Props {
  /** Unique identifier for the heading */
  id?: string

  /**
   * Whether to show the heading with an anchor link
   * Only works if there is an id
   * @default false
   */
  anchor?: ProseH1Variants['anchor']

  /** Custom style class */
  class?: HTMLAttributes['class']
}
