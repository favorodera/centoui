<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type AlertContentProps, alertVariants, injectRootContext } from '.'

const props = defineProps<AlertContentProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = alertVariants()
</script>

<template>
  <Primitive
    data-slot="alert-content"
    v-bind="forwardedProps"
    :class="variants.content({
      class: normalizeClass(props.class),
      variant: rootContext?.variant,
    })"
  >
    <slot />
  </Primitive>
</template>
