import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const breadcrumbVariants = tv({
  slots: {
    ellipsis: `
      inline-grid place-items-center gap-2 text-muted-foreground
      group/breadcrumb-ellipsis
    `,
    item: 'inline-flex min-inline-0 gap-2 group/breadcrumb-item',
    link: `
      inline-flex min-inline-0 items-center gap-2 text-muted-foreground
      transition-colors outline-none group/breadcrumb-link

      hover:text-foreground

      focus-visible:ring-2 focus-visible:ring-ring
    `,
    list: 'flex items-center gap-3 text-sm group/breadcrumb-list',
    page: 'flex items-center gap-2 text-foreground group/breadcrumb-page',
    root: 'relative min-inline-0 group/breadcrumb-root',
    separator: `
      grid place-items-center gap-2 text-muted-foreground
      group/breadcrumb-separator
    `,
  },
})

// Components
export { default as BreadcrumbEllipsis } from './breadcrumb-ellipsis.vue'
export { default as BreadcrumbItem } from './breadcrumb-item.vue'
export { default as BreadcrumbLink } from './breadcrumb-link.vue'
export { default as BreadcrumbList } from './breadcrumb-list.vue'
export { default as BreadcrumbPage } from './breadcrumb-page.vue'
export { default as BreadcrumbRoot } from './breadcrumb-root.vue'
export { default as BreadcrumbSeparator } from './breadcrumb-separator.vue'

// Props
export type BreadcrumbRootProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type BreadcrumbListProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type BreadcrumbItemProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type BreadcrumbLinkProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type BreadcrumbPageProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type BreadcrumbSeparatorProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type BreadcrumbEllipsisProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}
