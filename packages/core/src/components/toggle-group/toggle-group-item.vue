<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { ToggleGroupItem, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
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

const itemVariants = toggleGroupVariants()

const variants = toggleVariants()
</script>

<template>
  <ToggleGroupItem
    v-slot="slotProps"
    data-slot="toggle-group-item"
    :data-variant="variant"
    :data-size="size"
    :data-square="square"
    v-bind="forwardedProps"
    :class="variants.root({
      class: itemVariants.item({
        class: normalizeClass(props.class),
      }),
      size: props.size,
      square: props.square,
      variant: props.variant,
    })"
  >
    <slot v-bind="slotProps" />
  </ToggleGroupItem>
</template>
