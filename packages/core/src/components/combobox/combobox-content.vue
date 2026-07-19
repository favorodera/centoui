<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import {
  ComboboxArrow,
  ComboboxContent,
  ComboboxViewport,
  useForwardPropsEmits,
} from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type ComboboxContentEmits,
  type ComboboxContentProps,
  comboboxVariants,
  injectRootContext,
} from '.'

const emits = defineEmits<ComboboxContentEmits>()

const props = withDefaults(defineProps<ComboboxContentProps>(), {
  position: 'inline',
  showArrow: false,
  sideOffset: 4,
})

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class', 'showArrow')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const variants = comboboxVariants()
</script>

<template>
  <ComboboxContent
    v-bind="forwardedPropsEmits"
    data-slot="combobox-content"
    :class="variants.content({
      class: normalizeClass(props.class),
      contentPosition: props.position,
      size: rootContext?.size,
    })"
  >
    <ComboboxViewport
      data-slot="combobox-viewport"
      :class="variants.viewport({
        size: rootContext?.size,
      })"
    >
      <slot />
    </ComboboxViewport>

    <ComboboxArrow
      v-if=" showArrow"
      data-slot="combobox-arrow"
      :class="variants.arrow()"
    />
  </ComboboxContent>
</template>
