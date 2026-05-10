<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import { computed } from 'vue'
import { type AlertTitleSlots, type AlertTitleProps, injectAlertRootContext, alertVariants } from '.'


defineSlots<AlertTitleSlots>()

const props = withDefaults(defineProps<AlertTitleProps>(), {
  as: 'div',
})

// Forward props.
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

// Inject AlertRoot's context
const alertContext = injectAlertRootContext()

// Style class string for the component.
const styles = computed(() => {
  const { title } = alertVariants({
    color: alertContext.color,
    variant: alertContext.variant,
    orientation: alertContext.orientation,
  })

  return title({ class: props.class })
})
</script>

<template>
  <Primitive
    data-centoui-slot="alert-title"
    v-bind="forwardedProps"
    :data-centoui-variant="alertContext.variant"
    :data-centoui-color="alertContext.color"
    :data-centoui-orientation="alertContext.orientation"
    :class="styles"
  >
    <slot />
  </Primitive>
</template>
