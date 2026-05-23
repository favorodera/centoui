import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassProp } from 'tailwind-variants'
import type { AnchorHTMLAttributes } from 'vue'

export const breadcrumbVariants = tv({
  slots: {
    root: 'relative min-w-0',
    list: 'inline-flex items-center gap-2 text-sm',
    item: 'inline-flex min-w-0 gap-2',
    link: `
      inline-flex min-w-0 items-center gap-2 text-muted-foreground
      transition-colors duration-300 outline-none
      hover:text-foreground
      focus-visible:ring-2 focus-visible:ring-ring
      [&_svg]:size-4 [&_svg]:shrink-0
    `,
    page: `
      flex items-center justify-center gap-2 text-foreground
      [&>svg]:size-4
    `,
    separator: `
      flex items-center justify-center gap-2 text-muted-foreground
      [&>svg]:size-4
    `,
    ellipsis: `
      flex size-8 items-center justify-center gap-2 text-muted-foreground
      [&>svg]:size-4
    `,
  },
})


// COMPONENTS

export { default as BreadcrumbRoot } from './breadcrumb-root.vue'
export { default as BreadcrumbList } from './breadcrumb-list.vue'
export { default as BreadcrumbItem } from './breadcrumb-item.vue'
export { default as BreadcrumbLink } from './breadcrumb-link.vue'
export { default as BreadcrumbPage } from './breadcrumb-page.vue'
export { default as BreadcrumbSeparator } from './breadcrumb-separator.vue'
export { default as BreadcrumbEllipsis } from './breadcrumb-ellipsis.vue'


// TYPES — Props

export type BreadcrumbRootProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type BreadcrumbListProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type BreadcrumbItemProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type BreadcrumbLinkProps = PrimitiveProps & /* @vue-ignore */ AnchorHTMLAttributes & Pick<ClassProp, 'class'>

export type BreadcrumbPageProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type BreadcrumbSeparatorProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type BreadcrumbEllipsisProps = PrimitiveProps & Pick<ClassProp, 'class'>
