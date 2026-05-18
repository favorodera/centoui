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
      xs: {
        root: 'h-4 min-w-4 rounded-sm text-[9px]',
      },
      sm: {
        root: 'h-5 min-w-5 rounded-sm text-[10px]',
      },
      md: {
        root: 'h-6 min-w-6 rounded-md text-[11px]',
      },
      lg: {
        root: 'h-7 min-w-7 rounded-md text-xs',
      },
      xl: {
        root: 'h-8 min-w-8 rounded-lg text-[13px]',
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
