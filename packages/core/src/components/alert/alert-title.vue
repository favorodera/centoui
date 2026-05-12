<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import { type AlertTitleSlots, type AlertTitleProps, injectCentouiAlertRootContext } from '.'

const rootContext = injectCentouiAlertRootContext()

defineSlots<AlertTitleSlots>()

const props = withDefaults(defineProps<AlertTitleProps>(), {
  as: 'div',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <Primitive
    data-centoui-slot="alert-title"
    v-bind="forwardedProps"
    :data-centoui-status="rootContext.status"
    :data-centoui-orientation="rootContext.orientation"
    :data-centoui-open="rootContext.open"
    :class="rootContext.styles.title({ class: props.class })"
  >
    <slot />
  </Primitive>
</template>
