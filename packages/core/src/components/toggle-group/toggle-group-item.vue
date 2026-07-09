<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { ToggleGroupItem, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type ToggleGroupItemProps, type ToggleGroupItemSlots, toggleGroupVariants } from '.'
import { toggleVariants } from '../toggle'

defineSlots<ToggleGroupItemSlots>()

const props = withDefaults(defineProps<ToggleGroupItemProps>(), {
  size: 'md',
  square: false,
  variant: 'ghost',
})

const delegatedProps = reactiveOmit(props, 'class', 'size', 'square', 'variant')

const forwardedProps = useForwardProps(delegatedProps)

const { item } = toggleGroupVariants()

const { root } = toggleVariants()

const classNames = computed(() => root({
  class: item({
    class: props.class,
  }),
  size: props.size,
  square: props.square,
  variant: props.variant,
}))
</script>

<template>
  <ToggleGroupItem
    v-slot="slotProps"
    data-slot="toggle-group-item"
    :data-variant="variant"
    :data-size="size"
    :data-square="square"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot v-bind="slotProps" />
  </ToggleGroupItem>
</template>
