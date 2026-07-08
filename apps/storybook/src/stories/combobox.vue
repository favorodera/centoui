<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'
import { ComboboxAnchor, ComboboxInput as RekaComboboxInput } from 'reka-ui'
import { ref } from 'vue'
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
import { TagsInputInput, TagsInputItem, TagsInputRoot } from '#centoui/components/tags-input'
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
  showArrow: {
    default: true,
    type: 'boolean',
  },
  showClear: {
    default: false,
    type: 'boolean',
  },
  showTrigger: {
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

const fruits = [
  { name: 'Apple' },
  { name: 'Banana' },
  { disabled: true, name: 'Orange' },
]

const vegetables = [
  { name: 'Cabbage' },
  { name: 'Carrots' },
  { disabled: true, name: 'Lettuce' },
]

const [
  DefineContent,
  ReuseContent,
] = createReusableTemplate()

const multipleModel = ref([])
</script>

<template>
  <DefineContent>
    <ComboboxContent
      :align="controls.align"
      :position="controls.contentPosition"
      :side="controls.side"
      :show-arrow="controls.showArrow"
    >
      <ComboboxEmpty />

      <ComboboxItem
        v-for="fruit in fruits"
        :key="fruit.name"
        :value="fruit.name"
        :disabled="fruit.disabled"
      >
        {{ fruit.name }}
      </ComboboxItem>

      <ComboboxGroup>
        <Separator />
        <ComboboxLabel>Vegetable</ComboboxLabel>

        <ComboboxItem
          v-for="vegetable in vegetables"
          :key="vegetable.name"
          :value="vegetable.name"
          :disabled="vegetable.disabled"
        >
          {{ vegetable.name }}
        </ComboboxItem>
      </ComboboxGroup>
    </ComboboxContent>
  </DefineContent>

  <ComboboxRoot
    :disabled="controls.disabled"
    :size="controls.size"
  >
    <ComboboxInput
      id="fruits"
      placeholder="Search a fruit"
      :aria-invalid="controls.invalid"
      :show-clear="controls.showClear"
      :show-trigger="controls.showTrigger"
    />

    <ReuseContent />
  </ComboboxRoot>

  <ComboboxRoot
    v-model:model-value="multipleModel"
    :disabled="controls.disabled"
    :size="controls.size"
    open-on-focus
    multiple
  >
    <ComboboxAnchor as-child>
      <TagsInputRoot
        v-model:model-value="multipleModel"
        :disabled="controls.disabled"
        :size="controls.size"
        :aria-invalid="controls.invalid"
      >
        <TagsInputItem
          v-for="item in multipleModel"
          :key="item"
          :value="item"
        />

        <RekaComboboxInput
          as-child
          :show-trigger="false"
        >
          <TagsInputInput placeholder="Search fruits..." />
        </RekaComboboxInput>
      </TagsInputRoot>
    </ComboboxAnchor>

    <ReuseContent />
  </ComboboxRoot>
</template>
