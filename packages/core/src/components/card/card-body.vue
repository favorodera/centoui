<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardPropsEmits } from 'reka-ui'
import {
  type CardBodyProps,
  cardVariants,
} from '.'
import { computed } from 'vue'

const props = defineProps<CardBodyProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardPropsEmits(delegatedProps)

const classNames = computed(() => {
  const { body } = cardVariants()
  
  return body({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="card-body"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
