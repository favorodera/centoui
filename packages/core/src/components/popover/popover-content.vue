<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PopoverArrow, PopoverContent, PopoverPortal, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import {
  type PopoverContentEmits,
  type PopoverContentProps,
  popoverVariants,
} from '.'

const emits = defineEmits<PopoverContentEmits>()

const props = withDefaults(defineProps<PopoverContentProps>(), {
  showArrow: false,
  sideOffset: 4,
})
const delegatedProps = reactiveOmit(props, 'class', 'showArrow')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { arrow, content } = popoverVariants()
const classNames = computed(() => ({
  arrow: arrow(),
  content: content({ class: props.class }),
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
