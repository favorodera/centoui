<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { injectCentouiAlertRootContext, type AlertActionsProps, type AlertActionsSlots } from '.'

const rootContext = injectCentouiAlertRootContext()

defineSlots<AlertActionsSlots>()

const props = withDefaults(defineProps<AlertActionsProps>(), {
  as: 'div',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <Primitive
    data-centoui-slot="alert-actions"
    v-bind="forwardedProps"
    :data-centoui-status="rootContext.status"
    :data-centoui-orientation="rootContext.orientation"
    :data-centoui-open="rootContext.open"
    :class="rootContext.styles.actions({ class: props.class })"
  >
    <slot />
  </Primitive>
</template>
