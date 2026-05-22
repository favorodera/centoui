<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, DialogClose } from 'reka-ui'
import {
  type SlideoverCloseProps,
  slideoverVariants,
} from '.'
import { computed } from 'vue'

const props = defineProps<SlideoverCloseProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { close } = slideoverVariants()
  
  return close({ class: props.class })
})
</script>

<template>
  <DialogClose
    data-slot="slideover-close"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </DialogClose>
</template>
