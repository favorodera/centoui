import { type SeparatorProps as RekaSeparatorProps } from 'reka-ui'
import { tv, type ClassProp, type VariantProps } from 'tailwind-variants'

export const separatorVariants = tv({
  slots: {
    root: 'flex items-center gap-3',
    line: 'border-border',
    content: 'shrink-0 text-center text-sm text-muted-foreground',
  },
  variants: {
    orientation: {
      horizontal: {
        root: 'my-3 w-full',
        line: 'w-full border-t',
      },
      vertical: {
        root: 'mx-3 h-full flex-col',
        line: 'h-full border-s',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})


// COMPONENT

export { default as Separator } from './separator.vue'


// TYPES — Variants

export type SeparatorVariants = VariantProps<typeof separatorVariants>


// TYPES — Props

export type SeparatorProps = Omit<RekaSeparatorProps, 'orientation'> & Pick<ClassProp, 'class'> & {
  /**
   * The orientation of the separator.
   * @default 'horizontal'
   */
  orientation?: SeparatorVariants['orientation']
}

// TYPES — Slots

export type SeparatorSlots = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: () => any
}
