<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed, reactive, toRef } from 'vue'
import { itemVariants, provideCentouiItemRootContext, type ItemRootProps } from '.'

const props = withDefaults(defineProps<ItemRootProps>(), {
  size: 'md',
  variant: 'naked',
  orientation: 'horizontal',
})
const delegatedProps = reactiveOmit(
  props,
  'class',
  'size',
  'variant',
  'orientation',
)
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { root } = itemVariants({
    size: props.size,
    variant: props.variant,
    orientation: props.orientation,
  })

  return root({ class: props.class })
})

provideCentouiItemRootContext(reactive({
  size: toRef(props, 'size'),
  variant: toRef(props, 'variant'),
  orientation: toRef(props, 'orientation'),
}))
</script>

<template>
  <Primitive
    data-slot="item-root"
    :data-size="size"
    :data-variant="variant"
    :data-orientation="orientation"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
