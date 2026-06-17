interface BasePropDefinition {
  /** Optional contextual help text. */
  hint?: string
}

type ArrayPropDefinition = BasePropDefinition & {
  default?: unknown
  options?: Array<unknown>
  type: 'array'
}

type BooleanPropDefinition = BasePropDefinition & {
  default?: boolean
  type: 'boolean'
}

type StringPropDefinition = BasePropDefinition & {
  default?: string
  type: 'string'
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

        : any

export type InferValuesFromSchema<TSchema extends PropsSchema> = {
  [K in keyof TSchema]: InferValueFromDefinition<TSchema[K]>
}
