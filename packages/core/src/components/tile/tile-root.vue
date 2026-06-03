<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed, reactive, toRef } from 'vue'
import { tileVariants, provideCentouiTileRootContext, type TileRootProps } from '.'

const props = withDefaults(defineProps<TileRootProps>(), {
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
  const { root } = tileVariants({
    variant: props.variant,
  })

  return root({ class: props.class })
})

provideCentouiTileRootContext(reactive({
  variant: toRef(props, 'variant'),
}))
</script>

<template>
  <Primitive
    data-slot="tile-root"
    :data-variant="variant"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
