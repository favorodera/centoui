<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import { computed, reactive, toRef } from 'vue'
import { type AlertRootSlots, type AlertRootProps, alertVariants, provideAlertRootContext } from '.'


defineSlots<AlertRootSlots>()

const props = withDefaults(defineProps<AlertRootProps>(), {
  as: 'div',
  color: 'primary',
  variant: 'solid',
  orientation: 'vertical',
})

// Forward props.
const delegatedProps = reactiveOmit(props, 'class', 'orientation', 'color', 'variant')
const forwardedProps = useForwardProps(delegatedProps)

// Models

// Style class string for the component.
const styles = computed(() => {
  const { root } = alertVariants({
    color: props.color,
    variant: props.variant,
    orientation: props.orientation,
  })

  return root({ class: props.class })
})

// Provide context to child components.
provideAlertRootContext(
  reactive({
    variant: toRef(props, 'variant'),
    color: toRef(props, 'color'),
    orientation: toRef(props, 'orientation'),
  }),
)
</script>

<template>
  <Primitive
    data-centoui-slot="alert-root"
    :data-centoui-variant="variant"
    :data-centoui-color="color"
    :data-centoui-orientation="orientation"
    role="alert"
    v-bind="forwardedProps"
    :class="styles"
  >
    <slot />
  </Primitive>
</template>
