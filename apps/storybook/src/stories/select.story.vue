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
      <SelectGroup>
        <SelectItem value="apple">
          Apple
        </SelectItem>

        <SelectItem value="banana">
          Banana
        </SelectItem>

        <SelectItem value="orange">
          Orange
        </SelectItem>
      </SelectGroup>

      <Separator />

      <SelectGroup>
        <SelectLabel>
          Berries
        </SelectLabel>

        <SelectItem
          value="strawberry"
          disabled
        >
          Strawberry
        </SelectItem>

        <SelectItem value="blueberry">
          Blueberry
        </SelectItem>

        <SelectItem value="raspberry">
          Raspberry
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </SelectRoot>
</template>
