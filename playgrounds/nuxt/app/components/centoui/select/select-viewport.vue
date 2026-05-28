<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectViewport, useForwardProps } from 'reka-ui'
import {
  type SelectViewportProps,
  injectCentouiSelectRootContext,
  selectVariants,
} from '.'
import { computed } from 'vue'

const rootContext = injectCentouiSelectRootContext()

const props = defineProps<SelectViewportProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { viewport } = selectVariants({
    size: rootContext.size,
  })
  
  return viewport({ class: props.class })
})
</script>

<template>
  <SelectViewport
    v-bind="forwardedProps"
    data-slot="select-viewport"
    :class="classNames"
  >
    <slot />
  </SelectViewport>
</template>
