<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { Button } from '../../../../packages/core/src/components/button'

/**
 * Supported input control types for property editing.
 */
export type PropType = 'select' | 'boolean' | 'string' | 'number' | 'color'

/**
 * Defines the configuration for a single property control.
 */
export interface PropDefinition {
  /** The type of input control to render. */
  type: PropType
  /** Human-readable label for the property. Falls back to a formatted key name if omitted. */
  label?: string
  /**
   * List of selectable options.
   * Required for 'select'.
   * For 'number', can define [min, max, step].
   * For 'color', can define a list of theme color names.
   */
  options?: string[]
  /** The baseline value for the property. */
  default?: unknown
  /** Optional documentation or contextual help text. */
  hint?: string
}

/**
 * Map of property keys to their configuration definitions.
 */
export type PropsSchema = Record<string, PropDefinition>

/**
 * Component properties for the PropsPanel.
 */
interface PropsPanelProps {
  /** The name of the component being configured, shown in the header. */
  componentName?: string
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
function getActiveValue(key: string) {
  return props.values?.[key] ?? props.schema?.[key]?.default
}
</script>

<template>
  <aside
    class="
      border-muted bg-surface flex h-full w-80 shrink-0 flex-col overflow-hidden
      border-l
    "
  >
    <!-- Header -->
    <div
      class="
        border-muted bg-surface sticky top-0 z-10 shrink-0 border-b px-4 py-3
        backdrop-blur-sm
      "
    >
      <div class="flex items-center justify-between">
        <p
          class="
            text-muted-foreground mb-0.5 text-[10px] font-bold tracking-widest
            uppercase
          "
        >
          Properties
        </p>
      </div>
      <h2 class="truncate text-sm font-bold">
        {{ componentName || 'Settings' }}
      </h2>
    </div>

    <!-- Controls Body -->
    <div
      class="flex-1 space-y-6 overflow-y-auto px-4 py-6"
    >
      <template
        v-for="entry in propEntries"
        :key="entry.key"
      >
        <div class="space-y-2.5">
          <!-- Label and Value Type indicator -->
          <div class="group flex items-center justify-between">
            <label
              :for="`prop-${entry.key}`"
              class="
                text-muted-foreground
                group-hover:text-foreground
                text-xs font-bold tracking-wider uppercase transition-colors
              "
            >
              {{ entry.label }}
            </label>
            <span
              class="
                text-muted-foreground font-mono text-xs tabular-nums opacity-40
              "
            >
              {{ typeof getActiveValue(entry.key) }}
            </span>
          </div>

          <!-- Boolean Control (Switch) -->
          <div
            v-if="entry.type === 'boolean'"
            class="
              border-muted bg-muted flex items-center justify-between rounded-sm
              border p-2
            "
          >
            <span class="text-muted-foreground text-xs">
              {{ getActiveValue(entry.key) ? 'Enabled' : 'Disabled' }}
            </span>
        
            <button
              :id="`prop-${entry.key}`"
              type="button"
              role="switch"
              :aria-checked="!!getActiveValue(entry.key)"
              class="
                focus-visible:ring-primary focus-visible:ring-offset-surface
                relative inline-flex h-5 w-9 shrink-0 cursor-pointer
                rounded-full border-2 border-transparent transition-colors
                outline-none
                focus-visible:ring-2 focus-visible:ring-offset-2
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

          <!-- Select Control -->
          <div
            v-else-if="entry.type === 'select'"
            class="relative"
          >
            <select
              :id="`prop-${entry.key}`"
              :value="getActiveValue(entry.key)"
              class="
                border-muted bg-muted
                hover:border-muted
                focus:border-primary focus:ring-primary
                h-9 w-full cursor-pointer appearance-none rounded-sm border pr-8
                pl-3 text-xs transition-all outline-none
                focus:ring-1
              "
              @change="handleValueUpdate(entry.key, ($event.target as HTMLSelectElement).value)"
            >
              <option
                v-for="option in entry.options"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
            <Icon
              icon="lucide:chevron-down"
              class="
                text-muted-foreground pointer-events-none absolute top-1/2
                right-2.5 -translate-y-1/2 text-xs
              "
            />
          </div>

          <!-- String Control -->
          <input
            v-else-if="entry.type === 'string'"
            :id="`prop-${entry.key}`"
            type="text"
            :value="getActiveValue(entry.key)"
            placeholder="No value set"
            class="
              border-muted bg-muted
              placeholder:text-muted-foreground
              hover:border-muted
              focus:border-primary focus:ring-primary
              h-9 w-full rounded-sm border px-3 text-xs transition-all
              outline-none
              focus:ring-1
            "
            @input="handleValueUpdate(entry.key, ($event.target as HTMLInputElement).value)"
          >

          <!-- Number Control (Range) -->
          <div
            v-else-if="entry.type === 'number'"
            class="space-y-4 px-1 pt-1"
          >
            <div class="flex items-center justify-between">
              <span class="text-muted-foreground text-[10px] tabular-nums">{{ entry.options?.[0] ?? 0 }}</span>
              <span class="text-primary text-xs font-bold tabular-nums">{{ getActiveValue(entry.key) }}</span>
              <span class="text-muted-foreground text-[10px] tabular-nums">{{ entry.options?.[1] ?? 100 }}</span>
            </div>
            <input
              :id="`prop-${entry.key}`"
              type="range"
              :value="getActiveValue(entry.key)"
              :min="Number(entry.options?.[0] ?? 0)"
              :max="Number(entry.options?.[1] ?? 100)"
              :step="Number(entry.options?.[2] ?? 1)"
              class="
                bg-muted accent-primary h-1.5 w-full cursor-pointer rounded-full
                outline-none
              "
              @input="handleValueUpdate(entry.key, Number(($event.target as HTMLInputElement).value))"
            >
          </div>

          <p
            v-if="entry.hint"
            class="text-muted-foreground pl-1 text-xs/relaxed italic"
          >
            {{ entry.hint }}
          </p>
        </div>
      </template>
    </div>

    <!-- Footer Action -->
    <div class="border-muted bg-surface shrink-0 border-t p-4">
      <Button
        class="w-full"
        color="secondary"
        @click="emit('update:values', Object.fromEntries(propEntries.map(entry => [entry.key, entry.default])))"
      >
        Reset to defaults
      </Button>
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
