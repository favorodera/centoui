<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, SelectGroup } from 'reka-ui'
import {
  injectCentouiSelectRootContext,
  selectVariants,
  type SelectGroupProps,
} from '.'
import { computed } from 'vue'

const rootContext = injectCentouiSelectRootContext()

const props = defineProps<SelectGroupProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { group } = selectVariants({
    size: rootContext.size,
  })
  
  return group({ class: props.class })
})
</script>

<template>
  <SelectGroup
    data-slot="select-group"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </SelectGroup>
</template>
