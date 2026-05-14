<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { PropsSchema } from '@/utils/types'

interface Props {
  schema: PropsSchema
  values: Record<string, unknown>
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:values': [values: Record<string, unknown>]
}>()

const propEntries = computed(() =>
  Object.entries(props.schema).map(([key, definition]) => ({
    key,
    label: definition.label ?? formatKeyToLabel(key),
    ...definition,
  })),
)

function formatKeyToLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/-/g, ' ')
    .replace(/^./, s => s.toUpperCase())
    .trim()
}

function update(key: string, value: unknown) {
  emit('update:values', { ...props.values, [key]: value })
}

function get(key: string): unknown {
  return props.values?.[key] ?? props.schema?.[key]?.default
}
</script>

<template>
  <div class="w-full space-y-3 select-none">
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

        <!-- Boolean -->
        <div
          v-if="entry.type === 'boolean'"
          class="
            flex items-center justify-between rounded-sm border border-border
            bg-muted px-2 py-1.5
          "
        >
          <span class="text-[11px] text-muted-foreground">
            {{ get(entry.key) ? 'Enabled' : 'Disabled' }}
          </span>
          <button
            :id="`prop-${entry.key}`"
            type="button"
            role="switch"
            :aria-checked="!!get(entry.key)"
            class="
              relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full
              border-2 border-transparent transition-colors outline-none
              focus-visible:ring-2 focus-visible:ring-ring
            "
            :class="get(entry.key) ? 'bg-primary' : 'bg-muted'"
            @click="update(entry.key, !get(entry.key))"
          >
            <span
              class="
                inline-block size-4 rounded-full bg-white shadow-sm
                transition-transform
              "
              :class="get(entry.key) ? 'translate-x-4' : 'translate-x-0'"
            />
          </button>
        </div>

        <!-- Select -->
        <div
          v-else-if="entry.type === 'select'"
          class="relative"
        >
          <select
            :id="`prop-${entry.key}`"
            :value="get(entry.key)"
            class="
              h-8 w-full cursor-pointer appearance-none rounded-sm border
              border-border bg-muted px-2 pr-8 text-xs transition-all
              outline-none
              focus-visible:ring-2 focus-visible:ring-ring
            "
            @change="update(entry.key, ($event.target as HTMLSelectElement).value)"
          >
            <option
              v-for="option in entry.options"
              :key="String(option)"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
          <Icon
            icon="lucide:chevron-down"
            class="
              absolute top-1/2 right-2.5 size-4 -translate-y-1/2
              text-muted-foreground
            "
          />
        </div>

        <!-- String -->
        <input
          v-else-if="entry.type === 'string'"
          :id="`prop-${entry.key}`"
          type="text"
          :value="get(entry.key)"
          placeholder="No value set"
          class="
            h-8 w-full rounded-sm border border-border bg-muted px-2 text-xs
            transition-all outline-none
            placeholder:text-muted-foreground
            focus-visible:ring-2 focus-visible:ring-ring
          "
          @input="update(entry.key, ($event.target as HTMLInputElement).value)"
        >

        <!-- Number -->
        <input
          v-else-if="entry.type === 'number'"
          :id="`prop-${entry.key}`"
          type="number"
          :value="get(entry.key)"
          :min="entry.options?.[0]"
          :max="entry.options?.[1]"
          :step="entry.options?.[2] ?? 1"
          class="
            h-8 w-full rounded-sm border border-border bg-muted px-2 text-xs
            transition-all outline-none
            focus-visible:ring-2 focus-visible:ring-ring
          "
          @input="update(entry.key, Number(($event.target as HTMLInputElement).value))"
        >
      </div>
    </template>
  </div>
</template>

<style scoped>
input[type="text"],
select {
  user-select: text;
}
</style>
