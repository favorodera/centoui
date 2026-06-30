<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import {
  ComboboxItem,
  ComboboxItemIndicator,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed } from 'vue'
import config from '#centoui/config'
import {
  type ComboboxItemEmits,
  type ComboboxItemProps,
  comboboxVariants,
  injectRootContext,
} from '.'
import { Icon } from '../icon'

const emits = defineEmits<ComboboxItemEmits>()

const props = defineProps<ComboboxItemProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { item, itemIndicator } = comboboxVariants()

const classNames = computed(() => ({
  item: item({
    class: props.class,
    size: rootContext?.size,
  }),
  itemIndicator: itemIndicator({
    size: rootContext?.size,
  }),
}))
</script>

<template>
  <ComboboxItem
    data-slot="combobox-item"
    v-bind="forwardedPropsEmits"
    :class="classNames.item"
  >
    <slot />

    <ComboboxItemIndicator
      data-slot="combobox-item-indicator"
      as-child
      :class="classNames.itemIndicator"
    >
      <Icon :icon="config.icons.check" />
    </ComboboxItemIndicator>
  </ComboboxItem>
</template>
