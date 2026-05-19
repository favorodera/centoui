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
import { Icon } from '@iconify/vue'

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
        <Icon icon="lucide:apple" />
        <SelectValue placeholder="Select a fruit" />
        <SelectIcon />
      </SelectTrigger>

      <SelectPortal>
        <SelectContent>
          <SelectScrollUpButton />
          <SelectViewport>
            <template
              v-for="group in 3"
              :key="group"
            >
              <SelectGroup>
                <SelectLabel>Group {{ group }}</SelectLabel>
                <SelectItem
                  v-for="index in 5"
                  :key="`${group}-${index}`"
                  :value="`fruit-${group}-${index}`"
                  :disabled="index === 3"
                >
                  <Icon icon="lucide:apple" />
                  <SelectItemText>Group {{ group }} - Fruit {{ index }}</SelectItemText>
                  <SelectItemIndicator />
                </SelectItem>
              </SelectGroup>
              
              <SelectSeparator v-if="group === 1">
                Group {{ group + 1 }}
              </SelectSeparator>

              <SelectSeparator v-if="group === 2" />
            </template>
          </SelectViewport>
          <SelectScrollDownButton />
          <SelectArrow />
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  </ViewContainer>
</template>
