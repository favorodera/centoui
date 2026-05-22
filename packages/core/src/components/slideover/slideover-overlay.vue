<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, DialogOverlay } from 'reka-ui'
import {
  type SlideoverOverlayProps,
  slideoverVariants,
} from '.'
import { computed } from 'vue'

const props = defineProps<SlideoverOverlayProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { overlay } = slideoverVariants()
  
  return overlay({ class: props.class })
})
</script>

<template>
  <DialogOverlay
    data-slot="slideover-overlay"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </DialogOverlay>
</template>
