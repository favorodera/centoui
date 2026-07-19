<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  injectRootContext,
  type ItemMediaProps,
  itemVariants,
} from '.'

const props = defineProps<ItemMediaProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = itemVariants()
</script>

<template>
  <Primitive
    data-slot="item-media"
    v-bind="forwardedProps"
    :data-variant="variant"
    :class="variants.media({
      class: normalizeClass(props.class),
      mediaVariant: props.variant,
      variant: rootContext?.variant,
    })"
  >
    <slot />
  </Primitive>
</template>
