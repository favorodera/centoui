<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { type AlertDescriptionProps, type AlertDescriptionSlots, injectCentouiAlertRootContext } from '.'

const rootContext = injectCentouiAlertRootContext()

defineSlots<AlertDescriptionSlots>()

const props = withDefaults(defineProps<AlertDescriptionProps>(), {
  as: 'div',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <Primitive
    data-slot="alert-description"
    v-bind="forwardedProps"
    :data-variant="rootContext.variant"
    :class="rootContext.styles.description({ class: props.class })"
  >
    <slot />
  </Primitive>
</template>
