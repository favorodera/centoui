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
    data-centoui-slot="alert-media"
    v-bind="forwardedProps"
    :data-centoui-status="rootContext.status"
    :data-centoui-orientation="rootContext.orientation"
    :data-centoui-open="rootContext.open"
    :class="rootContext.styles.media({ class: props.class })"
  >
    <slot />
  </Primitive>
</template>
