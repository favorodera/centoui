<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { alertVariants, type AlertContentProps, injectCentouiAlertRootContext } from '.'
import { computed } from 'vue'

const rootContext = injectCentouiAlertRootContext()

const props = withDefaults(defineProps<AlertContentProps>(), {
  as: 'div',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { content } = alertVariants({
    variant: rootContext.variant,
  })
  
  return content({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="alert-content"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
