import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const prosePreVariants = tv({
  defaultVariants: {
    copy: true,
  },
  slots: {
    code: `
      **:[.line]:block

      **:[.line.highlight]:-mx-3 **:[.line.highlight]:px-3
      **:[.line.highlight]:bg-muted **:[.line.highlight]:inline-block
      **:[.line.highlight]:inline-[calc(100%+1.5rem)]
    `,
    copy: 'absolute inset-bs-3 inset-e-2 z-10',
    filename: '',
    header: '',
    icon: '',
    root: `
      group/prose-pre-root bg-muted font-mono text-sm tab-2 rounded-xl border
      border-muted bg-clip-padding relative p-3 overflow-x-auto mbs-content-flow
      block-min whitespace-pre-wrap wrap-break-word outline-none min-inline-0
      overscroll-x-contain overscroll-y-auto

      focus-visible:ring-ring focus-visible:ring-2
    `,
  },
  variants: {
    copy: {
      true: {},
    },
  },
})

export type ProsePreVariants = VariantProps<typeof prosePreVariants>

// Component
export { default as ProsePre } from './prose-pre.vue'

// Props
export interface ProsePreProps {
  /** Language of the code block */
  language?: string

  /**
   * Display a button to copy the code to the clipboard.
   * @default true
   */
  copy?: ProsePreVariants['copy']

  /** Code content */
  code?: string

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
