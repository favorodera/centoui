<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type PopoverHeaderProps,
  popoverVariants,
} from '.'

const props = defineProps<PopoverHeaderProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = popoverVariants()
</script>

<template>
  <Primitive
    data-slot="popover-header"
    v-bind="forwardedProps"
    :class="variants.header({
      class:normalizeClass(props.class)
    })"
  >
    <slot />
  </Primitive>
</template>
