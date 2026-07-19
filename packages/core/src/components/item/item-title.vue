<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  injectRootContext,
  type ItemTitleProps,
  itemVariants,
} from '.'

const props = defineProps<ItemTitleProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = itemVariants()
</script>

<template>
  <Primitive
    data-slot="item-title"
    v-bind="forwardedProps"
    :class="variants.title({
      class: normalizeClass(props.class),
      variant: rootContext?.variant,
    })"
  >
    <slot />
  </Primitive>
</template>
