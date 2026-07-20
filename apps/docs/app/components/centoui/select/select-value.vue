<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectValue, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  injectRootContext,
  type SelectValueProps,
  type SelectValueSlots,
  selectVariants,
} from '.'

defineSlots<SelectValueSlots>()

const props = defineProps<SelectValueProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = selectVariants()
</script>

<template>
  <SelectValue
    v-slot="slotProps"
    data-slot="select-value"
    v-bind="forwardedProps"
    :class="variants.value({
      class: normalizeClass(props.class),
      size: rootContext?.size,
    })"
  >
    <slot v-bind="slotProps" />
  </SelectValue>
</template>
