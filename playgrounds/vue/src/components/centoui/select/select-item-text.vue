<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectItemText, useForwardProps } from 'reka-ui'
import {
  type SelectItemTextProps,
  injectCentouiSelectRootContext,
  selectVariants,
} from '.'
import { computed } from 'vue'

const rootContext = injectCentouiSelectRootContext()

const props = defineProps<SelectItemTextProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { itemText } = selectVariants({
    size: rootContext.size,
  })
  
  return itemText({ class: props.class })
})
</script>

<template>
  <SelectItemText
    data-slot="select-item-text"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </SelectItemText>
</template>
