<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type CardDescriptionProps,
  cardVariants,
} from '.'

const props = withDefaults(defineProps<CardDescriptionProps>(), {
  as: 'p',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = cardVariants()
</script>

<template>
  <Primitive
    data-slot="card-description"
    v-bind="forwardedProps"
    :class="variants.description({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </Primitive>
</template>
