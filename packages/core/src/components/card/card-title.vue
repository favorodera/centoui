<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardPropsEmits } from 'reka-ui'
import {
  type CardTitleProps,
  cardVariants,
} from '.'
import { computed } from 'vue'

const props = withDefaults(defineProps<CardTitleProps>(), {
  as: 'h3',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardPropsEmits(delegatedProps)

const classNames = computed(() => {
  const { title } = cardVariants()
  
  return title({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="card-title"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
