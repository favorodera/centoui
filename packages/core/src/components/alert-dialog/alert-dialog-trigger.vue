<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, AlertDialogTrigger } from 'reka-ui'
import {
  type AlertDialogTriggerSlots,
  type AlertDialogTriggerProps,
  injectCentouiAlertDialogRootContext,
} from '.'

const rootContext = injectCentouiAlertDialogRootContext()

defineSlots<AlertDialogTriggerSlots>()

const props = defineProps<AlertDialogTriggerProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <AlertDialogTrigger
    data-slot="alert-dialog-trigger"
    v-bind="forwardedProps"
    :class="rootContext.styles.trigger({ class: props.class })"
  >
    <slot />
  </AlertDialogTrigger>
</template>
