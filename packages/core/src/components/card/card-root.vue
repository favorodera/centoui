<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import {
  type CardRootProps,
  cardVariants,
} from '.'
import { computed } from 'vue'

const props = defineProps<CardRootProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { root } = cardVariants()
const classNames = computed(() => root({ class: props.class }))
</script>

<template>
  <Primitive
    data-slot="card-root"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
