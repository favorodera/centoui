<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import {
  type AlertDialogHeaderProps,
  alertDialogVariants,
} from '.'
import { computed } from 'vue'

const props = defineProps<AlertDialogHeaderProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { header } = alertDialogVariants()
  
  return header({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="alert-dialog-header"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
