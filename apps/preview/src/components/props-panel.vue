<script setup lang="ts">
import { computed } from 'vue'

/**
 * Supported input control types for property editing.
 */
export type PropType = 'select' | 'boolean' | 'string' | 'number'

type SelectOption = string | number

interface BasePropDefinition {
  /** Human-readable label for the property. Falls back to a formatted key name if omitted. */
  label?: string
  /** Optional documentation or contextual help text. */
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
  /** Optional [min, max, step]. */
  options?: [number?, number?, number?]
  default?: number
}

/**
 * Defines the configuration for a single property control.
 */
export type PropDefinition
  = | SelectPropDefinition
    | BooleanPropDefinition
    | StringPropDefinition
    | NumberPropDefinition

/**
 * Map of property keys to their configuration definitions.
 */
export type PropsSchema = Record<string, PropDefinition>

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
type FallbackValue = any

type InferValueFromDefinition<T extends PropDefinition>
  = T extends SelectPropDefinition ? NonNullable<T['default']>
    : T extends BooleanPropDefinition ? boolean
      : T extends StringPropDefinition ? string
        : T extends NumberPropDefinition ? number
          : FallbackValue

export type InferValuesFromSchema<S extends PropsSchema> = {
  [K in keyof S]: InferValueFromDefinition<S[K]>
}

/**
 * Component properties for the PropsPanel.
 */
interface PropsPanelProps {
  /** The schema defining which controls to render. */
  schema: PropsSchema
  /** The current reactive values bound to the controls. */
  values: Record<string, unknown>
}

const props = defineProps<PropsPanelProps>()

/**
 * Component events.
 */
const emit = defineEmits<{
  /** Emitted when a property value is changed by the user. */
  'update:values': [values: Record<string, unknown>]
}>()

/**
 * Processes the raw schema into a list of normalized entries for iteration.
 */
const propEntries = computed(() => {
  return Object.entries(props.schema).map(([key, definition]) => ({
    key,
    label: definition.label ?? formatKeyToLabel(key),
    ...definition,
  }))
})

/**
 * Converts a camelCase or hyphenated key name into a Capitalized Label.
 *
 * @param key - The raw property key
 * @returns A formatted label string
 */
function formatKeyToLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/-/g, ' ')
    .replace(/^./, string => string.toUpperCase())
    .trim()
}

/**
 * Updates a specific property value and emits the updated values object.
 *
 * @param key - The property identifier
 * @param value - The new value to assign
 */
function handleValueUpdate(key: string, value: unknown) {
  emit('update:values', { ...props.values, [key]: value })
}

/**
 * Retrieves the current value for a key, falling back to the schema default.
 *
 * @param key - The property identifier
 * @returns The active or default value
 */
function getActiveValue(key: string): unknown {
  return props.values?.[key] ?? props.schema?.[key]?.default
}
</script>

<template>
  <aside
    class="
      w-[min(20rem,calc(100vw-1.5rem))] rounded-md border border-muted
      bg-surface/95 p-3 shadow-lg backdrop-blur-sm
    "
  >
    <p class="text-xs font-medium">
      Props
    </p>
    <div class="my-2 h-px bg-muted" />

    <div class="max-h-[50vh] space-y-3 overflow-y-auto pr-1">
      <template
        v-for="entry in propEntries"
        :key="entry.key"
      >
        <div class="space-y-1.5">
          <div class="group flex items-center justify-between">
            <label
              :for="`prop-${entry.key}`"
              class="
                text-[11px] text-muted-foreground transition-colors
                group-hover:text-foreground
              "
            >
              {{ entry.label }}
            </label>
          </div>

          <div
            v-if="entry.type === 'boolean'"
            class="
              flex items-center justify-between rounded-sm border border-muted
              bg-muted px-2 py-1.5
            "
          >
            <span class="text-[11px] text-muted-foreground">
              {{ getActiveValue(entry.key) ? 'Enabled' : 'Disabled' }}
            </span>
            <button
              :id="`prop-${entry.key}`"
              type="button"
              role="switch"
              :aria-checked="!!getActiveValue(entry.key)"
              class="
                relative inline-flex h-5 w-9 shrink-0 cursor-pointer
                rounded-full border-2 border-transparent transition-colors
                outline-none
                focus-visible:ring-2 focus-visible:ring-primary
                focus-visible:ring-offset-2 focus-visible:ring-offset-surface
              "
              :class="getActiveValue(entry.key) ? 'bg-primary' : `bg-muted`"
              @click="handleValueUpdate(entry.key, !getActiveValue(entry.key))"
            >
              <span
                class="
                  inline-block size-4 rounded-full bg-white shadow-sm
                  transition-transform
                "
                :class="getActiveValue(entry.key) ? 'translate-x-4' : `
                  translate-x-0
                `"
              />
            </button>
          </div>

          <div
            v-else-if="entry.type === 'select'"
            class="relative"
          >
            <select
              :id="`prop-${entry.key}`"
              :value="getActiveValue(entry.key)"
              class="
                h-8 w-full cursor-pointer appearance-none rounded-sm border
                border-muted bg-muted px-2 pr-8 text-xs transition-all
                outline-none
                hover:border-muted
                focus:border-primary focus:ring-1 focus:ring-primary
              "
              @change="handleValueUpdate(entry.key, ($event.target as HTMLSelectElement).value)"
            >
              <option
                v-for="option in entry.options"
                :key="String(option)"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
            <span
              class="
                pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2
                text-[10px] text-muted-foreground
              "
            >
              v
            </span>
          </div>

          <input
            v-else-if="entry.type === 'string'"
            :id="`prop-${entry.key}`"
            type="text"
            :value="getActiveValue(entry.key)"
            placeholder="No value set"
            class="
              h-8 w-full rounded-sm border border-muted bg-muted px-2 text-xs
              transition-all outline-none
              placeholder:text-muted-foreground
              hover:border-muted
              focus:border-primary focus:ring-1 focus:ring-primary
            "
            @input="handleValueUpdate(entry.key, ($event.target as HTMLInputElement).value)"
          >

          <input
            v-else-if="entry.type === 'number'"
            :id="`prop-${entry.key}`"
            type="number"
            :value="getActiveValue(entry.key)"
            :min="entry.options?.[0]"
            :max="entry.options?.[1]"
            :step="entry.options?.[2] ?? 1"
            class="
              h-8 w-full rounded-sm border border-muted bg-muted px-2 text-xs
              transition-all outline-none
              hover:border-muted
              focus:border-primary focus:ring-1 focus:ring-primary
            "
            @input="handleValueUpdate(entry.key, Number(($event.target as HTMLInputElement).value))"
          >
        </div>
      </template>
    </div>
  </aside>
</template>

<style scoped>
/* Prevent text selection while interacting with controls */
aside {
  user-select: none;
}

input[type="text"],
select {
  user-select: text;
}
</style>
