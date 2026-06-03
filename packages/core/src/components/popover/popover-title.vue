<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import {
  type PopoverTitleProps,
  popoverVariants,
} from '.'
import { computed } from 'vue'

const props = withDefaults(defineProps<PopoverTitleProps>(), {
  as: 'h4',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { title } = popoverVariants()
const classNames = computed(() => title({ class: props.class }))
</script>

<template>
  <Primitive
    data-slot="popover-title"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
