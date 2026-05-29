<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { injectCentouiItemRootContext, itemVariants, type ItemContentProps } from '.'

const rootContext = injectCentouiItemRootContext()

const props = defineProps<ItemContentProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { content } = itemVariants({
    size: rootContext.size,
    variant: rootContext.variant,
    orientation: rootContext.orientation,
  })

  return content({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="item-content"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
