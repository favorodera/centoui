<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { itemVariants, type ItemSeparatorProps } from '.'
import { Separator } from '../separator'

const props = defineProps<ItemSeparatorProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { separator } = itemVariants()

  return separator({ class: props.class })
})
</script>

<template>
  <Separator
    data-slot="item-separator"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Separator>
</template>
