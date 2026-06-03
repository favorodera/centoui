<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { injectCentouiTileRootContext, tileVariants, type TileContentProps } from '.'

const rootContext = injectCentouiTileRootContext()

const props = defineProps<TileContentProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { content } = tileVariants({
    variant: rootContext.variant,
  })

  return content({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="tile-content"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
