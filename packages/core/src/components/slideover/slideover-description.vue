<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, DialogDescription } from 'reka-ui'
import {
  type SlideoverDescriptionProps,
  slideoverVariants,
} from '.'
import { computed } from 'vue'

const props = defineProps<SlideoverDescriptionProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { description } = slideoverVariants()
  
  return description({ class: props.class })
})
</script>

<template>
  <DialogDescription
    data-slot="slideover-description"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </DialogDescription>
</template>
