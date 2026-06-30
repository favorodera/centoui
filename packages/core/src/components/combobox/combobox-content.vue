<script setup lang="ts">
import { createReusableTemplate, reactiveOmit } from '@vueuse/core'
import {
  ComboboxArrow,
  ComboboxContent,
  ComboboxPortal,
  ComboboxViewport,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed } from 'vue'
import {
  type ComboboxContentEmits,
  type ComboboxContentProps,
  comboboxVariants,
  injectRootContext,
} from '.'

const emits = defineEmits<ComboboxContentEmits>()

const props = withDefaults(defineProps<ComboboxContentProps>(), {
  position: 'popper',
  showArrow: false,
  sideOffset: 4,
})

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class', 'showArrow')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { arrow, content, viewport } = comboboxVariants()

const classNames = computed(() => ({
  arrow: arrow(),
  content: content({
    class: props.class,
    contentPosition: props.position,
    size: rootContext?.size,
  }),
  viewport: viewport({
    size: rootContext?.size,
  }),
}))

const [
  DefineContent,
  ReuseContent,
] = createReusableTemplate()
</script>

<template>
  <DefineContent>
    <ComboboxContent
      v-bind="forwardedPropsEmits"
      data-slot="combobox-content"
      :class="classNames.content"
    >
      <ComboboxViewport
        data-slot="combobox-viewport"
        :class="classNames.viewport"
      >
        <slot />
      </ComboboxViewport>

      <ComboboxArrow
        v-if=" showArrow"
        data-slot="combobox-arrow"
        :class="classNames.arrow"
      />
    </ComboboxContent>
  </DefineContent>

  <ComboboxPortal v-if="position === 'popper'">
    <ReuseContent />
  </ComboboxPortal>

  <ReuseContent v-else />
</template>
