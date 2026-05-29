<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { injectCentouiItemRootContext, itemVariants, type ItemTitleProps } from '.'

const rootContext = injectCentouiItemRootContext()

const props = defineProps<ItemTitleProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { title } = itemVariants({
    size: rootContext.size,
    variant: rootContext.variant,
    orientation: rootContext.orientation,
  })

  return title ({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="item-title"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
