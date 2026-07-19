import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const kbdVariants = tv({
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
  slots: {
    group: 'inline-flex items-center gap-1 group/kbd-group',
    root: `
      pointer-events-none inline-fit grid place-items-center bg-muted
      font-medium text-muted-foreground select-none font-mono group/kbd
    `,
  },
  variants: {
    size: {
      md: {
        root: `min-block-5 min-inline-5 px-2 text-xs rounded-md py-0.5`,
      },
      sm: {
        root: `min-block-4 min-inline-4 px-1.5 text-xs rounded-md py-0.5`,
      },
    },
  },
})
export type KbdVariants = VariantProps<typeof kbdVariants>

// Components
export { default as KbdGroup } from './kbd-group.vue'
export { default as Kbd } from './kbd.vue'

// Props
export type KbdProps = PrimitiveProps & {
  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: KbdVariants['size']

  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type KbdGroupProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}
