<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { type AlertDescriptionProps, alertVariants, injectCentouiAlertRootContext } from '.'
import { computed } from 'vue'

const rootContext = injectCentouiAlertRootContext()

const props = defineProps<AlertDescriptionProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { description } = alertVariants()
const classNames = computed(() => description({
  variant: rootContext?.variant,
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="alert-description"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
