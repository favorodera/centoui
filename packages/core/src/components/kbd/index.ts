import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassProp, type VariantProps } from 'tailwind-variants'

export const kbdVariants = tv({
  slots: {
    root: `
      pointer-events-none inline-flex w-fit items-center justify-center
      bg-neutral px-1.5 font-medium text-neutral-foreground select-none
    `,
  },
  variants: {
    size: {
      sm: {
        root: 'h-5 min-w-5 rounded-sm text-xs',
      },
      md: {
        root: 'h-6 min-w-6 rounded-md text-xs',
      },
      lg: {
        root: 'h-7 min-w-7 rounded-md text-sm',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})


// COMPONENT

export { default as Kbd } from './kbd.vue'


// TYPES — Variants

export type KbdVariants = VariantProps<typeof kbdVariants>


// TYPES — Props

export type KbdProps = PrimitiveProps & Pick<ClassProp, 'class'> & {
  /**
   * The size of the kbd.
   * @default 'md'
   */
  size?: KbdVariants['size']
}
