<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogDescription, useForwardPropsEmits } from 'reka-ui'
import {
  type AlertDialogDescriptionProps,
  alertDialogVariants,
} from '.'
import { computed } from 'vue'

const props = defineProps<AlertDialogDescriptionProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardPropsEmits(delegatedProps)

const { description } = alertDialogVariants()
const classNames = computed(() => description({ class: props.class }))
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
