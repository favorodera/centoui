<script setup lang="ts">
import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  selectVariants,
} from '#centoui/components/select'
import { Separator } from '#centoui/components/separator'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Select', {
  triggerSize: {
    type: 'array',
    label: 'Trigger Size',
    options: Object.keys(selectVariants.variants.triggerSize),
    default: selectVariants.defaultVariants.triggerSize,
  },
  contentPosition: {
    type: 'array',
    label: 'Content Position',
    options: Object.keys(selectVariants.variants.contentPosition),
    default: selectVariants.defaultVariants.contentPosition,
  },
  disabled: {
    type: 'boolean',
    label: 'Disabled',
    default: false,
  },
  invalid: {
    type: 'boolean',
    label: 'Invalid',
    default: false,
  },
  multiple: {
    type: 'boolean',
    label: 'Multiple',
    default: false,
  },
  showArrow: {
    type: 'boolean',
    label: 'Show arrow',
    default: true,
  },
})

const fruits = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple']
const vegetables = ['Aubergine', 'Broccoli', 'Carrot', 'Courgette', 'Leek']
</script>

<template>
  <ViewContainer>
    <SelectRoot
      :disabled="values.disabled"
      :multiple="values.multiple"
    >
      <SelectTrigger
        :size="values.triggerSize"
        :aria-invalid="values.invalid"
        class="max-w-3xs"
      >
        <SelectValue placeholder="Select a fruit..." />
      </SelectTrigger>

      <SelectContent
        :position="values.contentPosition"
        :show-arrow="values.showArrow"
      >
        <SelectGroup>
          <SelectLabel>
            Fruits
          </SelectLabel>

          <SelectItem
            v-for="(fruit, index) in fruits"
            :key="index"
            :value="fruit"
          >
            {{ fruit }}
          </SelectItem>
        </SelectGroup>

        <Separator />

        <SelectLabel>
          Vegetables
        </SelectLabel>
        <SelectGroup>
          <SelectItem
            v-for="(vegetable, index) in vegetables"
            :key="index"
            :value="vegetable"
          >
            {{ vegetable }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </SelectRoot>
  </ViewContainer>
</template>
