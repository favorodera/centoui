<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogTitle, useForwardPropsEmits } from 'reka-ui'
import {
  type AlertDialogTitleProps,
  type AlertDialogTitleSlots,
  injectCentouiAlertDialogRootContext,
} from '.'

const rootContext = injectCentouiAlertDialogRootContext()

defineSlots<AlertDialogTitleSlots>()

const props = defineProps<AlertDialogTitleProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardPropsEmits(delegatedProps)
</script>

<template>
  <AlertDialogTitle
    data-slot="alert-dialog-title"
    v-bind="forwardedProps"
    :class="rootContext.styles.title({ class: props.class })"
  >
    <slot />
  </AlertDialogTitle>
</template>
