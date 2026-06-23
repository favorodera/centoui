import { createContext, type PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const alertVariants = tv({
  defaultVariants: {
    variant: 'neutral',
  },
  slots: {
    body: 'flex-1 min-inline-0 text-sm',
    description: 'mbs-1 font-normal',
    root: `
      flex items-start inline-full p-4 gap-3 rounded-lg bg-surface flex-wrap
    `,
    title: 'font-medium',
  },
  variants: {
    variant: {
      error: {
        description: 'text-error/90',
        root: 'text-error',
      },
      info: {
        description: 'text-info/90',
        root: 'text-info',
      },
      neutral: {
        description: 'text-foreground/90',
        root: 'text-foreground',
      },
      success: {
        description: 'text-success/90',
        root: 'text-success',
      },
      warning: {
        description: 'text-warning/90',
        root: 'text-warning',
      },
    },
  },
})

// COMPONENTS
export { default as AlertBody } from './alert-body.vue'
export { default as AlertDescription } from './alert-description.vue'
export { default as AlertRoot } from './alert-root.vue'
export { default as AlertTitle } from './alert-title.vue'

// CONTEXT
export type AlertRootContext = Pick<AlertRootProps, 'variant'>

export const [
  injectRootContext,
  provideRootContext,
] = createContext<AlertRootContext>('AlertRoot', 'centoui:alert-root:context')

// VARIANTS
export type AlertVariants = VariantProps<typeof alertVariants>

// PROPS
export type AlertRootProps = PrimitiveProps & {
  class?: any

  /**
   * Visual style variant.
   * @default 'neutral'
   */
  variant?: AlertVariants['variant']
}

export type AlertBodyProps = PrimitiveProps & { class?: any }

export type AlertTitleProps = PrimitiveProps & { class?: any }

export type AlertDescriptionProps = PrimitiveProps & { class?: any }
