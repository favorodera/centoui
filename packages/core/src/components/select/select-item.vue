<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import {
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed } from 'vue'
import config from '#centoui/config'
import {
  injectRootContext,
  type SelectItemEmits,
  type SelectItemProps,
  selectVariants,
} from '.'
import { Icon } from '../icon'

const emits = defineEmits<SelectItemEmits>()

const props = defineProps<SelectItemProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { item, itemIndicator, itemText } = selectVariants()

const classNames = computed(() => ({
  item: item({
    class: props.class,
    size: rootContext.size,
  }),
  itemIndicator: itemIndicator({
    size: rootContext.size,
  }),
  itemText: itemText({
    size: rootContext.size,
  }),
}))
</script>

<template>
  <SelectItem
    data-slot="select-item"
    v-bind="forwardedPropsEmits"
    :class="classNames.item"
  >
    <SelectItemText
      data-slot="select-item-text"
      :class="classNames.itemText"
    >
      <slot />
    </SelectItemText>

    <SelectItemIndicator
      data-slot="select-item-indicator"
      as-child
      :class="classNames.itemIndicator"
    >
      <Icon :icon="config.icons.check" />
    </SelectItemIndicator>
  </SelectItem>
</template>
