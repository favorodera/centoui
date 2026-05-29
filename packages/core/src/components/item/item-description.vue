<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { injectCentouiItemRootContext, itemVariants, type ItemDescriptionProps } from '.'

const rootContext = injectCentouiItemRootContext()

const props = withDefaults(defineProps<ItemDescriptionProps>(), {
  as: 'p',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { description } = itemVariants({
    size: rootContext.size,
    variant: rootContext.variant,
    orientation: rootContext.orientation,
  })

  return description({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="item-description"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
