import { tv, type ClassProp } from 'tailwind-variants'
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

export const paginationVariants = tv({
  slots: {
    root: '',
    list: '',
    listItem: '',
    ellipsis: '',
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


// TYPES — Props

export type PaginationRootProps = RekaPaginationRootProps & Pick<ClassProp, 'class'>

export type PaginationListProps = RekaPaginationListProps & Pick<ClassProp, 'class'>

export type PaginationListItemProps = RekaPaginationListItemProps & Pick<ClassProp, 'class'>

export type PaginationEllipsisProps = RekaPaginationEllipsisProps & Pick<ClassProp, 'class'>

export type PaginationFirstProps = RekaPaginationFirstProps & Pick<ClassProp, 'class'>

export type PaginationPrevProps = RekaPaginationPrevProps & Pick<ClassProp, 'class'>

export type PaginationNextProps = RekaPaginationNextProps & Pick<ClassProp, 'class'>

export type PaginationLastProps = RekaPaginationLastProps & Pick<ClassProp, 'class'>


// TYPES — Props

export type PaginationRootEmits = RekaPaginationRootEmits


// TYPES — Props

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
