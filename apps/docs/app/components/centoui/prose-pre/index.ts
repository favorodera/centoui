import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const prosePreVariants = tv({
  defaultVariants: {
    copy: true,
  },
  slots: {
    code: `
      outline-none min-inline-0 overscroll-y-auto overflow-x-auto font-mono
      text-sm tab-2 p-3 group/prose-pre-code grid

      **:[.line]:block

      **:[.line.highlight]:-mx-3 **:[.line.highlight]:px-3
      **:[.line.highlight]:bg-muted! **:[.line.highlight]:inline-block
      **:[.line.highlight]:inline-[calc(100%+1.5rem)]

      focus-visible:ring-ring focus-visible:ring-2
    `,
    copy: 'absolute inset-bs-2 inset-e-2 z-10 group/prose-pre-copy',
    header: `
      flex items-center gap-2 text-muted-foreground border-be p-3 text-sm
      group/prose-pre-header
    `,
    root: `
      group/prose-pre-root bg-elevated rounded-xl border bg-clip-padding
      relative grid
    `,
  },
  variants: {
    copy: {
      false: {},
      true: {},
    },
  },
})

export type ProsePreVariants = VariantProps<typeof prosePreVariants>

// Component
export { default as ProsePre } from './prose-pre.vue'

// Props
export interface ProsePreProps {
  /**
   * Language of the code block
   * @default 'plaintext'
   */
  language?: string

  /**
   * Display a button to copy the code to the clipboard.
   * @default true
   */
  copy?: ProsePreVariants['copy']

  /** Code content */
  code?: string

  /**
   * The iconify or custom ID of the icon to display in header.
   * @see https://icon-sets.iconify.design/
   * @see https://iconify.design/docs/icon-components/vue/
   * @see https://github.com/nuxt/icon
   */
  icon?: string

  /** Filename of the code block */
  filename?: string

  /** Meta information for the code block */
  meta?: string

  /**
   * Line numbers to highlight
   * @default []
   */
  highlights?: Array<number>

  /** Custom style class */
  class?: HTMLAttributes['class']
}
