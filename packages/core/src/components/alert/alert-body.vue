<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { alertVariants, type AlertBodyProps, injectCentouiAlertRootContext } from '.'
import { computed } from 'vue'

const rootContext = injectCentouiAlertRootContext()

const props = defineProps<AlertBodyProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { body } = alertVariants()
const classNames = computed(() => body({
  variant: rootContext?.variant,
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="alert-body"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
