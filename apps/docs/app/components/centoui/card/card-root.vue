<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type CardRootProps,
  cardVariants,
} from '.'

const props = defineProps<CardRootProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = cardVariants()
</script>

<template>
  <Primitive
    data-slot="card-root"
    v-bind="forwardedProps"
    :class="variants.root({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </Primitive>
</template>
