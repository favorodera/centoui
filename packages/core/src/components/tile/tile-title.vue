<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { injectCentouiTileRootContext, tileVariants, type TileTitleProps } from '.'

const rootContext = injectCentouiTileRootContext()

const props = defineProps<TileTitleProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { title } = tileVariants({
    variant: rootContext.variant,
  })

  return title ({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="tile-title"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
