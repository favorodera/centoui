<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, PopoverTrigger } from 'reka-ui'
import {
  type PopoverTriggerProps,
  popoverVariants,
} from '.'
import { computed } from 'vue'

const props = defineProps<PopoverTriggerProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { trigger } = popoverVariants()
  
  return trigger({ class: props.class })
})
</script>

<template>
  <PopoverTrigger
    data-slot="popover-trigger"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </PopoverTrigger>
</template>
