import { type SeparatorProps as RekaSeparatorProps } from 'reka-ui'
import { tv } from 'tailwind-variants'

export const separatorVariants = tv({
  slots: {
    root: 'flex items-center gap-2',
    line: 'flex-1 border-border',
    content: 'shrink-0 text-center text-sm text-muted-foreground',
  },
  variants: {
    orientation: {
      horizontal: {
        root: 'w-full',
        line: 'border-t',
      },
      vertical: {
        root: 'flex-col self-stretch',
        line: 'border-s',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})


// COMPONENT
export { default as Separator } from './separator.vue'


// PROPS
export type SeparatorProps = RekaSeparatorProps & { class?: any }
