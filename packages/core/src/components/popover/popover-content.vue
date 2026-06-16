<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PopoverArrow, PopoverContent, PopoverPortal, useForwardPropsEmits } from 'reka-ui'
import {
  type PopoverContentEmits,
  type PopoverContentProps,
  popoverVariants,
} from '.'
import { computed } from 'vue'

const emits = defineEmits<PopoverContentEmits>()

const props = withDefaults(defineProps<PopoverContentProps>(), {
  sideOffset: 4,
  showArrow: false,
})
const delegatedProps = reactiveOmit(props, 'class', 'showArrow')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { content, arrow } = popoverVariants()
const classNames = computed(() => ({
  content: content({ class: props.class }),
  arrow: arrow(),
}))
</script>

<template>
  <PopoverPortal>
    <PopoverContent
      data-slot="popover-content"
      v-bind="forwardedPropsEmits"
      :class="classNames.content"
    >
      <slot />
      <PopoverArrow
        v-if="showArrow"
        data-slot="popover-arrow"
        :class="classNames.arrow"
      />
    </PopoverContent>
  </PopoverPortal>
</template>
