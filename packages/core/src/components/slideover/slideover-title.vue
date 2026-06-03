<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, DialogTitle } from 'reka-ui'
import {
  type SlideoverTitleProps,
  slideoverVariants,
} from '.'
import { computed } from 'vue'

const props = defineProps<SlideoverTitleProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { title } = slideoverVariants()
const classNames = computed(() => title({ class: props.class }))
</script>

<template>
  <DialogTitle
    data-slot="slideover-title"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </DialogTitle>
</template>
