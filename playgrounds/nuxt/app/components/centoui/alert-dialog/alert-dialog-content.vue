<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogContent, useForwardPropsEmits } from 'reka-ui'
import {
  type AlertDialogContentEmits,
  type AlertDialogContentProps,
  alertDialogVariants,
} from '.'
import { computed } from 'vue'

const emits = defineEmits<AlertDialogContentEmits>()

const props = defineProps<AlertDialogContentProps>()
const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const classNames = computed(() => {
  const { content } = alertDialogVariants()
  
  return content({ class: props.class })
})
</script>

<template>
  <AlertDialogContent
    data-slot="alert-dialog-content"
    v-bind="forwardedPropsEmits"
    :class="classNames"
  >
    <slot />
  </AlertDialogContent>
</template>
