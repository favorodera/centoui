<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  injectRootContext,
  type ItemDescriptionProps,
  itemVariants,
} from '.'

const props = withDefaults(defineProps<ItemDescriptionProps>(), {
  as: 'p',
})

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = itemVariants()
</script>

<template>
  <Primitive
    data-slot="item-description"
    v-bind="forwardedProps"
    :class="variants.description({
      class: normalizeClass(props.class),
      variant: rootContext?.variant,
    })"
  >
    <slot />
  </Primitive>
</template>
