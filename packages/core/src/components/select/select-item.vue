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
  type SelectItemEmits,
  type SelectItemProps,
  selectVariants,
} from '.'
import { Icon } from '../icon'

const emits = defineEmits<SelectItemEmits>()

const props = defineProps<SelectItemProps>()
const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { item, itemIndicator, itemText } = selectVariants()
const classNames = computed(() => ({
  item: item({ class: props.class }),
  itemIndicator: itemIndicator(),
  itemText: itemText(),
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
