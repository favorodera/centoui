<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogTitle, useForwardPropsEmits } from 'reka-ui'
import {
  type AlertDialogTitleProps,
  alertDialogVariants,
} from '.'
import { computed } from 'vue'

const props = defineProps<AlertDialogTitleProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardPropsEmits(delegatedProps)

const { title } = alertDialogVariants()
const classNames = computed(() => title({ class: props.class }))
</script>

<template>
  <AlertDialogTitle
    data-slot="alert-dialog-title"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </AlertDialogTitle>
</template>
