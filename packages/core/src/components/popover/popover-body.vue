<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import {
  type PopoverBodyProps,
  popoverVariants,
} from '.'
import { computed } from 'vue'

const props = defineProps<PopoverBodyProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { body } = popoverVariants()
  
  return body({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="popover-body"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
