<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogContent, useForwardPropsEmits } from 'reka-ui'
import {
  type AlertDialogContentEmits,
  type AlertDialogContentProps,
  type AlertDialogContentSlots,
  injectCentouiAlertDialogRootContext,
} from '.'

const rootContext = injectCentouiAlertDialogRootContext()

defineSlots<AlertDialogContentSlots>()

const emits = defineEmits<AlertDialogContentEmits>()

const props = defineProps<AlertDialogContentProps>()
const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <AlertDialogContent
    data-slot="alert-dialog-content"
    v-bind="forwardedPropsEmits"
    :class="rootContext.styles.content({ class: props.class })"
  >
    <slot />
  </AlertDialogContent>
</template>
