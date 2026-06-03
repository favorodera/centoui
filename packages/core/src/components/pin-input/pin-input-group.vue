<script setup lang="ts">
import { computed } from 'vue'
import { Primitive, useForwardProps } from 'reka-ui'
import { pinInputVariants, type PinInputGroupProps } from '.'
import { reactiveOmit } from '@vueuse/core'

const props = defineProps<PinInputGroupProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { group } = pinInputVariants()
const classNames = computed(() => group({ class: props.class }))
</script>

<template>
  <Primitive
    data-slot="pin-input-group"
    :class="classNames"
    v-bind="forwardedProps"
  >
    <slot />
  </Primitive>
</template>
