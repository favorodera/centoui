<script setup lang="ts">
import type { PropsSchema } from '@/utils/types'
import { SwitchRoot, SwitchThumb } from '#centoui/components/switch'
import { computed } from 'vue'
import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectScrollUpButton,
  SelectViewport,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectScrollDownButton,
} from '#centoui/components/select'
import { Icon } from '#centoui/components/icon'

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
  
        <label
          :for="`prop-${entry.key}`"
          class="block text-xs font-medium text-muted-foreground"
        >
          {{ entry.label }}
        </label>

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
          <SwitchRoot
            :id="`prop-${entry.key}`"
            :model-value="!!get(entry.key)"
            @update:model-value="(payload) => set(entry.key, payload)"
          >
            <SwitchThumb />
          </SwitchRoot>
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
            <SelectIcon />
          </SelectTrigger>

          <SelectPortal>
            <SelectContent>
              <SelectScrollUpButton />

              <SelectViewport>
                <SelectItem
                  v-for="option in entry.options"
                  :key="String(option)"
                  :value="option as any"
                >
                  <SelectItemText>
                    {{ option }}
                  </SelectItemText>

                  <SelectItemIndicator />

                </SelectItem>
              </SelectViewport>

              <SelectScrollDownButton />
            </SelectContent>
          </SelectPortal>

        </SelectRoot>

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
