<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { type AlertContentProps, type AlertContentSlots, injectCentouiAlertRootContext } from '.'

const rootContext = injectCentouiAlertRootContext()

defineSlots<AlertContentSlots>()

const props = withDefaults(defineProps<AlertContentProps>(), {
  as: 'div',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <Primitive
    data-slot="alert-content"
    v-bind="forwardedProps"
    :data-variant="rootContext.variant"
    :class="rootContext.styles.content({ class: props.class })"
  >
    <slot />
  </Primitive>
</template>
