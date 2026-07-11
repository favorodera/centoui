import type { PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const kbdVariants = tv({
  defaultVariants: {
    size: 'md',
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
      lg: {
        root: 'px-2 rounded-md text-sm block-6 min-inline-6',
      },
      md: {
        root: 'rounded-md text-xs px-1.5 block-5 min-inline-5',
      },
      sm: {
        root: 'rounded-md text-xs px-1 block-4 min-inline-4',
      },
    },
  },
})

// COMPONENTS
export { default as KbdGroup } from './kbd-group.vue'
export { default as Kbd } from './kbd.vue'

// VARIANTS
export type KbdVariants = VariantProps<typeof kbdVariants>

// PROPS
export type KbdProps = PrimitiveProps & {
  class?: any

  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: KbdVariants['size']
}

export type KbdGroupProps = PrimitiveProps & { class?: any }
