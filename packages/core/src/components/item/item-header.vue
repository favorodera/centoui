<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  injectRootContext,
  type ItemHeaderProps,
  itemVariants,
} from '.'

const props = defineProps<ItemHeaderProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { header } = itemVariants()

const classNames = computed(() => header({
  class: props.class,
  variant: rootContext?.variant,
}))
</script>

<template>
  <Primitive
    data-slot="item-header"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
