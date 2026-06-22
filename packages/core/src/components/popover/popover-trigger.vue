<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PopoverTrigger, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type PopoverTriggerProps,
  popoverVariants,
} from '.'

const props = defineProps<PopoverTriggerProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { trigger } = popoverVariants()

const classNames = computed(() => trigger({
  class: props.class,
}))
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
