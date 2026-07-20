<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import {
  ComboboxItem,
  ComboboxItemIndicator,
  useForwardPropsEmits,
} from 'reka-ui'
import { normalizeClass } from 'vue'
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

const variants = comboboxVariants()
</script>

<template>
  <ComboboxItem
    data-slot="combobox-item"
    v-bind="forwardedPropsEmits"
    :class="variants.item({
      size: rootContext?.size,
      class: normalizeClass(props.class),
    })"
  >
    <slot />

    <ComboboxItemIndicator
      data-slot="combobox-item-indicator"
      as-child
      :class="variants.itemIndicator({
        size: rootContext?.size,
      })"
    >
      <Icon :name="config.icons.check" />
    </ComboboxItemIndicator>
  </ComboboxItem>
</template>
