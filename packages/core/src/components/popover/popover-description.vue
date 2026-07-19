<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type PopoverDescriptionProps,
  popoverVariants,
} from '.'

const props = withDefaults(defineProps<PopoverDescriptionProps>(), {
  as: 'p',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = popoverVariants()
</script>

<template>
  <Primitive
    data-slot="popover-description"
    v-bind="forwardedProps"
    :class="variants.description({
      class:normalizeClass(props.class)
    })"
  >
    <slot />
  </Primitive>
</template>
