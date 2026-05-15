<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import { type AlertDialogFooterProps, type AlertDialogFooterSlots, injectCentouiAlertDialogRootContext } from '.'

const rootContext = injectCentouiAlertDialogRootContext()

defineSlots<AlertDialogFooterSlots>()

const props = withDefaults(defineProps<AlertDialogFooterProps>(), {
  as: 'div',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <Primitive
    data-slot="alert-dialog-footer"
    v-bind="forwardedProps"
    :class="rootContext.styles.footer({ class: props.class })"
  >
    <slot />
  </Primitive>
</template>
