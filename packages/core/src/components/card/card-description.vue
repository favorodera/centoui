<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import {
  type CardDescriptionProps,
  cardVariants,
} from '.'
import { computed } from 'vue'

const props = withDefaults(defineProps<CardDescriptionProps>(), {
  as: 'p',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { description } = cardVariants()
const classNames = computed(() => description({ class: props.class }))
</script>

<template>
  <Primitive
    data-slot="card-description"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
