<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectItem, useForwardPropsEmits } from 'reka-ui'
import {
  type SelectItemProps,
  type SelectItemEmits,
  injectCentouiSelectRootContext,
  selectVariants,
} from '.'
import { computed } from 'vue'

const rootContext = injectCentouiSelectRootContext()

const emits = defineEmits<SelectItemEmits>()

const props = defineProps<SelectItemProps>()
const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const classNames = computed(() => {
  const { item } = selectVariants({
    size: rootContext.size,
  })
  
  return item({ class: props.class })
})
</script>

<template>
  <SelectItem
    data-slot="select-item"
    v-bind="forwardedPropsEmits"
    :class="classNames"
  >
    <slot />
  </SelectItem>
</template>
