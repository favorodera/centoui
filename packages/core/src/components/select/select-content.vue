<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import {
  SelectArrow,
  SelectContent,
  SelectPortal,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectViewport,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed } from 'vue'
import config from '#centoui/config'
import {
  injectRootContext,
  type SelectContentEmits,
  type SelectContentProps,
  selectVariants,
} from '.'
import { Icon } from '../icon'

const emits = defineEmits<SelectContentEmits>()

const props = withDefaults(defineProps<SelectContentProps>(), {
  position: 'popper',
  showArrow: false,
  sideOffset: 4,
})

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class', 'showArrow')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { arrow, content, scrollDownButton, scrollUpButton, viewport } = selectVariants()

const classNames = computed(() => ({
  arrow: arrow(),
  content: content({
    class: props.class,
    contentPosition: props.position,
    size: rootContext?.size,
  }),
  scrollDownButton: scrollDownButton({
    size: rootContext?.size,
  }),
  scrollUpButton: scrollUpButton({
    size: rootContext?.size,
  }),
  viewport: viewport({
    size: rootContext?.size,
  }),
}))
</script>

<template>
  <SelectPortal>
    <SelectContent
      v-bind="forwardedPropsEmits"
      data-slot="select-content"
      :class="classNames.content"
    >
      <SelectScrollUpButton
        data-slot="select-scroll-up-button"
        :class="classNames.scrollUpButton"
      >
        <span class="sr-only">Scroll up</span>
        <Icon :icon="config.icons.chevronUp" />
      </SelectScrollUpButton>

      <SelectViewport
        data-slot="select-viewport"
        :class="classNames.viewport"
      >
        <slot />
      </SelectViewport>

      <SelectScrollDownButton
        data-slot="select-scroll-down-button"
        :class="classNames.scrollDownButton"
      >
        <span class="sr-only">Scroll down</span>
        <Icon :icon="config.icons.chevronDown" />
      </SelectScrollDownButton>

      <SelectArrow
        v-if="showArrow"
        data-slot="select-arrow"
        :class="classNames.arrow"
      />
    </SelectContent>
  </SelectPortal>
</template>
