export type PropType = 'select' | 'boolean' | 'string' | 'number'

type SelectOption = string | number

interface BasePropDefinition {
  /** Human-readable label. Falls back to a formatted key name if omitted. */
  label?: string
  /** Optional contextual help text. */
  hint?: string
}

export interface SelectPropDefinition extends BasePropDefinition {
  type: 'select'
  options?: SelectOption[]
  default?: SelectOption
}

export interface BooleanPropDefinition extends BasePropDefinition {
  type: 'boolean'
  default?: boolean
}

export interface StringPropDefinition extends BasePropDefinition {
  type: 'string'
  default?: string
}

export interface NumberPropDefinition extends BasePropDefinition {
  type: 'number'
  /** [min, max, step] */
  options?: [number?, number?, number?]
  default?: number
}

export type PropDefinition
  = | SelectPropDefinition
    | BooleanPropDefinition
    | StringPropDefinition
    | NumberPropDefinition

export type PropsSchema = Record<string, PropDefinition>

type InferValueFromDefinition<TDefinition extends PropDefinition>
  = TDefinition extends SelectPropDefinition ? NonNullable<TDefinition['default']>
    : TDefinition extends BooleanPropDefinition ? boolean
      : TDefinition extends StringPropDefinition ? string
        : TDefinition extends NumberPropDefinition ? number
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
          : any

export type InferValuesFromSchema<TSchema extends PropsSchema> = {
  [K in keyof TSchema]: InferValueFromDefinition<TSchema[K]>
}
