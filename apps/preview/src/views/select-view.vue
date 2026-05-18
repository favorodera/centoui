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
})
</script>

<template>
  <ViewContainer>
    <SelectRoot
      :disabled="values.disabled"
      :size="values.size"
    >
      <SelectTrigger
        :aria-invalid="values.invalid"
        class="w-45"
      >
        <SelectValue placeholder="Select a fruit" />
        <SelectIcon />
      </SelectTrigger>

      <SelectPortal>
        <SelectContent>
          <SelectScrollUpButton />
          <SelectViewport>
            <template
              v-for="group in 2"
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
                  <SelectItemText>Group {{ group }} - Fruit {{ index }}</SelectItemText>
                  <SelectItemIndicator />
                </SelectItem>
              </SelectGroup>
              
              <SelectSeparator v-if="group < 2" />
            </template>
          </SelectViewport>
          <SelectScrollDownButton />
          <SelectArrow />
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  </ViewContainer>
</template>
