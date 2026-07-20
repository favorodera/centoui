<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PopoverTrigger, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type PopoverTriggerProps,
  popoverVariants,
} from '.'

const props = defineProps<PopoverTriggerProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = popoverVariants()
</script>

<template>
  <PopoverTrigger
    data-slot="popover-trigger"
    v-bind="forwardedProps"
    :class="variants.trigger({
      class:normalizeClass(props.class)
    })"
  >
    <slot />
  </PopoverTrigger>
</template>
