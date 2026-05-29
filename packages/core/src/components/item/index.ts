import { createContext, type PrimitiveProps } from 'reka-ui'
import { tv, type ClassProp, type VariantProps } from 'tailwind-variants'

export const itemVariants = tv({
  slots: {
    root: '',
    media: '',
    content: '',
    header: '',
    title: '',
    description: '',
    body: '',
    footer: '',
    actions: '',
  },
  variants: {
    size: {
      sm: {},
      md: {},
      lg: {},
    },
    variant: {
      outline: {},
      ghost: {},
      soft: {},
    },
    orientation: {
      horizontal: {},
      vertical: {},
    },
  },
})


// COMPONENTS

export { default as ItemRoot } from './item-root.vue'
export { default as ItemMedia } from './item-media.vue'
export { default as ItemContent } from './item-content.vue'
// export { default as ItemHeader } from './item-header.vue'
// export { default as ItemTitle } from './item-title.vue'
// export { default as ItemDescription } from './item-description.vue'
// export { default as ItemBody } from './item-body.vue'
// export { default as ItemFooter } from './item-footer.vue'
// export { default as ItemActions } from './item-actions.vue'


// CONTEXT

export const [injectCentouiItemRootContext, provideCentouiItemRootContext] = createContext<ItemRootContext>('ItemRoot', 'centoui:item-root:context')


// TYPES — Variants

export type ItemVariants = VariantProps<typeof itemVariants>


// TYPES — Context

export type ItemRootContext = Pick<ItemRootProps, 'size' | 'variant' | 'orientation'>


// TYPES — PROPS

export type ItemRootProps = PrimitiveProps & Pick<ClassProp, 'class'> & {
  /**
   * The visual size of the item.
   * @default 'md'
   */
  size?: ItemVariants['size']
  /**
   * The visual style of the item.
   * @default 'ghost'
   */
  variant?: ItemVariants['variant']
  /**
   * The arrangement of the item.
   * @default 'horizontal'
   */
  orientation?: ItemVariants['orientation']
}

export type ItemMediaProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type ItemContentProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type ItemHeaderProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type ItemTitleProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type ItemDescriptionProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type ItemBodyProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type ItemFooterProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type ItemActionsProps = PrimitiveProps & Pick<ClassProp, 'class'>

