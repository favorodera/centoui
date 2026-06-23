<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { DialogContent, DialogOverlay, DialogPortal, useForwardPropsEmits } from 'reka-ui'
import { computed, useAttrs } from 'vue'
import { type SheetContentEmits, type SheetContentProps, sheetVariants } from '.'

defineOptions({
  inheritAttrs: false,
})

const emits = defineEmits<SheetContentEmits>()

const props = withDefaults(defineProps<SheetContentProps>(), {
  side: 'right',
})

const attributes = useAttrs()

const delegatedProps = reactiveOmit(props, 'class', 'side')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { content, overlay } = sheetVariants()

const classNames = computed(() => ({
  content: content({
    class: props.class,
    side: props.side,
  }),
  overlay: overlay(),
}))
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      :class="classNames.overlay"
      data-slot="sheet-overlay"
    />

    <DialogContent
      data-slot="sheet-content"
      :data-side="side"
      v-bind="{...attributes,...forwardedPropsEmits}"
      :class="classNames.content"
    >
      <slot />
    </DialogContent>
  </DialogPortal>
</template>
