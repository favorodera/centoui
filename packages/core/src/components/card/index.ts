import type { PrimitiveProps } from 'reka-ui'
import { tv } from 'tailwind-variants'

export const cardVariants = tv({
  slots: {
    root: `
      flex flex-col gap-4 overflow-hidden rounded-lg border border-border
      bg-surface py-4

      has-data-[slot=card-footer]:pb-0
    `,
    header: `
      flex flex-col items-start gap-1 border-border px-4

      [.border-b]:pb-4
    `,
    title: 'text-base font-medium',
    description: 'text-sm text-muted-foreground',
    body: 'flex-1 px-4',
    footer: 'flex items-center bg-neutral p-4',
  },
})


// COMPONENTS
export { default as CardRoot } from './card-root.vue'
export { default as CardHeader } from './card-header.vue'
export { default as CardTitle } from './card-title.vue'
export { default as CardDescription } from './card-description.vue'
export { default as CardBody } from './card-body.vue'
export { default as CardFooter } from './card-footer.vue'


// PROPS
export type CardRootProps = PrimitiveProps & { class?: any }

export type CardHeaderProps = PrimitiveProps & { class?: any }

export type CardTitleProps = PrimitiveProps & { class?: any }

export type CardDescriptionProps = PrimitiveProps & { class?: any }

export type CardBodyProps = PrimitiveProps & { class?: any }

export type CardFooterProps = PrimitiveProps & { class?: any }
