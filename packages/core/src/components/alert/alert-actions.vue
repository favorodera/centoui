<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { alertVariants, type AlertActionsProps, injectCentouiAlertRootContext } from '.'
import { computed } from 'vue'

const rootContext = injectCentouiAlertRootContext()

const props = defineProps<AlertActionsProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { actions } = alertVariants({
    variant: rootContext.variant,
  })
  
  return actions({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="alert-actions"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
