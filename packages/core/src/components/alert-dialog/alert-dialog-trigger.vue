<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogTrigger, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type AlertDialogTriggerProps,
  alertDialogVariants,
} from '.'

const props = defineProps<AlertDialogTriggerProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = alertDialogVariants()
</script>

<template>
  <AlertDialogTrigger
    data-slot="alert-dialog-trigger"
    v-bind="forwardedProps"
    :class="variants.trigger({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </AlertDialogTrigger>
</template>
