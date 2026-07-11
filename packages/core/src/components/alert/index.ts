import { createContext, type PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const alertVariants = tv({
  defaultVariants: {
    variant: 'neutral',
  },
  slots: {
    content: `
      flex-1 min-inline-0 text-sm flex flex-col gap-1 group/alert-content
    `,
    description: `
      font-normal text-sm group/alert-description

      **:[a]:underline **:[a]:underline-offset-4 **:[a]:transition-[color]

      **:[a]:hover:text-primary
    `,
    root: `
      flex items-start inline-full p-3 gap-3 rounded-lg flex-wrap bg-elevated
      border group/alert-root

      *:data-[slot=icon]:translate-y-0.5
    `,
    title: `
      font-medium text-sm group/alert-title

      **:[a]:underline **:[a]:underline-offset-4 **:[a]:transition-[color]

      **:[a]:hover:text-primary
    `,
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

// COMPONENTS
export { default as AlertContent } from './alert-content.vue'
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

export type AlertContentProps = PrimitiveProps & { class?: any }

export type AlertTitleProps = PrimitiveProps & { class?: any }

export type AlertDescriptionProps = PrimitiveProps & { class?: any }
