<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogDescription, useForwardPropsEmits } from 'reka-ui'
import {
  type AlertDialogDescriptionProps,
  type AlertDialogDescriptionSlots,
  injectCentouiAlertDialogRootContext,
} from '.'

const rootContext = injectCentouiAlertDialogRootContext()

defineSlots<AlertDialogDescriptionSlots>()

const props = defineProps<AlertDialogDescriptionProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardPropsEmits(delegatedProps)
</script>

<template>
  <AlertDialogDescription
    data-slot="alert-dialog-description"
    v-bind="forwardedProps"
    :class="rootContext.styles.description({ class: props.class })"
  >
    <slot />
  </AlertDialogDescription>
</template>
