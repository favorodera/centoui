<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardPropsEmits } from 'reka-ui'
import {
  type CardFooterProps,
  cardVariants,
} from '.'
import { computed } from 'vue'

const props = defineProps<CardFooterProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardPropsEmits(delegatedProps)

const classNames = computed(() => {
  const { footer } = cardVariants()
  
  return footer({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="card-footer"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
