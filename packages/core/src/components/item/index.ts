import { createContext, type PrimitiveProps } from 'reka-ui'
import { tv, type ClassProp, type VariantProps } from 'tailwind-variants'
import type { SeparatorProps } from '../separator'

export const itemVariants = tv({
  slots: {
    root: `
      group/item-root flex w-full flex-wrap items-center gap-3 rounded-lg border
      border-transparent p-4 text-sm transition-colors duration-300 outline-none

      focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none

      [a]:hover:bg-accent

      [&>img:first-child]:rounded-sm
    `,
    media: `
      grid shrink-0 place-items-center overflow-hidden

      group-has-data-[slot=item-description]/item-root:self-start

      [&_svg]:pointer-events-none [&_svg]:shrink-0
    `,
    content: 'flex flex-1 flex-col gap-2',
    title: 'truncate leading-none font-medium',
    description: 'line-clamp-2 text-balance text-muted-foreground',
    actions: 'flex shrink-0 items-center gap-2',
    group: 'flex flex-col',
    separator: 'my-0',
  },
  variants: {
    variant: {
      outline: {
        root: 'border-border bg-transparent',
      },
      ghost: {
        root: 'bg-transparent',
      },
      soft: {
        root: 'bg-surface',
      },
    },
    mediaType: {
      icon: {
        media: `
          size-10 rounded-sm border border-border bg-muted p-2

          [&_svg]:size-5
        `,
      },
      image: {
        media: `
          size-10 overflow-hidden rounded-sm bg-muted

          [&_img]:size-full [&_img]:object-cover
        `,
      },
    },
  },
  defaultVariants: {
    variant: 'ghost',
    orientation: 'horizontal',
  },
})


// COMPONENTS

export { default as ItemRoot } from './item-root.vue'
export { default as ItemMedia } from './item-media.vue'
export { default as ItemContent } from './item-content.vue'
export { default as ItemTitle } from './item-title.vue'
export { default as ItemDescription } from './item-description.vue'
export { default as ItemActions } from './item-actions.vue'
export { default as ItemGroup } from './item-group.vue'
export { default as ItemSeparator } from './item-separator.vue'


// CONTEXT

export const [injectCentouiItemRootContext, provideCentouiItemRootContext] = createContext<ItemRootContext>('ItemRoot', 'centoui:item-root:context')


// TYPES — Variants

export type ItemVariants = VariantProps<typeof itemVariants>


// TYPES — Context

export type ItemRootContext = Pick<ItemRootProps, 'variant'>


// TYPES — PROPS

export type ItemRootProps = PrimitiveProps & Pick<ClassProp, 'class'> & {
  /**
   * The visual style of the item.
   * @default 'ghost'
   */
  variant?: ItemVariants['variant']
}

export type ItemMediaProps = PrimitiveProps & Pick<ClassProp, 'class'> & {
  /** Controls whether the media slot is styled for an icon or an image. */
  type?: ItemVariants['mediaType']
}

export type ItemContentProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type ItemTitleProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type ItemDescriptionProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type ItemActionsProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type ItemGroupProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type ItemSeparatorProps = SeparatorProps


