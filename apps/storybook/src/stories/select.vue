<script setup lang="ts">
import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectRoot, SelectTrigger, SelectValue, selectVariants } from '#centoui/components/select'
import { Separator } from '#centoui/components/separator'
import { useStory } from '@/composables/use-story'

const controls = useStory('Select', {
  align: {
    default: 'center' as any,
    options: [
      'center',
      'start',
      'end',
    ],
    type: 'array',
  },
  contentPosition: {
    default: selectVariants.defaultVariants.contentPosition,
    options: Object.keys(selectVariants.variants.contentPosition),
    type: 'array',
  },
  disabled: {
    default: false,
    type: 'boolean',
  },
  invalid: {
    default: false,
    type: 'boolean',
  },
  multiple: {
    default: false,
    type: 'boolean',
  },
  showArrow: {
    default: true,
    type: 'boolean',
  },
  side: {
    default: 'bottom' as any,
    options: [
      'top',
      'bottom',
      'left',
      'right',
    ],
    type: 'array',
  },
  size: {
    default: selectVariants.defaultVariants.size,
    options: Object.keys(selectVariants.variants.size),
    type: 'array',
  },
})

const fruits = [
  { label: 'Apple', value: 'apple' },
  { disabled: true, label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Mango', value: 'mango' },
  { label: 'Pineapple', value: 'pineapple' },
]

const berries = [
  { disabled: true, label: 'Strawberry', value: 'strawberry' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Raspberry', value: 'raspberry' },
  { label: 'Blackberry', value: 'blackberry' },
  { label: 'Cranberry', value: 'cranberry' },
]
</script>

<template>
  <SelectRoot
    :disabled="controls.disabled"
    :multiple="controls.multiple"
    :size="controls.size"
  >
    <SelectTrigger
      class="max-inline-sm"
      :aria-invalid="controls.invalid"
    >
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>

    <SelectContent
      :align="controls.align"
      :position="controls.contentPosition"
      :side="controls.side"
      :show-arrow="controls.showArrow"
    >
      <SelectItem
        v-for="fruit in fruits"
        :key="fruit.value"
        :value="fruit.value"
        :disabled="fruit.disabled"
      >
        {{ fruit.label }}
      </SelectItem>

      <Separator />

      <SelectGroup>
        <SelectLabel>
          Berries
        </SelectLabel>

        <SelectItem
          v-for="berry in berries"
          :key="berry.value"
          :value="berry.value"
          :disabled="berry.disabled"
        >
          {{ berry.label }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </SelectRoot>
</template>
