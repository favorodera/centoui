import { createContext, type PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const itemVariants = tv({
  defaultVariants: {
    variant: 'ghost',
  },
  slots: {
    body: '',
    description: '',
    header: '',
    root: '',
    title: '',
  },
  variants: {
    variant: {
      elevated: {},
      ghost: {},
      outline: {},
    },
  },
})

// COMPONENTS
export { default as ItemBody } from './item-body.vue'
export { default as ItemDescription } from './item-description.vue'
export { default as ItemHeader } from './item-header.vue'
export { default as ItemRoot } from './item-root.vue'
export { default as ItemTitle } from './item-title.vue'

// CONTEXT
export type ItemRootContext = Pick<ItemRootProps, 'variant'>

export const [
  injectRootContext,
  provideRootContext,
] = createContext<ItemRootContext>('ItemRoot', 'centoui:item-root:context')

// VARIANTS
export type ItemVariants = VariantProps<typeof itemVariants>

// PROPS
export type ItemRootProps = PrimitiveProps & {
  class?: any

  /**
   * Visual style variant.
   * @default 'ghost'
   */
  variant?: ItemVariants['variant']
}

export type ItemBodyProps = PrimitiveProps & { class?: any }

export type ItemDescriptionProps = PrimitiveProps & { class?: any }

export type ItemHeaderProps = PrimitiveProps & { class?: any }

export type ItemTitleProps = PrimitiveProps & { class?: any }