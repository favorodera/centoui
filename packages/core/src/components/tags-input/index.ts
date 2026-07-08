import {
  type AcceptableValue,
  createContext,
  type TagsInputInputProps as RekaTagsInputInputProps,
  type TagsInputItemProps as RekaTagsInputItemProps,
  type TagsInputRootEmits as RekaTagsInputRootEmits,
  type TagsInputRootProps as RekaTagsInputRootProps,
} from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const tagsInputVariants = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    input: `
      flex-1 outline-none

      placeholder:text-muted-foreground
    `,
    item: `
      bg-muted flex items-center font-medium text-foreground wrap-anywhere

      has-data-disabled:pointer-events-none has-data-disabled:opacity-65
    `,
    itemDelete: `
      inline-flex items-center rounded-xs text-muted-foreground
      transition-colors

      hover:text-foreground

      disabled:pointer-events-none
    `,
    itemText: '',
    root: `
      relative inline-flex items-center border border-input bg-transparent
      outline-none flex-wrap

      has-focus:ring-2 has-focus:ring-ring

      data-invalid:ring-2 data-invalid:ring-error

      aria-invalid:ring-2 aria-invalid:ring-error

      data-disabled:pointer-events-none data-disabled:opacity-65
    `,
  },
  variants: {
    size: {
      lg: {
        input: 'text-sm',
        item: 'rounded-sm px-2 text-sm gap-1',
        itemDelete: '*:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4',
        root: `
          min-block-9 rounded-lg px-3.5 gap-1.5

          has-data-[slot=tags-input-item]:py-2
        `,
      },
      md: {
        input: 'text-sm',
        item: 'rounded-sm px-1.5 text-xs gap-1',
        itemDelete: '*:data-[slot=icon]:block-3.5 *:data-[slot=icon]:inline-3.5',
        root: `
          min-block-8 rounded-lg px-3 gap-1.5

          has-data-[slot=tags-input-item]:py-1.5
        `,
      },
      sm: {
        input: 'text-xs',
        item: 'rounded-xs px-1 text-xs gap-1',
        itemDelete: '*:data-[slot=icon]:block-3 *:data-[slot=icon]:inline-3',
        root: `
          min-block-7 rounded-md px-2.5 gap-1

          has-data-[slot=tags-input-item]:py-1
        `,
      },
    },
  },
})

// COMPONENTS
export { default as TagsInputInput } from './tags-input-input.vue'
export { default as TagsInputItem } from './tags-input-item.vue'
export { default as TagsInputRoot } from './tags-input-root.vue'

// CONTEXT
export type TagsInputRootContext = Pick<TagsInputRootProps, 'size'>

export const [
  injectRootContext,
  provideRootContext,
] = createContext<TagsInputRootContext>('TagsInputRoot', 'centoui:tags-input-root:context')

// VARIANTS
export type TagsInputVariants = VariantProps<typeof tagsInputVariants>

// PROPS
export type TagsInputRootProps = RekaTagsInputRootProps & {
  class?: any

  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: TagsInputVariants['size']
}

export type TagsInputItemProps = RekaTagsInputItemProps & { class?: any }

export type TagsInputInputProps = RekaTagsInputInputProps & { class?: any }

// EMITS
export type TagsInputRootEmits = RekaTagsInputRootEmits

// SLOTS
export interface TagsInputRootSlots {
  default?: (props: {
    /** Current input values */
    modelValue?: AcceptableValue
  }) => any
}
