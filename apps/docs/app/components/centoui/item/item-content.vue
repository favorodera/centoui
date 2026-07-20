<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  injectRootContext,
  type ItemContentProps,
  itemVariants,
} from '.'

const props = defineProps<ItemContentProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = itemVariants()
</script>

<template>
  <Primitive
    data-slot="item-content"
    v-bind="forwardedProps"
    :class="variants.content({
      class: normalizeClass(props.class),
      variant: rootContext?.variant,
    })"
  >
    <slot />
  </Primitive>
</template>
