<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type PinInputGroupProps, pinInputVariants } from '.'

const props = defineProps<PinInputGroupProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = pinInputVariants()
</script>

<template>
  <Primitive
    data-slot="pin-input-group"
    :class="variants.group({
      class:normalizeClass(props.class)
    })"
    v-bind="forwardedProps"
  >
    <slot />
  </Primitive>
</template>
