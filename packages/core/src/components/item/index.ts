import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassProp } from 'tailwind-variants'

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
      naked: {},
      soft: {},
    },
    orientation: {
      horizontal: {},
      vertical: {},
    },
  },
})


// COMPONENTS

// export { default as ItemRoot } from './item-root.vue'
// export { default as ItemMedia } from './item-media.vue'
// export { default as ItemContent } from './item-content.vue'
// export { default as ItemHeader } from './item-header.vue'
// export { default as ItemTitle } from './item-title.vue'
// export { default as ItemDescription } from './item-description.vue'
// export { default as ItemBody } from './item-body.vue'
// export { default as ItemFooter } from './item-footer.vue'
// export { default as ItemActions } from './item-actions.vue'


// TYPES — PROPS

export type ItemRootProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type ItemMediaProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type ItemContentProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type ItemHeaderProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type ItemTitleProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type ItemDescriptionProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type ItemBodyProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type ItemFooterProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type ItemActionsProps = PrimitiveProps & Pick<ClassProp, 'class'>

