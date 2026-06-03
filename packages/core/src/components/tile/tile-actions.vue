<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { injectCentouiTileRootContext, tileVariants, type TileActionsProps } from '.'

const rootContext = injectCentouiTileRootContext()

const props = defineProps<TileActionsProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { actions } = tileVariants({
    variant: rootContext.variant,
  })

  return actions({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="tile-actions"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
