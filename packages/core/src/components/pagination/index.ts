import { createContext } from 'reka-ui'
import { tv, type ClassProp, type VariantProps } from 'tailwind-variants'
import {
  type PaginationRootProps as RekaPaginationRootProps,
  type PaginationRootEmits as RekaPaginationRootEmits,
  type PaginationListProps as RekaPaginationListProps,
  type PaginationListItemProps as RekaPaginationListItemProps,
  type PaginationEllipsisProps as RekaPaginationEllipsisProps,
  type PaginationFirstProps as RekaPaginationFirstProps,
  type PaginationPrevProps as RekaPaginationPrevProps,
  type PaginationNextProps as RekaPaginationNextProps,
  type PaginationLastProps as RekaPaginationLastProps,
} from 'reka-ui'
import { type ButtonProps } from '../button'

export const paginationVariants = tv({
  slots: {
    root: 'mx-auto flex w-full items-center justify-center',
    list: 'flex items-center gap-2',
    listItem: 'shrink-0',
    ellipsis: `
      flex size-8 items-center justify-center text-muted-foreground
      [&>svg]:size-4
    `,
    first: '',
    prev: '',
    next: '',
    last: '',
  },
})


// COMPONENTS

export { default as PaginationRoot } from './pagination-root.vue'
export { default as PaginationList } from './pagination-list.vue'
export { default as PaginationListItem } from './pagination-list-item.vue'
export { default as PaginationEllipsis } from './pagination-ellipsis.vue'
export { default as PaginationFirst } from './pagination-first.vue'
export { default as PaginationPrev } from './pagination-prev.vue'
export { default as PaginationNext } from './pagination-next.vue'
export { default as PaginationLast } from './pagination-last.vue'


// CONTEXT

export const [injectCentouiPaginationRootContext, provideCentouiPaginationRootContext] = createContext<PaginationRootContext>('PaginationRoot', 'centoui:pagination-root:context')


// TYPES — Variants

export type PaginationVariants = VariantProps<typeof paginationVariants>


// TYPES — Context

export type PaginationRootContext = Pick<PaginationRootProps, 'size' | 'variant' | 'activeVariant' | 'square'>


// TYPES — Props

export type PaginationRootProps = RekaPaginationRootProps & Pick<ClassProp, 'class'> & {
  /**
   * The visual size of all button-style children.
   * @default 'md'
   */
  size?: ButtonProps['size']
  /**
   * The visual style of nav buttons and inactive page items.
   * Applies to PaginationFirst, PaginationPrev, PaginationNext, PaginationLast
   * and non-active PaginationListItem children unless overridden locally.
   * @default 'ghost'
   */
  variant?: ButtonProps['variant']
  /**
   * The visual style of the active page item.
   * Applies to PaginationListItem when active, unless overridden locally.
   * @default 'outline'
   */
  activeVariant?: ButtonProps['variant']
  /**
   * Render nav buttons with equal padding on all sides.
   * Applies to PaginationFirst, PaginationPrev, PaginationNext, PaginationLast
   * unless overridden locally.
   * @default true
   */
  square?: boolean
}

export type PaginationListProps = RekaPaginationListProps & Pick<ClassProp, 'class'>

export type PaginationListItemProps = RekaPaginationListItemProps & Pick<ClassProp, 'class'> & {
  /** The visual size of the item. Overrides the root context value. */
  size?: ButtonProps['size']
  /** The visual style of the item when inactive. Overrides the root context value. */
  variant?: ButtonProps['variant']
  /** The visual style of the item when active. Overrides the root context value. */
  activeVariant?: ButtonProps['variant']
  /**
   * Whether this page item is the active page.
   * @default false
   */
  active?: boolean
}

export type PaginationEllipsisProps = RekaPaginationEllipsisProps & Pick<ClassProp, 'class'>

export type PaginationFirstProps = RekaPaginationFirstProps & Pick<ClassProp, 'class'> & {
  /** The visual size of the button. Overrides the root context value. */
  size?: ButtonProps['size']
  /** The visual style of the button. Overrides the root context value. */
  variant?: ButtonProps['variant']
  /** Render with equal padding on all sides. Overrides the root context value. */
  square?: boolean
}

export type PaginationPrevProps = RekaPaginationPrevProps & Pick<ClassProp, 'class'> & {
  /** The visual size of the button. Overrides the root context value. */
  size?: ButtonProps['size']
  /** The visual style of the button. Overrides the root context value. */
  variant?: ButtonProps['variant']
  /** Render with equal padding on all sides. Overrides the root context value. */
  square?: boolean
}

export type PaginationNextProps = RekaPaginationNextProps & Pick<ClassProp, 'class'> & {
  /** The visual size of the button. Overrides the root context value. */
  size?: ButtonProps['size']
  /** The visual style of the button. Overrides the root context value. */
  variant?: ButtonProps['variant']
  /** Render with equal padding on all sides. Overrides the root context value. */
  square?: boolean
}

export type PaginationLastProps = RekaPaginationLastProps & Pick<ClassProp, 'class'> & {
  /** The visual size of the button. Overrides the root context value. */
  size?: ButtonProps['size']
  /** The visual style of the button. Overrides the root context value. */
  variant?: ButtonProps['variant']
  /** Render with equal padding on all sides. Overrides the root context value. */
  square?: boolean
}


// TYPES — Emits

export type PaginationRootEmits = RekaPaginationRootEmits


// TYPES — Slots

export type PaginationRootSlots = {
  default: (props: {
    /** Current page state */
    page: number
    /** Number of pages */
    pageCount: number
  }) => []
}

export type PaginationListSlots = {
  default: (props: {
    /** Pages items */
    items: Array<{ type: 'ellipsis' } | { type: 'page', value: number }>
  }) => []
}
