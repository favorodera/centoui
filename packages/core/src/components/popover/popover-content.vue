<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PopoverContent, useForwardPropsEmits } from 'reka-ui'
import {
  type PopoverContentEmits,
  type PopoverContentProps,
  popoverVariants,
} from '.'
import { computed } from 'vue'

const emits = defineEmits<PopoverContentEmits>()

const props = defineProps<PopoverContentProps>()
const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const classNames = computed(() => {
  const { content } = popoverVariants()
  
  return content({ class: props.class })
})
</script>

<template>
  <PopoverContent
    data-slot="popover-content"
    v-bind="forwardedPropsEmits"
    :class="classNames"
  >
    <slot />
  </PopoverContent>
</template>
