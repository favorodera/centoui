<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, PopoverArrow } from 'reka-ui'
import {
  popoverVariants,
  type PopoverArrowProps,
} from '.'
import { computed } from 'vue'

const props = defineProps<PopoverArrowProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { arrow } = popoverVariants()
  
  return arrow({ class: props.class })
})
</script>

<template>
  <PopoverArrow
    data-slot="popover-arrow"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </PopoverArrow>
</template>
