<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, SelectValue } from 'reka-ui'
import {
  type SelectValueProps,
  type SelectValueSlots,
  injectCentouiSelectRootContext,
  selectVariants,
} from '.'
import { computed } from 'vue'

const rootContext = injectCentouiSelectRootContext()

defineSlots<SelectValueSlots>()

const props = defineProps<SelectValueProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { value } = selectVariants({
    size: rootContext.size,
  })
  
  return value({ class: props.class })
})
</script>

<template>
  <SelectValue
    v-slot="slotProps"
    data-slot="select-value"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot v-bind="slotProps" />
  </SelectValue>
</template>
