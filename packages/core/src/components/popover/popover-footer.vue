<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import {
  type PopoverFooterProps,
  popoverVariants,
} from '.'
import { computed } from 'vue'

const props = withDefaults(defineProps<PopoverFooterProps>(), {
  as: 'div',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { footer } = popoverVariants()
  
  return footer({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="popover-footer"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
