<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { injectCentouiItemRootContext, itemVariants, type ItemFooterProps } from '.'

const rootContext = injectCentouiItemRootContext()

const props = defineProps<ItemFooterProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { footer } = itemVariants({
    size: rootContext.size,
    variant: rootContext.variant,
    orientation: rootContext.orientation,
  })

  return footer({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="item-footer"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
