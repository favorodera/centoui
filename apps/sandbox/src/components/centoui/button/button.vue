<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { buttonVariants, type ButtonProps, type ButtonSlots } from '.'

defineSlots<ButtonSlots>()

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
  variant: 'solid',
  color: 'primary',
  size: 'md',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const styles = computed(() => {
  const { root } = buttonVariants({
    variant: props.variant,
    color: props.color,
    size: props.size,
  })

  return root({ class: props.class })
})
</script>

<template>
  <Primitive
    data-centoui-slot="button"
    :data-centoui-variant="variant"
    :data-centoui-size="size"
    :data-centoui-color="color"
    v-bind="forwardedProps"
    :class="styles"
  >
    <slot />
  </Primitive>
</template>
