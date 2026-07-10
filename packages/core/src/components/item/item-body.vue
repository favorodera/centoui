<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  injectRootContext,
  type ItemBodyProps,
  itemVariants,
} from '.'

const props = defineProps<ItemBodyProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { body } = itemVariants()

const classNames = computed(() => body({
  class: props.class,
  variant: rootContext?.variant,
}))
</script>

<template>
  <Primitive
    data-slot="item-body"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
