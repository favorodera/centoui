import type { PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const fieldVariants = tv({
  defaultVariants: {
    fieldOrientation: 'vertical',
    legendVariant: 'legend',
  },
  slots: {
    content: 'flex flex-col flex-1 gap-1',
    description: `
      text-sm text-muted-foreground text-start font-normal

      [&>a]:underline [&>a]:underline-offset-4

      [&>a:hover]:text-primary
    `,
    error: `
      col-span-full font-normal text-sm text-error inline-full min-inline-0

      first-letter:uppercase

      [&>ul]:list-disc [&>ul]:flex-col [&>ul]:flex [&>ul]:gap-1 [&>ul]:ms-4

      [:is([data-slot=field-set],[data-slot=field-group])>&:last-child]:-mbs-2
    `,
    field: `
      gap-2 inline-full group/field min-inline-0

      data-[invalid=true]:text-error
    `,
    group: 'flex inline-full min-inline-0 flex-col gap-4 @container/field-group',
    legend: 'mbe-1 font-medium text-base',
    set: 'flex flex-col gap-4',
    title: `
      flex items-center font-medium text-sm inline-full

      group-data-[disabled=true]/field:opacity-65
      group-data-[disabled=true]/field:pointer-events-none
    `,
  },
  variants: {
    fieldOrientation: {
      auto: {
        field: `
          grid grid-cols-1

          @md/field-group:grid-cols-[auto_minmax(0,1fr)]
          @md/field-group:items-center

          @md/field-group:*:not-data-[slot=field-content]:not-data-[slot=field-error]:not-data-[slot=label]:justify-self-end

          @md/field-group:has-[>[data-slot=field-content]]:items-start
        `,
      },
      horizontal: {
        field: `
          grid grid-cols-[auto_minmax(0,1fr)] items-center

          *:not-data-[slot=field-content]:not-data-[slot=field-error]:not-data-[slot=label]:justify-self-end

          has-[>[data-slot=field-content]]:items-start
        `,
      },
      vertical: {
        field: 'flex flex-col',
      },
    },
    legendVariant: {
      label: {
        legend: 'text-sm',
      },
      legend: {
        legend: 'text-base',
      },
    },
  },
})

// COMPONENTS
export { default as FieldContent } from './field-content.vue'
export { default as FieldDescription } from './field-description.vue'
export { default as FieldError } from './field-error.vue'
export { default as FieldGroup } from './field-group.vue'
export { default as FieldLegend } from './field-legend.vue'
export { default as FieldSet } from './field-set.vue'
export { default as FieldTitle } from './field-title.vue'
export { default as Field } from './field.vue'

// VARIANTS
export type FieldVariants = VariantProps<typeof fieldVariants>

// PROPS
export interface FieldSetProps {
  class?: any
}

export interface FieldLegendProps {
  class?: any

  /**
   * Visual style variant.
   *
   * Use 'label' when nesting inside another FieldSet, so it reads
   * as a sub-label rather than competing with the parent legend.
   * @default 'legend'
   */
  variant?: FieldVariants['legendVariant']
}

export type FieldGroupProps = PrimitiveProps & { class?: any }

export type FieldProps = PrimitiveProps & {
  class?: any

  /**
   * The orientation of the field.
   * @default 'vertical'
   */
  orientation?: FieldVariants['fieldOrientation']
}

export type FieldContentProps = PrimitiveProps & { class?: any }

export type FieldTitleProps = PrimitiveProps & { class?: any }

export type FieldDescriptionProps = PrimitiveProps & { class?: any }

export type FieldErrorProps = PrimitiveProps & {
  class?: any

  /** The error message or messages to display. */
  errors?: Array<string | undefined | { message?: string }> | string
}
