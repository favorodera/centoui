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
    clear: '',
    input: '',
    item: '',
    itemDelete: '',
    itemText: '',
    root: '',
  },
  variants: {
    size: {
      lg: {},
      md: {},
      sm: {},
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
