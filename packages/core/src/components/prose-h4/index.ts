import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const proseH4Variants = tv({
  defaultVariants: {
    anchor: false,
  },
  slots: {
    link: `
      outline-none opacity-0 inline-fit align-middle no-underline p-1 rounded-sm
      grid place-items-center bg-muted text-primary

      group-hover/prose-h4:opacity-100

      focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring
    `,
    root: `
      group/prose-h4 text-xl font-semibold mbe-0 flex gap-2 relative
      mbs-content-flow items-center

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

export type ProseH4Variants = VariantProps<typeof proseH4Variants>

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
  anchor?: ProseH4Variants['anchor']

  /** Custom style class */
  class?: HTMLAttributes['class']
}
