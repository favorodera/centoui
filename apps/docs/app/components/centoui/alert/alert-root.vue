<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass, reactive, toRef } from 'vue'
import { type AlertRootProps, alertVariants, provideRootContext } from '.'

const props = withDefaults(defineProps<AlertRootProps>(), {
  variant: 'neutral',
})

const delegatedProps = reactiveOmit(props, 'class', 'variant')

const forwardedProps = useForwardProps(delegatedProps)

const variants = alertVariants()

provideRootContext(reactive({
  variant: toRef(props, 'variant'),
}))
</script>

<template>
  <Primitive
    data-slot="alert-root"
    :data-variant="variant"
    role="alert"
    v-bind="forwardedProps"
    :class="variants.root({
      class: normalizeClass(props.class),
      variant: props.variant,
    })"
  >
    <slot />
  </Primitive>
</template>
