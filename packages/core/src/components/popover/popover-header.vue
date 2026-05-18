<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import {
  type PopoverHeaderProps,
  popoverVariants,
} from '.'
import { computed } from 'vue'

const props = withDefaults(defineProps<PopoverHeaderProps>(), {
  as: 'div',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { header } = popoverVariants()
  
  return header({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="popover-header"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
