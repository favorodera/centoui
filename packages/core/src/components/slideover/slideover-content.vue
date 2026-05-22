<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { DialogContent, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { slideoverVariants, type SlideoverContentProps, type SlideoverContentEmits } from '.'

const emits = defineEmits<SlideoverContentEmits>()

const props = withDefaults(defineProps<SlideoverContentProps>(), {
  side: 'right',
})
const delegatedProps = reactiveOmit(
  props,
  'class',
  'side',
)

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const classNames = computed(() => {
  const { content } = slideoverVariants({
    side: props.side,
  })
  
  return content({ class: props.class })
})
</script>

<template>
  <DialogContent
    data-slot="slideover-content"
    :data-side="side"
    v-bind="forwardedPropsEmits"
    :class="classNames"
  >
    <slot />
  </DialogContent>
</template>
