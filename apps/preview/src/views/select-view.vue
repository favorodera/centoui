<script setup lang="ts">
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
  SelectGroup,
  SelectLabel,
  SelectSeparator,
  SelectScrollDownButton,
  SelectArrow,
  selectVariants,
} from '#centoui/components/select'
import ViewContainer from '@/components/view-container.vue'
import { usePreview } from '@/composables/use-preview'

const values = usePreview('Select', {
  size: {
    type: 'select',
    label: 'Size',
    options: Object.keys(selectVariants.variants.size),
    default: selectVariants.defaultVariants.size,
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
})

const fruits = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple']
const vegetables = ['Aubergine', 'Broccoli', 'Carrot', 'Courgette', 'Leek']
</script>

<template>
  <ViewContainer>
    <SelectRoot
      :disabled="values.disabled"
      :size="values.size"
      :multiple="values.multiple"
    >
      <SelectTrigger
        :aria-invalid="values.invalid"
        class="max-w-3xs"
      >
        <SelectValue placeholder="Select a fruit..." />
        <SelectIcon />
      </SelectTrigger>

      <SelectPortal>
        <SelectContent :side-offset="5">
          <SelectScrollUpButton />

          <SelectViewport>

            <SelectLabel>
              Fruits
            </SelectLabel>
            <SelectGroup>
              <SelectItem
                v-for="(fruit, index) in fruits"
                :key="index"
                :value="fruit"
              >
                <SelectItemText>
                  {{ fruit }}
                </SelectItemText>
                <SelectItemIndicator />
              </SelectItem>
            </SelectGroup>

            <SelectSeparator />

            <SelectLabel>
              Vegetables
            </SelectLabel>
            <SelectGroup>
              <SelectItem
                v-for="(vegetable, index) in vegetables"
                :key="index"
                :value="vegetable"
              >
                <SelectItemText>
                  {{ vegetable }}
                </SelectItemText>
                <SelectItemIndicator />
              </SelectItem>
            </SelectGroup>

          </SelectViewport>

          <SelectScrollDownButton />

          <SelectArrow />

        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  </ViewContainer>
</template>
