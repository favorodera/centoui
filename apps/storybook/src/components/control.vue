<script setup lang="ts">
import { computed } from 'vue'
import type { PropsSchema } from '@/utils/types'
import { Field, FieldDescription, FieldGroup } from '#centoui/components/field'
import { Icon } from '#centoui/components/icon'
import { Input } from '#centoui/components/input'
import { Label } from '#centoui/components/label'
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from '#centoui/components/select'
import { Switch } from '#centoui/components/switch'

const emit = defineEmits<{
  'update:values': [values: Record<string, unknown>]
}>()

const props = defineProps<{
  schema?: null | PropsSchema
  values: Record<string, unknown>
}>()

const entries = computed(() => Object
  .entries(props.schema ?? {})
  .map(([
    key,
    definition,
  ]) => ({
    key,
    ...definition,
  })))

/**
 * Get prop value
 * @param key Prop key
 * @returns Prop value
 */
function get(key: string): unknown {
  return props.values?.[key] ?? props.schema?.[key]?.default
}

/**
 * Set prop value
 * @param key Prop key
 * @param value Prop value
 */
function set(key: string, value: unknown) {
  emit('update:values', { ...props.values, [key]: value })
}
</script>

<template>
  <FieldGroup class="block-full">
    <template v-if="entries.length > 0">
      <Field
        v-for="entry in entries"
        :key="entry.key"
      >
        <Label
          :for="`prop-${entry.key}`"
          class="capitalize"
        >
          {{ entry.key }}
        </Label>

        <!-- Boolean -->
        <Field
          v-if="entry.type === 'boolean'"
          orientation="horizontal"
          class="rounded-md border border-input px-3 py-1.5"
        >
          <FieldDescription>
            {{ get(entry.key) ? 'ON' : 'OFF' }}
          </FieldDescription>

          <Switch
            :id="`prop-${entry.key}`"
            :model-value="!!get(entry.key)"
            @update:model-value="(payload) => set(entry.key, payload)"
          />
        </Field>

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
            <SelectGroup>
              <SelectItem
                v-for="option in entry.options"
                :key="String(option)"
                :value="option as any"
              >
                {{ option }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </SelectRoot>

        <!-- String -->
        <Input
          v-else-if="entry.type === 'string'"
          :id="`prop-${entry.key}`"
          :value="String(get(entry.key))"
          @update:value="(value) => set(entry.key, value)"
        />

        <FieldDescription
          v-if="entry.hint"
        >
          {{ entry.hint }}
        </FieldDescription>
      </Field>
    </template>

    <FieldDescription
      v-else
      class="m-auto gap-1 place-items-center grid"
    >
      <Icon
        icon="lucide:octagon-alert"
      />

      No controls found
    </FieldDescription>
  </FieldGroup>
</template>
