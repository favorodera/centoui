<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { injectCentouiItemRootContext, itemVariants, type ItemActionsProps } from '.'

const rootContext = injectCentouiItemRootContext()

const props = defineProps<ItemActionsProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { actions } = itemVariants({
    variant: rootContext.variant,
  })

  return actions({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="item-actions"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
