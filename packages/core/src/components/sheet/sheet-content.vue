<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { DialogContent, DialogOverlay, DialogPortal, useForwardPropsEmits } from 'reka-ui'
import { normalizeClass, useAttrs } from 'vue'
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

const variants = sheetVariants()
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      :class="variants.overlay()"
      data-slot="sheet-overlay"
    />

    <DialogContent
      data-slot="sheet-content"
      :data-side="side"
      v-bind="{...attributes,...forwardedPropsEmits}"
      :class="variants.content({
        class: normalizeClass(props.class),
        side: props.side,
      })"
    >
      <slot />
    </DialogContent>
  </DialogPortal>
</template>
