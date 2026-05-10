<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import { computed } from 'vue'
import { type AlertMediaSlots, type AlertMediaProps, injectAlertRootContext, alertVariants } from '.'


defineSlots<AlertMediaSlots>()

const props = withDefaults(defineProps<AlertMediaProps>(), {
  as: 'div',
})

// Forward props.
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

// Inject AlertRoot's context
const alertContext = injectAlertRootContext()

// Style class string for the component.
const styles = computed(() => {
  const { media } = alertVariants({
    color: alertContext.color,
    variant: alertContext.variant,
    orientation: alertContext.orientation,
  })

  return media({ class: props.class })
})
</script>

<template>
  <Primitive
    data-centoui-slot="alert-media"
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
