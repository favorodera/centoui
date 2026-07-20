import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const fieldVariants = tv({
  defaultVariants: {
    fieldOrientation: 'vertical',
    legendVariant: 'legend',
  },
  slots: {
    content: 'flex flex-col flex-1 gap-1 group/field-content',
    description: `
      text-sm text-muted-foreground text-start font-normal
      group/field-description
    `,
    error: `
      col-span-full font-normal text-sm text-error inline-full min-inline-0
      group/field-error

      first-letter:uppercase

      *:[ul]:list-disc *:[ul]:flex-col *:[ul]:flex *:[ul]:gap-1 *:[ul]:ms-4

      [[data-slot=field-set],[data-slot=field-group]]:last:-mbs-2
    `,
    field: `
      gap-2 inline-full group/field min-inline-0

      data-[invalid=true]:text-error
    `,
    group: `
      flex inline-full min-inline-0 flex-col gap-4 @container/field-group
      group/field-group
    `,
    legend: 'mbe-1 font-medium text-base group/field-legend',
    set: 'flex flex-col gap-4 group/field-set',
    title: `
      flex items-center font-medium text-sm inline-full group/field-title

      group-data-[disabled=true]/field:opacity-70
      group-data-[disabled=true]/field:cursor-not-allowed
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
export type FieldVariants = VariantProps<typeof fieldVariants>

// Components
export { default as FieldContent } from './field-content.vue'
export { default as FieldDescription } from './field-description.vue'
export { default as FieldError } from './field-error.vue'
export { default as FieldGroup } from './field-group.vue'
export { default as FieldLegend } from './field-legend.vue'
export { default as FieldSet } from './field-set.vue'
export { default as FieldTitle } from './field-title.vue'
export { default as Field } from './field.vue'

// Props
export interface FieldSetProps {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export interface FieldLegendProps {
  /** Custom style class */
  class?: HTMLAttributes['class']

  /**
   * Visual style variant.
   *
   * Use 'label' when nesting inside another FieldSet, so it reads
   * as a sub-label rather than competing with the parent legend.
   * @default 'legend'
   */
  variant?: FieldVariants['legendVariant']
}

export type FieldGroupProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type FieldProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']

  /**
   * The orientation of the field.
   * @default 'vertical'
   */
  orientation?: FieldVariants['fieldOrientation']
}

export type FieldContentProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type FieldTitleProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type FieldDescriptionProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type FieldErrorProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']

  /** The error message or messages to display. */
  errors?: Array<string | undefined | { message?: string }> | string
}
