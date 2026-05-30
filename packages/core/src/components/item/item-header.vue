<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { injectCentouiItemRootContext, itemVariants, type ItemHeaderProps } from '.'

const rootContext = injectCentouiItemRootContext()

const props = defineProps<ItemHeaderProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { header } = itemVariants({
    variant: rootContext.variant,
  })

  return header({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="item-header"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
