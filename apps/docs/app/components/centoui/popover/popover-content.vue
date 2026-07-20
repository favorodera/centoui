<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PopoverArrow, PopoverContent, PopoverPortal, useForwardPropsEmits } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type PopoverContentEmits,
  type PopoverContentProps,
  popoverVariants,
} from '.'

defineOptions({
  inheritAttrs: false,
})

const emits = defineEmits<PopoverContentEmits>()

const props = withDefaults(defineProps<PopoverContentProps>(), {
  showArrow: false,
  sideOffset: 4,
})

const delegatedProps = reactiveOmit(props, 'class', 'showArrow')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const variants = popoverVariants()
</script>

<template>
  <PopoverPortal>
    <PopoverContent
      data-slot="popover-content"
      v-bind="{ ...$attrs, ...forwardedPropsEmits }"
      :class="variants.content({
        class:normalizeClass(props.class)
      })"
    >
      <div
        :class="variants.contentWrapper()"
        data-slot="popover-content-wrapper"
      >
        <slot />
      </div>

      <PopoverArrow
        v-if="showArrow"
        data-slot="popover-arrow"
        :class="variants.arrow()"
      />
    </PopoverContent>
  </PopoverPortal>
</template>
