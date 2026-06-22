<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogDescription, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import {
  type AlertDialogDescriptionProps,
  alertDialogVariants,
} from '.'

const props = defineProps<AlertDialogDescriptionProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardPropsEmits(delegatedProps)

const { description } = alertDialogVariants()

const classNames = computed(() => description({
  class: props.class,
}))
</script>

<template>
  <AlertDialogDescription
    data-slot="alert-dialog-description"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </AlertDialogDescription>
</template>
