<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type PopoverFooterProps,
  popoverVariants,
} from '.'

const props = defineProps<PopoverFooterProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = popoverVariants()
</script>

<template>
  <Primitive
    data-slot="popover-footer"
    v-bind="forwardedProps"
    :class="variants.footer({
      class:normalizeClass(props.class)
    })"
  >
    <slot />
  </Primitive>
</template>
