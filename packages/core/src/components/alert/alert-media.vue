<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { type AlertMediaProps, type AlertMediaSlots, injectCentouiAlertRootContext } from '.'

const rootContext = injectCentouiAlertRootContext()

defineSlots<AlertMediaSlots>()

const props = withDefaults(defineProps<AlertMediaProps>(), {
  as: 'div',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <Primitive
    data-slot="alert-media"
    v-bind="forwardedProps"
    :data-variant="rootContext.variant"
    :class="rootContext.styles.media({ class: props.class })"
  >
    <slot />
  </Primitive>
</template>
