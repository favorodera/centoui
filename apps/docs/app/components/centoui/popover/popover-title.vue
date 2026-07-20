<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type PopoverTitleProps,
  popoverVariants,
} from '.'

const props = defineProps<PopoverTitleProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = popoverVariants()
</script>

<template>
  <Primitive
    data-slot="popover-title"
    v-bind="forwardedProps"
    :class="variants.title({
      class:normalizeClass(props.class)
    })"
  >
    <slot />
  </Primitive>
</template>
