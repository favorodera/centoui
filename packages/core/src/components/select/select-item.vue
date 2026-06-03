<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import {
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  useForwardPropsEmits,
} from 'reka-ui'
import {
  type SelectItemProps,
  type SelectItemEmits,
  selectVariants,
} from '.'
import { computed } from 'vue'
import config from '#centoui/config'
import { Icon } from '../icon'

const emits = defineEmits<SelectItemEmits>()

const props = defineProps<SelectItemProps>()
const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { item, itemText, itemIndicator } = selectVariants()
const classNames = computed(() => ({
  item: item({ class: props.class }),
  itemText: itemText(),
  itemIndicator: itemIndicator(),
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
