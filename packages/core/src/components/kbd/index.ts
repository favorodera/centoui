import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassProp, type VariantProps } from 'tailwind-variants'

// VARIANTS

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

export const kbdGroupVariants = tv({
  slots: {
    root: 'inline-flex items-center gap-1 align-middle',
  },
})


// COMPONENTS

export { default as Kbd } from './kbd.vue'
export { default as KbdGroup } from './kbd-group.vue'


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

export type KbdGroupProps = PrimitiveProps & Pick<ClassProp, 'class'>
