<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { alertVariants, injectAlertRootContext, type AlertActionsProps, type AlertActionsSlots } from '.'

defineSlots<AlertActionsSlots>()

const props = withDefaults(defineProps<AlertActionsProps>(), {
  as: 'div',
})

// Forward props.
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

// Inject AlertRoot's context
const alertContext = injectAlertRootContext()

// Style class string for the component.
const styles = computed(() => {
  const { actions } = alertVariants({
    color: alertContext.color,
    variant: alertContext.variant,
    orientation: alertContext.orientation,
  })
  
  return actions({ class: props.class })
})
</script>

<template>
  <Primitive
    data-centoui-slot="alert-actions"
    v-bind="forwardedProps"
    :data-centoui-variant="alertContext.variant"
    :data-centoui-color="alertContext.color"
    :data-centoui-orientation="alertContext.orientation"
    :data-centoui-state="alertContext.state"
    :class="styles"
  >
    <slot />
  </Primitive>
</template>
