<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import { computed, reactive, toRef } from 'vue'
import { type AlertRootSlots, type AlertRootProps, alertVariants, provideCentouiAlertRootContext } from '.'

defineSlots<AlertRootSlots>()

const props = withDefaults(defineProps<AlertRootProps>(), {
  as: 'div',
  variant: 'neutral',
})
const delegatedProps = reactiveOmit(
  props,
  'class',
  'variant',
)
const forwardedProps = useForwardProps(delegatedProps)

const styles = computed(() => alertVariants({
  variant: props.variant,
}))

provideCentouiAlertRootContext(reactive({
  styles,
  variant: toRef(props, 'variant'),
}))
</script>

<template>
  <Primitive
    data-slot="alert-root"
    :data-variant="variant"
    role="alert"
    v-bind="forwardedProps"
    :class="styles.root({ class: props.class })"
  >
    <slot />
  </Primitive>
</template>
