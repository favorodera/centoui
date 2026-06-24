import { createContext, type PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const alertVariants = tv({
  defaultVariants: {
    variant: 'neutral',
  },
  slots: {
    body: 'flex-1 min-inline-0 text-sm',
    description: 'mbs-1 font-normal',
    root: 'flex items-start inline-full p-4 gap-3 rounded-lg flex-wrap',
    title: 'font-medium',
  },
  variants: {
   variant: {
      error: {
        root: 'bg-error/10 text-error',
      },
      info: {
        root: 'bg-info/10 text-info',
      },
      neutral: {
        root: 'bg-neutral text-foreground',
      },
      success: {
        root: 'bg-success/10 text-success',
      },
      warning: {
        root: 'bg-warning/10 text-warning',
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
