<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectItemIndicator, useForwardProps } from 'reka-ui'
import {
  type SelectItemIndicatorProps,
  injectCentouiSelectRootContext,
  selectVariants,
} from '.'
import { Icon } from '@iconify/vue'
import config from '#centoui/config'
import { computed } from 'vue'

const rootContext = injectCentouiSelectRootContext()

const props = defineProps<SelectItemIndicatorProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { itemIndicator } = selectVariants({
    size: rootContext.size,
  })
  
  return itemIndicator({ class: props.class })
})
</script>

<template>
  <SelectItemIndicator
    data-slot="select-item-indicator"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot>
      <Icon :icon="config.icons.check" />
    </slot>
  </SelectItemIndicator>
</template>
