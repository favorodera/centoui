<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectContent, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import {
  type SelectContentEmits,
  type SelectContentProps,
  injectCentouiSelectRootContext,
  selectVariants,
} from '.'

const rootContext = injectCentouiSelectRootContext()

const emits = defineEmits<SelectContentEmits>()

const props = withDefaults(defineProps<SelectContentProps>(), {
  position: 'popper',
})
const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const classNames = computed(() => {
  const { content } = selectVariants({
    size: rootContext.size,
    contentPosition: props.position,
  })
  
  return content({ class: props.class })
})
</script>

<template>
  <SelectContent
    v-bind="forwardedPropsEmits"
    data-slot="select-content"
    :class="classNames"
  >
    <slot />
  </SelectContent>
</template>
