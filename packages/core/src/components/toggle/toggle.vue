<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Toggle, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { type ToggleEmits, type ToggleProps, type ToggleSlots, toggleVariants } from '.'

defineSlots<ToggleSlots>()

const emits = defineEmits<ToggleEmits>()

const props = withDefaults(defineProps<ToggleProps>(), {
  size: 'md',
  square: false,
  variant: 'ghost',
})

const delegatedProps = reactiveOmit(props, 'class', 'variant', 'size', 'square')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { root } = toggleVariants()

const classNames = computed(() => root({
  class: props.class,
  size: props.size,
  square: props.square,
  variant: props.variant,
}))
</script>

<template>
  <Toggle
    v-slot="slotProps"
    data-slot="toggle"
    :data-variant="variant"
    :data-size="size"
    :data-square="square"
    v-bind="forwardedPropsEmits"
    :class="classNames"
  >
    <slot v-bind="slotProps" />
  </Toggle>
</template>
