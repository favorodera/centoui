<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectValue, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type SelectValueProps,
  type SelectValueSlots,
  selectVariants,
} from '.'

defineSlots<SelectValueSlots>()

const props = defineProps<SelectValueProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { value } = selectVariants()
const classNames = computed(() => value({ class: props.class }))
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
