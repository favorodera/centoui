import type {
  PaginationEllipsisProps as RekaPaginationEllipsisProps,
  PaginationFirstProps as RekaPaginationFirstProps,
  PaginationLastProps as RekaPaginationLastProps,
  PaginationListItemProps as RekaPaginationListItemProps,
  PaginationListProps as RekaPaginationListProps,
  PaginationNextProps as RekaPaginationNextProps,
  PaginationPrevProps as RekaPaginationPrevProps,
  PaginationRootEmits as RekaPaginationRootEmits,
  PaginationRootProps as RekaPaginationRootProps,
} from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'
import type { ButtonProps } from '../button'

export const paginationVariants = tv({
  slots: {
    ellipsis: `
      flex block-8 inline-8 items-center justify-center text-muted-foreground
      group/pagination-ellipsis
    `,
    first: 'group/pagination-first',
    last: 'group/pagination-last',
    list: 'flex items-center gap-2 group/pagination-list',
    listItem: 'shrink-0 group/pagination-list-item',
    next: 'group/pagination-next',
    prev: 'group/pagination-prev',
    root: `
      mx-auto flex inline-full items-center justify-center group/pagination-root
    `,
  },
})

// COMPONENTS
export { default as PaginationEllipsis } from './pagination-ellipsis.vue'
export { default as PaginationFirst } from './pagination-first.vue'
export { default as PaginationLast } from './pagination-last.vue'
export { default as PaginationListItem } from './pagination-list-item.vue'
export { default as PaginationList } from './pagination-list.vue'
export { default as PaginationNext } from './pagination-next.vue'
export { default as PaginationPrev } from './pagination-prev.vue'
export { default as PaginationRoot } from './pagination-root.vue'

// VARIANTS
export type PaginationVariants = VariantProps<typeof paginationVariants>

// PROPS
export type PaginationRootProps = RekaPaginationRootProps & { class?: any }

export type PaginationListProps = RekaPaginationListProps & { class?: any }

export type PaginationListItemProps = ButtonProps & RekaPaginationListItemProps

export type PaginationEllipsisProps = RekaPaginationEllipsisProps & { class?: any }

export type PaginationFirstProps = ButtonProps & RekaPaginationFirstProps

export type PaginationPrevProps = ButtonProps & RekaPaginationPrevProps

export type PaginationNextProps = ButtonProps & RekaPaginationNextProps

export type PaginationLastProps = ButtonProps & RekaPaginationLastProps

// EMITS
export type PaginationRootEmits = RekaPaginationRootEmits

// SLOTS
export interface PaginationRootSlots {
  default?: (props: {
    /** Current page state */
    page: number

    /** Number of pages */
    pageCount: number
  }) => any
}

export interface PaginationListSlots {
  default?: (props: {
    /** Pages items */
    items: Array<{ type: 'ellipsis' } | { type: 'page', value: number }>
  }) => any
}
