import { tv } from 'tailwind-variants'
import type { PrimitiveProps } from 'reka-ui'
import type { AnchorHTMLAttributes } from 'vue'

export const breadcrumbVariants = tv({
  slots: {
    root: 'relative min-w-0',
    list: 'flex items-center gap-2 text-sm',
    item: 'inline-flex min-w-0 gap-2',
    link: `
      inline-flex min-w-0 items-center gap-2 text-muted-foreground
      transition-colors outline-none

      hover:text-foreground

      focus-visible:ring-2 focus-visible:ring-ring
    `,
    page: 'flex items-center gap-2 text-foreground',
    separator: 'flex items-center justify-center gap-2 text-muted-foreground',
    ellipsis: `
      inline-flex items-center justify-center gap-2 text-muted-foreground

      focus-visible:ring-2 focus-visible:ring-ring
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


// PROPS
export type BreadcrumbRootProps = PrimitiveProps & { class?: any }

export type BreadcrumbListProps = PrimitiveProps & { class?: any }

export type BreadcrumbItemProps = PrimitiveProps & { class?: any }

export type BreadcrumbLinkProps = PrimitiveProps & { class?: any } & /* @vue-ignore */ AnchorHTMLAttributes

export type BreadcrumbPageProps = PrimitiveProps & { class?: any }

export type BreadcrumbSeparatorProps = PrimitiveProps & { class?: any }

export type BreadcrumbEllipsisProps = PrimitiveProps & { class?: any }
