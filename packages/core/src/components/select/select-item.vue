<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import {
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  useForwardPropsEmits,
} from 'reka-ui'
import { normalizeClass } from 'vue'
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

const variants = selectVariants()
</script>

<template>
  <SelectItem
    data-slot="select-item"
    v-bind="forwardedPropsEmits"
    :class="variants.item({
      class: normalizeClass(props.class),
      size: rootContext?.size,
    })"
  >
    <SelectItemText
      data-slot="select-item-text"
      :class="variants.itemText({ size: rootContext?.size })"
    >
      <slot />
    </SelectItemText>

    <SelectItemIndicator
      data-slot="select-item-indicator"
      :class="variants.itemIndicator({ size: rootContext?.size })"
    >
      <Icon :name="config.icons.check" />
    </SelectItemIndicator>
  </SelectItem>
</template>
