<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { injectCentouiTileRootContext, tileVariants, type TileMediaProps } from '.'

const rootContext = injectCentouiTileRootContext()

const props = defineProps<TileMediaProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { media } = tileVariants({
    variant: rootContext.variant,
    mediaType: props.type,
  })

  return media({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="tile-media"
    :data-type="type"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
