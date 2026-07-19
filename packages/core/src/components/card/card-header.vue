<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type CardHeaderProps,
  cardVariants,
} from '.'

const props = defineProps<CardHeaderProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = cardVariants()
</script>

<template>
  <Primitive
    data-slot="card-header"
    v-bind="forwardedProps"
    :class="variants.header({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </Primitive>
</template>
