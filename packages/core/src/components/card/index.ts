import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassProp } from 'tailwind-variants'

export const cardVariants = tv({
  slots: {
    root: [
      'flex flex-col gap-6 overflow-hidden rounded-xl bg-surface shadow-lg',
      'py-6',
    ],
    header: `
      flex flex-col items-start gap-2 px-6 text-left
      [&.border-b]:pb-6
    `,
    title: 'text-base font-medium',
    description: 'text-sm text-muted-foreground',
    body: 'flex-1 px-6',
    footer: `
      flex items-center px-6
      [&.border-t]:pt-6
    `,
  },
})

// COMPONENTS

export { default as CardRoot } from './card-root.vue'
export { default as CardHeader } from './card-header.vue'
export { default as CardTitle } from './card-title.vue'
export { default as CardDescription } from './card-description.vue'
export { default as CardBody } from './card-body.vue'
export { default as CardFooter } from './card-footer.vue'


// TYPES — Props

export type CardRootProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type CardHeaderProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type CardTitleProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type CardDescriptionProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type CardBodyProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type CardFooterProps = PrimitiveProps & Pick<ClassProp, 'class'>
