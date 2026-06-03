import { tv, type VariantProps } from 'tailwind-variants'
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
    ellipsis: 'flex size-8 items-center justify-center text-muted-foreground',
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
export type PaginationRootSlots = {
  default?: (props: {
    /** Current page state */
    page: number
    /** Number of pages */
    pageCount: number
  }) => any
}

export type PaginationListSlots = {
  default?: (props: {
    /** Pages items */
    items: Array<{ type: 'ellipsis' } | { type: 'page', value: number }>
  }) => any
}
