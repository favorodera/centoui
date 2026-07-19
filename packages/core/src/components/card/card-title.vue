<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type CardTitleProps,
  cardVariants,
} from '.'

const props = withDefaults(defineProps<CardTitleProps>(), {
  as: 'h3',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = cardVariants()
</script>

<template>
  <Primitive
    data-slot="card-title"
    v-bind="forwardedProps"
    :class="variants.title({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </Primitive>
</template>
