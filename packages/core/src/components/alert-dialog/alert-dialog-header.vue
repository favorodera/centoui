<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type AlertDialogHeaderProps, alertDialogVariants } from '.'

const props = defineProps<AlertDialogHeaderProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = alertDialogVariants()
</script>

<template>
  <Primitive
    data-slot="alert-dialog-header"
    v-bind="forwardedProps"
    :class="variants.header({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </Primitive>
</template>
