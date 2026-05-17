<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectViewport, useForwardProps } from 'reka-ui'
import {
  type SelectViewportProps,
  type SelectViewportSlots,
  injectCentouiSelectRootContext,
} from '.'

const rootContext = injectCentouiSelectRootContext()

defineSlots<SelectViewportSlots>()

const props = defineProps<SelectViewportProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectViewport
    v-bind="forwardedProps"
    data-slot="select-viewport"
    :class="rootContext.styles.viewport({ class: props.class })"
  >
    <slot />
  </SelectViewport>
</template>
