import { tv, type VariantProps } from 'tailwind-variants'

export const fieldVariants = tv({
  defaultVariants: {
    fieldLegendVariant: 'legend',
  },
  slots: {
    fieldLegend: 'mbe-1 font-medium',
    fieldSet: 'flex flex-col gap-4',
  },
  variants: {
    fieldLegendVariant: {
      label: 'text-sm',
      legend: 'text-base',
    },
  },
})

// COMPONENTS
export { default as FieldLegend } from './field-legend.vue'
export { default as FieldSet } from './field-set.vue'

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
  variant?: FieldVariants['fieldLegendVariant']
}
