<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type PopoverDescriptionProps,
  popoverVariants,
} from '.'

const props = withDefaults(defineProps<PopoverDescriptionProps>(), {
  as:'p'
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { description } = popoverVariants()

const classNames = computed(() => description({
  class: props.class,
}))
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
