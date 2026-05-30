<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { injectCentouiItemRootContext, itemVariants, type ItemBodyProps } from '.'

const rootContext = injectCentouiItemRootContext()

const props = defineProps<ItemBodyProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { body } = itemVariants({
    variant: rootContext.variant,
    orientation: rootContext.orientation,
  })

  return body({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="item-body"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
