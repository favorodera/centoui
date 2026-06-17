<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type PopoverBodyProps,
  popoverVariants,
} from '.'

const props = defineProps<PopoverBodyProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { body } = popoverVariants()
const classNames = computed(() => body({ class: props.class }))
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
