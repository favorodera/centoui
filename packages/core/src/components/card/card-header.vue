<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardPropsEmits } from 'reka-ui'
import {
  type CardHeaderProps,
  cardVariants,
} from '.'
import { computed } from 'vue'

const props = defineProps<CardHeaderProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardPropsEmits(delegatedProps)

const classNames = computed(() => {
  const { header } = cardVariants()
  
  return header({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="card-header"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
