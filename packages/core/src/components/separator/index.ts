import type { SeparatorProps as RekaSeparatorProps } from 'reka-ui'
import { tv } from 'tailwind-variants'

export const separatorVariants = tv({
  defaultVariants: {
    orientation: 'horizontal',
  },
  slots: {
    content: 'shrink-0 text-center text-sm text-muted-foreground',
    line: 'flex-1 border-border',
    root: 'flex items-center gap-2',
  },
  variants: {
    orientation: {
      horizontal: {
        line: 'border-bs',
        root: 'inline-full',
      },
      vertical: {
        line: 'border-s',
        root: 'flex-col self-stretch',
      },
    },
  },
})

// COMPONENT
export { default as Separator } from './separator.vue'

// PROPS
export type SeparatorProps = RekaSeparatorProps & { class?: any }
