<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, SelectArrow } from 'reka-ui'
import {
  injectCentouiSelectRootContext,
  selectVariants,
  type SelectArrowProps,
} from '.'
import { computed } from 'vue'

const rootContext = injectCentouiSelectRootContext()

const props = defineProps<SelectArrowProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { arrow } = selectVariants({
    size: rootContext.size,
    triggerVariant: rootContext.triggerVariant,
  })
  
  return arrow({ class: props.class })
})
</script>

<template>
  <SelectArrow
    data-slot="select-arrow"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </SelectArrow>
</template>
