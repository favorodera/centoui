<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import { type AlertDialogHeaderProps, type AlertDialogHeaderSlots, injectCentouiAlertDialogRootContext } from '.'

const rootContext = injectCentouiAlertDialogRootContext()

defineSlots<AlertDialogHeaderSlots>()

const props = withDefaults(defineProps<AlertDialogHeaderProps>(), {
  as: 'div',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <Primitive
    data-slot="alert-dialog-header"
    v-bind="forwardedProps"
    :class="rootContext.styles.header({ class: props.class })"
  >
    <slot />
  </Primitive>
</template>
