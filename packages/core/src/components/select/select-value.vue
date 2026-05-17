<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, SelectValue } from 'reka-ui'
import {
  type SelectValueProps,
  type SelectValueSlots,
  injectCentouiSelectRootContext,
} from '.'

const rootContext = injectCentouiSelectRootContext()

defineSlots<SelectValueSlots>()

const props = defineProps<SelectValueProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectValue
    v-slot="slotProps"
    data-slot="select-value"
    v-bind="forwardedProps"
    :class="rootContext.styles.value({ class: props.class })"
  >
    <slot v-bind="slotProps" />
  </SelectValue>
</template>
