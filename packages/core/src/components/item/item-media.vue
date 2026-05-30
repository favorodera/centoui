<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { injectCentouiItemRootContext, itemVariants, type ItemMediaProps } from '.'

const rootContext = injectCentouiItemRootContext()

const props = defineProps<ItemMediaProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { media } = itemVariants({
    variant: rootContext.variant,
  })

  return media({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="item-media"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
