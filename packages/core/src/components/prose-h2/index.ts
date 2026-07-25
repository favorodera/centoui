import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const proseH2Variants = tv({
  defaultVariants: {
    anchor: false,
  },
  slots: {
    link: `
      outline-none opacity-0 align-middle no-underline p-1 rounded-sm grid
      place-items-center bg-muted text-primary transition

      group-hover/prose-h2:opacity-100

      focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring
    `,
    root: `
      group/prose-h2 text-3xl font-semibold flex mbe-0 gap-2 mbs-content-flow
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

export type ProseH2Variants = VariantProps<typeof proseH2Variants>

// Component
export { default as ProseH2 } from './prose-h2.vue'

// Props
export interface ProseH2Props {
  /** Unique identifier for the heading */
  id?: string

  /**
   * Whether to show the heading with an anchor link
   * Only works if there is an id
   * @default false
   */
  anchor?: ProseH2Variants['anchor']

  /** Custom style class */
  class?: HTMLAttributes['class']
}
