<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type AlertDialogFooterProps,
  alertDialogVariants,
} from '.'

const props = defineProps<AlertDialogFooterProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { footer } = alertDialogVariants()

const classNames = computed(() => footer({
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="alert-dialog-footer"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
