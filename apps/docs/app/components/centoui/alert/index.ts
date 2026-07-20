import type { HTMLAttributes } from 'vue'
import { createContext, type PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const alertVariants = tv({
  defaultVariants: {
    variant: 'neutral',
  },
  slots: {
    content: `flex-1 min-inline-0 flex flex-col gap-1 group/alert-content`,
    description: `font-normal group/alert-description`,
    root: `
      flex items-start inline-full p-3 gap-3 text-sm rounded-lg flex-wrap
      bg-elevated border group/alert-root bg-clip-padding

      *:data-[slot=icon]:translate-y-0.5
    `,
    title: `font-medium group/alert-title`,
  },
  variants: {
    variant: {
      error: {
        root: 'text-error',
      },
      info: {
        root: 'text-info',
      },
      neutral: {
        root: 'text-foreground',
      },
      success: {
        root: 'text-success',
      },
      warning: {
        root: 'text-warning',
      },
    },
  },
})
export type AlertVariants = VariantProps<typeof alertVariants>

// Components
export { default as AlertContent } from './alert-content.vue'
export { default as AlertDescription } from './alert-description.vue'
export { default as AlertRoot } from './alert-root.vue'
export { default as AlertTitle } from './alert-title.vue'

// Context
export type AlertRootContext = Pick<AlertRootProps, 'variant'>
export const [
  injectRootContext,
  provideRootContext,
] = createContext<AlertRootContext>('AlertRoot', 'centoui:alert-root:context')

// Props
export type AlertRootProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']

  /**
   * Visual style variant.
   * @default 'neutral'
   */
  variant?: AlertVariants['variant']
}

export type AlertContentProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type AlertTitleProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type AlertDescriptionProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}
