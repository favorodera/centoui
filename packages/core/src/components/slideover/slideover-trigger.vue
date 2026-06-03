<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, DialogTrigger } from 'reka-ui'
import {
  type SlideoverTriggerProps,
  slideoverVariants,
} from '.'
import { computed } from 'vue'

const props = defineProps<SlideoverTriggerProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { trigger } = slideoverVariants()
const classNames = computed(() => trigger({ class: props.class }))
</script>

<template>
  <DialogTrigger
    data-slot="slideover-trigger"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </DialogTrigger>
</template>
