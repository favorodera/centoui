import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const proseH6Variants = tv({
  defaultVariants: {
    anchor: false,
  },
  slots: {
    link: `
      outline-none opacity-0 transition align-middle no-underline p-1 rounded-sm
      grid place-items-center bg-muted text-primary

      group-hover/prose-h6:opacity-100

      focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring
    `,
    root: `
      group/prose-h6 text-base font-semibold mbe-0 flex gap-2 mbs-content-flow
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

export type ProseH6Variants = VariantProps<typeof proseH6Variants>

// Component
export { default as ProseH6 } from './prose-h6.vue'

// Props
export interface ProseH6Props {
  /** Unique identifier for the heading */
  id?: string

  /**
   * Whether to show the heading with an anchor link
   * Only works if there is an id
   * @default false
   */
  anchor?: ProseH6Variants['anchor']

  /** Custom style class */
  class?: HTMLAttributes['class']
}
