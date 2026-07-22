import type { HTMLAttributes } from 'vue'
import {
  type AcceptableValue,
  createContext,
  type TagsInputInputProps as RekaTagsInputInputProps,
  type TagsInputItemProps as RekaTagsInputItemProps,
  type TagsInputRootEmits as RekaTagsInputRootEmits,
  type TagsInputRootProps as RekaTagsInputRootProps,
} from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const tagsInputVariants = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    input: `
      flex-1 outline-none group/tags-input-input

      placeholder:text-muted-foreground

      in-data-disabled:cursor-not-allowed
    `,
    item: `
      bg-muted flex items-center font-medium text-foreground wrap-anywhere
      group/tags-input-item
    `,
    itemDelete: `
      inline-flex items-center text-muted-foreground transition-colors
      group/tags-input-item-delete

      hover:not-data-disabled:text-foreground

      data-disabled:cursor-not-allowed
    `,
    itemText: 'group/tags-input-item-text',
    root: `
      relative inline-flex items-center border border-input bg-transparent
      outline-none flex-wrap group/tags-input-root

      has-focus:not-data-disabled:ring-2 has-focus:not-data-disabled:ring-ring

      data-invalid:ring-2 data-invalid:ring-error

      aria-invalid:ring-2 aria-invalid:ring-error

      data-disabled:cursor-not-allowed data-disabled:opacity-70
    `,
  },
  variants: {
    size: {
      lg: {
        input: 'text-sm',
        item: 'block-6 px-2.5 text-sm rounded-md gap-1.5 py-0.5',
        itemDelete: '*:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4',
        root: `
          min-block-9 rounded-lg px-3 gap-2 py-2

          has-data-[slot=tags-input-item]:px-2
        `,
      },
      md: {
        input: 'text-sm',
        item: 'min-block-5 px-2 text-xs rounded-md gap-1 py-0.5',
        itemDelete: '*:data-[slot=icon]:block-3.5 *:data-[slot=icon]:inline-3.5',
        root: `
          min-block-8 rounded-lg px-2.5 gap-1.5 py-1.5

          has-data-[slot=tags-input-item]:px-1.5
        `,
      },
      sm: {
        input: 'text-xs',
        item: 'min-block-4 px-1.5 text-xs rounded-md gap-1 py-0.5',
        itemDelete: '*:data-[slot=icon]:block-3 *:data-[slot=icon]:inline-3',
        root: `
          min-block-7 rounded-lg px-2 gap-1 py-1

          has-data-[slot=tags-input-item]:px-1
        `,
      },
    },
  },
})
export type TagsInputVariants = VariantProps<typeof tagsInputVariants>

// Components
export { default as TagsInputInput } from './tags-input-input.vue'
export { default as TagsInputItem } from './tags-input-item.vue'
export { default as TagsInputRoot } from './tags-input-root.vue'

// Context
export type TagsInputRootContext = Pick<TagsInputRootProps, 'size'>
export const [
  injectRootContext,
  provideRootContext,
] = createContext<TagsInputRootContext>('TagsInputRoot', 'centoui:tags-input-root:context')

// PROPS
export type TagsInputRootProps = RekaTagsInputRootProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']

  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: TagsInputVariants['size']
}

export type TagsInputItemProps = RekaTagsInputItemProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type TagsInputInputProps = RekaTagsInputInputProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

// EMITS
export type TagsInputRootEmits = RekaTagsInputRootEmits

// SLOTS
export interface TagsInputRootSlots {
  default?: (props: {
    /** Current input values */
    modelValue?: AcceptableValue
  }) => void
}
