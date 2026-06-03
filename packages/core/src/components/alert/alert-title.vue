<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import { type AlertTitleProps, alertVariants, injectCentouiAlertRootContext } from '.'
import { computed } from 'vue'

const rootContext = injectCentouiAlertRootContext()

const props = defineProps<AlertTitleProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { title } = alertVariants()
const classNames = computed(() => title({
  variant: rootContext?.variant,
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="alert-title"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
