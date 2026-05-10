<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import { computed, reactive, toRef } from 'vue'
import { type AlertRootSlots, type AlertRootProps, alertVariants, provideAlertRootContext, type AlertRootEmits } from '.'


defineEmits<AlertRootEmits>()
defineSlots<AlertRootSlots>()

const props = withDefaults(defineProps<AlertRootProps>(), {
  as: 'div',
  color: 'primary',
  variant: 'solid',
  orientation: 'vertical',
})

// Forward props.
const delegatedProps = reactiveOmit(props, 'class', 'orientation', 'color', 'variant', 'open')
const forwardedProps = useForwardProps(delegatedProps)

// Models
const open = defineModel<boolean>('open', { default: true })

// Style class string for the component.
const styles = computed(() => {
  const { root } = alertVariants({
    color: props.color,
    variant: props.variant,
    orientation: props.orientation,
  })

  return root({ class: props.class })
})

// Computations
const state = computed(() => open.value ? 'open' : 'closed')

// Provide context to child components.
provideAlertRootContext(reactive({
  variant: toRef(props, 'variant'),
  color: toRef(props, 'color'),
  orientation: toRef(props, 'orientation'),
  state,
  open,
  onClose: () => open.value = false,
}))
</script>

<template>
  <Primitive
    v-if="open"
    data-centoui-slot="alert-root"
    :data-centoui-variant="variant"
    :data-centoui-color="color"
    :data-centoui-orientation="orientation"
    :data-centoui-state="state"
    role="alert"
    v-bind="forwardedProps"
    :class="styles"
  >
    <slot />
  </Primitive>
</template>
