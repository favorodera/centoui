import type { PrimitiveProps } from 'reka-ui'
import { tv } from 'tailwind-variants'

export const cardVariants = tv({
  slots: {
    description: 'text-sm text-muted-foreground',
    footer: `flex gap-2 p-6 -mx-6 -mbe-6 bg-neutral`,
    header: `flex flex-col gap-1 px-6 pbs-6 -mx-6 -mbs-6`,
    root: `
      flex flex-col gap-4 overflow-hidden rounded-md border border-border
      bg-surface p-6
    `,
    title: 'text-base font-semibold',
  },
})

// COMPONENTS
export { default as CardDescription } from './card-description.vue'
export { default as CardFooter } from './card-footer.vue'
export { default as CardHeader } from './card-header.vue'
export { default as CardRoot } from './card-root.vue'
export { default as CardTitle } from './card-title.vue'

// PROPS
export type CardRootProps = PrimitiveProps & { class?: any }

export type CardHeaderProps = PrimitiveProps & { class?: any }

export type CardTitleProps = PrimitiveProps & { class?: any }

export type CardDescriptionProps = PrimitiveProps & { class?: any }

export type CardFooterProps = PrimitiveProps & { class?: any }
