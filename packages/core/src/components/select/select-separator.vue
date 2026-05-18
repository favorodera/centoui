<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, SelectSeparator } from 'reka-ui'
import {
  injectCentouiSelectRootContext,
  selectVariants,
  type SelectSeparatorProps,
} from '.'
import { Separator } from '../separator'
import { computed } from 'vue'

const rootContext = injectCentouiSelectRootContext()

const props = withDefaults(defineProps<SelectSeparatorProps>(), {
  asChild: true,
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { separator } = selectVariants({
    size: rootContext.size,
  })
  
  return separator({ class: props.class })
})
</script>

<template>
  <SelectSeparator
    data-slot="select-separator"
    v-bind="forwardedProps"
  >
    <Separator
      :class="classNames"
    />
  </SelectSeparator>
</template>
