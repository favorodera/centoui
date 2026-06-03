<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import { computed, reactive, toRef } from 'vue'
import { type AlertRootProps, alertVariants, provideCentouiAlertRootContext } from '.'

const props = withDefaults(defineProps<AlertRootProps>(), {
  variant: 'neutral',
})
const delegatedProps = reactiveOmit(props, 'class', 'variant')
const forwardedProps = useForwardProps(delegatedProps)

const { root } = alertVariants()
const classNames = computed(() => root({
  variant: props.variant,
  class: props.class,
}))

provideCentouiAlertRootContext(reactive({
  variant: toRef(props, 'variant'),
}))
</script>

<template>
  <Primitive
    data-slot="alert-root"
    :data-variant="variant"
    role="alert"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
