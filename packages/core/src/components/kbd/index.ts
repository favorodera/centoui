import type { PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const kbdVariants = tv({
  slots: {
    root: `
      pointer-events-none inline-flex w-fit items-center justify-center
      bg-neutral px-1 font-medium text-neutral-foreground select-none
    `,
    group: 'inline-flex items-center gap-1',
  },
  variants: {
    size: {
      sm: {
        root: 'h-4 min-w-4 rounded-sm text-xs',
      },
      md: {
        root: 'h-5 min-w-5 rounded-sm text-xs',
      },
      lg: {
        root: 'h-6 min-w-6 rounded-md text-sm',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})


// COMPONENTS
export { default as Kbd } from './kbd.vue'
export { default as KbdGroup } from './kbd-group.vue'


// VARIANTS
export type KbdVariants = VariantProps<typeof kbdVariants>


// PROPS
export type KbdProps = PrimitiveProps & {
  /**
   * The size of the kbd.
   * @default 'md'
   */
  size?: KbdVariants['size']
  class?: any
}

export type KbdGroupProps = PrimitiveProps & { class?: any }
