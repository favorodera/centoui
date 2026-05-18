<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, PopoverClose } from 'reka-ui'
import {
  type PopoverCloseProps,
  popoverVariants,
} from '.'
import { computed } from 'vue'

const props = defineProps<PopoverCloseProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { close } = popoverVariants()
  
  return close({ class: props.class })
})
</script>

<template>
  <PopoverClose
    data-slot="popover-close"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </PopoverClose>
</template>
