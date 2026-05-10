<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import { computed } from 'vue'
import { type AlertDescriptionSlots, type AlertDescriptionProps, injectAlertRootContext, alertVariants } from '.'


defineSlots<AlertDescriptionSlots>()

const props = withDefaults(defineProps<AlertDescriptionProps>(), {
  as: 'div',
})

// Forward props.
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

// Inject AlertRoot's context
const alertContext = injectAlertRootContext()

// Style class string for the component.
const styles = computed(() => {
  const { description } = alertVariants({
    color: alertContext.color,
    variant: alertContext.variant,
    orientation: alertContext.orientation,
  })

  return description({ class: props.class })
})
</script>

<template>
  <Primitive
    data-centoui-slot="alert-description"
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
