<script setup lang="ts">
import {
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxRoot,
  comboboxVariants,
} from '#centoui/components/combobox'
import { Separator } from '#centoui/components/separator'
import { useStory } from '@/composables/use-story'

const controls = useStory('Combobox', {
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
    default: comboboxVariants.defaultVariants.contentPosition,
    options: Object.keys(comboboxVariants.variants.contentPosition),
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
    default: comboboxVariants.defaultVariants.size,
    options: Object.keys(comboboxVariants.variants.size),
    type: 'array',
  },
})

const options = [
  {
    children: [
      { name: 'Apple' },
      { name: 'Banana' },
      { disabled: true, name: 'Orange' },
      { name: 'Honeydew' },
    ],
  },
  {
    children: [
      { name: 'Cabbage' },
      { name: 'Carrots' },
      { disabled: true, name: 'Lettuce' },
      { name: 'Spinach' },
    ],
    name: 'Vegetable',
  },
]
</script>

<template>
  <ComboboxRoot
    :disabled="controls.disabled"
    :multiple="controls.multiple"
    :size="controls.size"
  >
    <ComboboxInput
      data-slot="input-group-control"
      placeholder="Search a fruit"
      :aria-invalid="controls.invalid"
    />

    <ComboboxContent
      :align="controls.align"
      :position="controls.contentPosition"
      :side="controls.side"
      :show-arrow="controls.showArrow"
    >
      <ComboboxEmpty />

      <template
        v-for="group, index in options"
        :key="group.name"
      >
        <Separator
          v-if="index !== 0"
        />

        <ComboboxGroup>
          <ComboboxLabel v-if="group.name">
            {{ group.name }}
          </ComboboxLabel>

          <ComboboxItem
            v-for="option in group.children"
            :key="option.name"
            :value="option.name"
            :disabled="option.disabled"
          >
            {{ option.name }}
          </ComboboxItem>
        </ComboboxGroup>
      </template>
    </ComboboxContent>
  </ComboboxRoot>
</template>
