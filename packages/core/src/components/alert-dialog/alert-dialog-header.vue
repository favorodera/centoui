<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import {
  type AlertDialogHeaderProps,
  alertDialogVariants,
} from '.'

const props = defineProps<AlertDialogHeaderProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { header } = alertDialogVariants()

const classNames = computed(() => header({
  class: props.class,
}))
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
