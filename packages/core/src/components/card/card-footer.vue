<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type CardFooterProps,
  cardVariants,
} from '.'

const props = defineProps<CardFooterProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = cardVariants()
</script>

<template>
  <Primitive
    data-slot="card-footer"
    v-bind="forwardedProps"
    :class="variants.footer({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </Primitive>
</template>
