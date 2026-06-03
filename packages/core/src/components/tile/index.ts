import { createContext, type PrimitiveProps } from 'reka-ui'
import { tv, type ClassProp, type VariantProps } from 'tailwind-variants'

export const tileVariants = tv({
  slots: {
    root: `
      group/tile-root flex w-full cursor-default flex-wrap items-center gap-2
      rounded-lg border border-transparent px-4 py-3 text-sm transition-colors
      outline-none

      focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none

      [a]:hover:bg-accent

      [&>img:first-child]:rounded-sm
    `,
    media: `
      grid shrink-0 place-items-center overflow-hidden rounded-sm bg-muted

      group-has-data-[slot=tile-description]/tile-root:self-start

      [&_svg]:pointer-events-none [&_svg]:shrink-0
    `,
    content: 'grid flex-1',
    title: 'truncate leading-normal font-medium',
    description: 'line-clamp-2 leading-tight text-muted-foreground',
    actions: 'flex shrink-0 items-center gap-2',
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
          size-10 border border-border p-2

          [&_svg]:size-5
        `,
      },
      image: {
        media: `
          size-10 overflow-hidden

          [&_img]:size-full [&_img]:object-cover
        `,
      },
    },
  },
  defaultVariants: {
    variant: 'ghost',
  },
})


// COMPONENTS

export { default as TileRoot } from './tile-root.vue'
export { default as TileMedia } from './tile-media.vue'
export { default as TileContent } from './tile-content.vue'
export { default as TileTitle } from './tile-title.vue'
export { default as TileDescription } from './tile-description.vue'
export { default as TileActions } from './tile-actions.vue'


// CONTEXT

export const [injectCentouiTileRootContext, provideCentouiTileRootContext] = createContext<TileRootContext>('TileRoot', 'centoui:tile-root:context')


// TYPES — Variants

export type TileVariants = VariantProps<typeof tileVariants>


// TYPES — Context

export type TileRootContext = Pick<TileRootProps, 'variant'>


// TYPES — PROPS

export type TileRootProps = PrimitiveProps & Pick<ClassProp, 'class'> & {
  /**
   * The visual style of the tile.
   * @default 'ghost'
   */
  variant?: TileVariants['variant']
}

export type TileMediaProps = PrimitiveProps & Pick<ClassProp, 'class'> & {
  /** Controls whether the media slot is styled for an icon or an image. */
  type?: TileVariants['mediaType']
}

export type TileContentProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type TileTitleProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type TileDescriptionProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type TileActionsProps = PrimitiveProps & Pick<ClassProp, 'class'>
