<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { DialogContent, DialogOverlay, DialogPortal, useForwardPropsEmits } from 'reka-ui'
import { computed, useAttrs } from 'vue'
import { slideoverVariants, type SlideoverContentProps, type SlideoverContentEmits } from '.'

defineOptions({
  inheritAttrs: false,
})

const attributes = useAttrs()

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

const { content, overlay } = slideoverVariants()
const classNames = computed(() => ({
  content: content({
    side: props.side,
    class: props.class,
  }),
  overlay: overlay(),
}))
</script>

<template>
  <DialogPortal>
    
    <DialogOverlay
      :class="classNames.overlay"
      data-slot="slideover-overlay"
    />

    <DialogContent
      data-slot="slideover-content"
      :data-side="side"
      v-bind="{...attributes,...forwardedPropsEmits}"
      :class="classNames.content"
    >
      <slot />
    </DialogContent>

  </DialogPortal>
</template>
