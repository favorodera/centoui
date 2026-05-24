type BasePropDefinition = {
  /** Human-readable label. Falls back to formatted key name if omitted. */
  label?: string
  /** Optional contextual help text. */
  hint?: string
}

type ArrayPropDefinition = BasePropDefinition & {
  type: 'array'
  options?: unknown[]
  default?: unknown
}

type BooleanPropDefinition = BasePropDefinition & {
  type: 'boolean'
  default?: boolean
}

type StringPropDefinition = BasePropDefinition & {
  type: 'string'
  default?: string
}

type PropDefinition
  = | ArrayPropDefinition
    | BooleanPropDefinition
    | StringPropDefinition

export type PropsSchema = Record<string, PropDefinition>

type InferValueFromDefinition<TDefinition extends PropDefinition>
  = TDefinition extends ArrayPropDefinition ? NonNullable<TDefinition['default']>
    : TDefinition extends BooleanPropDefinition ? boolean
      : TDefinition extends StringPropDefinition ? string
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        : any

export type InferValuesFromSchema<TSchema extends PropsSchema> = {
  [K in keyof TSchema]: InferValueFromDefinition<TSchema[K]>
}
