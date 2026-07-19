<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type AlertTitleProps, alertVariants, injectRootContext } from '.'

const props = defineProps<AlertTitleProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = alertVariants()
</script>

<template>
  <Primitive
    data-slot="alert-title"
    v-bind="forwardedProps"
    :class="variants.title({
      class: normalizeClass(props.class),
      variant: rootContext?.variant,
    })"
  >
    <slot />
  </Primitive>
</template>
