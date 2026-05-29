<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectTrigger, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type SelectTriggerProps,
  injectCentouiSelectRootContext,
  selectVariants,
} from '.'

const rootContext = injectCentouiSelectRootContext()

const props = defineProps<SelectTriggerProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { trigger } = selectVariants({
    size: rootContext.size,
  })
  
  return trigger({ class: props.class })
})
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    data-slot="select-trigger"
    :class="classNames"
  >
    <slot />
  </SelectTrigger>
</template>
