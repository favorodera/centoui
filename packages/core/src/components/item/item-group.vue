<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { itemVariants, type ItemGroupProps } from '.'

const props = defineProps<ItemGroupProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { group } = itemVariants()

  return group({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="item-group"
    role="list"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>
