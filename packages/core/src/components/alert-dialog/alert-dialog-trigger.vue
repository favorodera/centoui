<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogTrigger, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type AlertDialogTriggerProps,
  alertDialogVariants,
} from '.'

const props = defineProps<AlertDialogTriggerProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { trigger } = alertDialogVariants()

const classNames = computed(() => trigger({
  class: props.class,
}))
</script>

<template>
  <AlertDialogTrigger
    data-slot="alert-dialog-trigger"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </AlertDialogTrigger>
</template>
