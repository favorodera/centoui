<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { injectCentouiTileRootContext, tileVariants, type TileDescriptionProps } from '.'

const rootContext = injectCentouiTileRootContext()

const props = withDefaults(defineProps<TileDescriptionProps>(), {
  as: 'p',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { description } = tileVariants({
    variant: rootContext.variant,
  })

  return description({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="tile-description"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
