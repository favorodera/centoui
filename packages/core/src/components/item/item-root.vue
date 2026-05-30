<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed, reactive, toRef } from 'vue'
import { itemVariants, provideCentouiItemRootContext, type ItemRootProps } from '.'

const props = withDefaults(defineProps<ItemRootProps>(), {
  variant: 'ghost',
  orientation: 'horizontal',
})
const delegatedProps = reactiveOmit(
  props,
  'class',
  'variant',
  'orientation',
)
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { root } = itemVariants({
    variant: props.variant,
    orientation: props.orientation,
  })

  return root({ class: props.class })
})

provideCentouiItemRootContext(reactive({
  variant: toRef(props, 'variant'),
  orientation: toRef(props, 'orientation'),
}))
</script>

<template>
  <Primitive
    data-slot="item-root"
    :data-variant="variant"
    :data-orientation="orientation"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
