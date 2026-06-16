<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import {
  type PopoverDescriptionProps,
  popoverVariants,
} from '.'
import { computed } from 'vue'

const props = withDefaults(defineProps<PopoverDescriptionProps>(), {
  as: 'p',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { description } = popoverVariants()
const classNames = computed(() => description({ class: props.class }))
</script>

<template>
  <Primitive
    data-slot="popover-description"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
