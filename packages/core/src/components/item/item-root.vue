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
)
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { root } = itemVariants({
    variant: props.variant,
  })

  return root({ class: props.class })
})

provideCentouiItemRootContext(reactive({
  variant: toRef(props, 'variant'),
}))
</script>

<template>
  <Primitive
    data-slot="item-root"
    :data-variant="variant"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
