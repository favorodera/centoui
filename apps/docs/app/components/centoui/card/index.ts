import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const cardVariants = tv({
  slots: {
    description: 'text-sm text-muted-foreground group/card-description',
    footer: `flex gap-2 p-4 -mx-4 -mbe-4 bg-muted/50 group/card-footer`,
    header: `flex flex-col gap-1 px-4 pbs-4 -mx-4 -mbs-4 group/card-header`,
    root: `
      flex flex-col gap-4 overflow-hidden rounded-xl border bg-elevated p-4
      group/card-root bg-clip-padding

      *:data-[slot=separator]:data-[orientation=horizontal]:-mx-4
    `,
    title: 'text-base font-semibold group/card-title',
  },
})

// Components
export { default as CardDescription } from './card-description.vue'
export { default as CardFooter } from './card-footer.vue'
export { default as CardHeader } from './card-header.vue'
export { default as CardRoot } from './card-root.vue'
export { default as CardTitle } from './card-title.vue'

// Props
export type CardRootProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type CardHeaderProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type CardTitleProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type CardDescriptionProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type CardFooterProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}
