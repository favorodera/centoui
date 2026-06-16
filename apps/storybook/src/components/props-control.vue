<script setup lang="ts">
import type { PropsSchema } from '@/utils/types'
import { Switch } from '#centoui/components/switch'
import { computed } from 'vue'
import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '#centoui/components/select'
import { Icon } from '#centoui/components/icon'
import { Input } from '#centoui/components/input'
import { Label } from '#centoui/components/label'

const props = defineProps<{
  schema?: PropsSchema | null
  values: Record<string, unknown>
}>()

const emit = defineEmits<{
  'update:values': [values: Record<string, unknown>]
}>()

const entries = computed(() =>
  Object
    .entries(props.schema ?? {})
    .map(([key, definition]) => ({
      key,
      label: definition.label,
      ...definition,
    })),
)

function get(key: string): unknown {
  return props.values?.[key] ?? props.schema?.[key]?.default
}

function set(key: string, value: unknown) {
  emit('update:values', { ...props.values, [key]: value })
}
</script>

<template>
  <div class="flex size-full flex-col space-y-4">

    <template v-if="entries.length">
      <div
        v-for="entry in entries"
        :key="entry.key"
        class="space-y-1.5"
      >
  
        <Label
          :for="`prop-${entry.key}`"
        >
          {{ entry.label }}
        </Label>

        <!-- Boolean -->
        <div
          v-if="entry.type === 'boolean'"
          class="
            flex items-center justify-between rounded-md border border-input
            px-3 py-1.5
          "
        >
          <span class="text-xs text-muted-foreground">
            {{ get(entry.key) ? 'ON' : 'OFF' }}
          </span>
          <Switch
            :id="`prop-${entry.key}`"
            :model-value="!!get(entry.key)"
            @update:model-value="(payload) => set(entry.key, payload)"
          />
        </div>

        <!-- Array -->
        <SelectRoot
          v-else-if="entry.type === 'array'"
          :model-value="String(get(entry.key))"
          @update:model-value="(value)=>set(entry.key, value)"
        >
          <SelectTrigger
            :id="`prop-${entry.key}`"
          >
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem
              v-for="option in entry.options"
              :key="String(option)"
              :value="option as any"
            >
              {{ option }}
            </SelectItem>
          </SelectContent>
        </SelectRoot>

        <!-- String -->
        <Input
          v-else-if="entry.type === 'string'"
          :id="`prop-${entry.key}`"
          :value="String(get(entry.key))"
          @update:value="(value) => set(entry.key, value)"
        />

        <div
          v-if="entry.hint"
          class="-mt-0.5 text-xs text-muted-foreground"
        >
          {{ entry.hint }}
        </div>

      </div>
    </template>

    <div
      v-else
      class="m-auto space-y-1 text-center text-xs text-muted-foreground"
    >

      <Icon
        icon="lucide:octagon-alert"
        class="mx-auto size-4 text-muted-foreground"
      />
      <div>No props found</div>
    </div>

  </div>
</template>
