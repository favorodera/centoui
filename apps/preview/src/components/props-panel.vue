<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

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
      flex h-full w-80 shrink-0 flex-col overflow-hidden border-l border-muted
      bg-surface
    "
  >
    <!-- Header -->
    <div
      class="
        sticky top-0 z-10 shrink-0 border-b border-muted bg-surface px-4 py-3
        backdrop-blur-sm
      "
    >
      <div class="flex items-center justify-between">
        <p
          class="
            mb-0.5 text-[10px] font-bold tracking-widest text-muted-foreground
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
                text-xs font-bold tracking-wider text-muted-foreground uppercase
                transition-colors
                group-hover:text-foreground
              "
            >
              {{ entry.label }}
            </label>
            <span
              class="
                font-mono text-xs text-muted-foreground tabular-nums opacity-40
              "
            >
              {{ typeof getActiveValue(entry.key) }}
            </span>
          </div>

          <!-- Boolean Control (Switch) -->
          <div
            v-if="entry.type === 'boolean'"
            class="
              flex items-center justify-between rounded-sm border
              border-muted/50 bg-secondary/30 p-2
            "
          >
            <span class="text-xs text-muted-foreground">
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

          <!-- Select Control -->
          <div
            v-else-if="entry.type === 'select'"
            class="relative"
          >
            <select
              :id="`prop-${entry.key}`"
              :value="getActiveValue(entry.key)"
              class="
                h-9 w-full cursor-pointer appearance-none rounded-sm border
                border-muted bg-secondary pr-8 pl-3 text-xs transition-all
                outline-none
                hover:border-muted
                focus:border-primary focus:ring-1 focus:ring-primary
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
                pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2
                text-xs text-muted-foreground
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
              h-9 w-full rounded-sm border border-muted bg-secondary px-3
              text-xs transition-all outline-none
              placeholder:text-muted-foreground
              hover:border-muted
              focus:border-primary focus:ring-1 focus:ring-primary
            "
            @input="handleValueUpdate(entry.key, ($event.target as HTMLInputElement).value)"
          >

          <!-- Number Control (Range) -->
          <div
            v-else-if="entry.type === 'number'"
            class="space-y-4 px-1 pt-1"
          >
            <div class="flex items-center justify-between">
              <span class="text-[10px] text-muted-foreground tabular-nums">{{ entry.options?.[0] ?? 0 }}</span>
              <span class="text-xs font-bold text-primary tabular-nums">{{ getActiveValue(entry.key) }}</span>
              <span class="text-[10px] text-muted-foreground tabular-nums">{{ entry.options?.[1] ?? 100 }}</span>
            </div>
            <input
              :id="`prop-${entry.key}`"
              type="range"
              :value="getActiveValue(entry.key)"
              :min="Number(entry.options?.[0] ?? 0)"
              :max="Number(entry.options?.[1] ?? 100)"
              :step="Number(entry.options?.[2] ?? 1)"
              class="
                h-1.5 w-full cursor-pointer rounded-full bg-secondary
                accent-primary outline-none
              "
              @input="handleValueUpdate(entry.key, Number(($event.target as HTMLInputElement).value))"
            >
          </div>

          <p
            v-if="entry.hint"
            class="pl-1 text-xs/relaxed text-muted-foreground italic"
          >
            {{ entry.hint }}
          </p>
        </div>
      </template>
    </div>

    <!-- Footer Action -->
    <div class="shrink-0 border-t border-muted bg-surface/30 p-4">
      <button
        type="button"
        class="
          flex h-8 w-full items-center justify-center gap-2 rounded-sm border
          border-dashed border-muted text-[11px] font-bold tracking-wider
          text-muted-foreground uppercase transition-all outline-none
          hover:border-primary hover:bg-primary/30 hover:text-primary
          focus-visible:ring-1 focus-visible:ring-primary
        "
        @click="emit('update:values', Object.fromEntries(propEntries.map(entry => [entry.key, entry.default])))"
      >
        <Icon
          icon="lucide:refresh-ccw"
          class="text-xs"
        />
        Reset to defaults
      </button>
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
