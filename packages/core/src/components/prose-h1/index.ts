import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const proseH1Variants = tv({
  defaultVariants: {
    anchor: false,
  },
  slots: {
    link: `
      outline-none opacity-0 align-middle no-underline p-1 rounded-sm grid
      place-items-center bg-muted text-primary transition

      group-hover/prose-h1:opacity-100

      focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring
    `,
    root: `
      group/prose-h1 text-4xl font-semibold mbe-0 flex gap-2 mbs-content-flow
      items-center

      [&+*]:mbs-4
    `,
  },
  variants: {
    anchor: {
      false: {},
      true: {
        root: `scroll-mbs-content-scroll`,
      },
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
