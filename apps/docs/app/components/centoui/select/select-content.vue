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
import { normalizeClass } from 'vue'
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
  position: 'item-aligned',
  showArrow: false,
  sideOffset: 4,
})

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class', 'showArrow')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const variants = selectVariants()
</script>

<template>
  <SelectPortal>
    <SelectContent
      v-bind="forwardedPropsEmits"
      data-slot="select-content"
      :class="variants.content({
        class: normalizeClass(props.class),
        contentPosition: props.position,
        size: rootContext?.size,
      })"
    >
      <SelectScrollUpButton
        data-slot="select-scroll-up-button"
        :class="variants.scrollUpButton({ size: rootContext?.size })"
      >
        <span class="sr-only">Scroll up</span>
        <Icon :name="config.icons.chevronUp" />
      </SelectScrollUpButton>

      <SelectViewport
        data-slot="select-viewport"
        :class="variants.viewport({ size: rootContext?.size })"
      >
        <slot />
      </SelectViewport>

      <SelectScrollDownButton
        data-slot="select-scroll-down-button"
        :class="variants.scrollDownButton({ size: rootContext?.size })"
      >
        <span class="sr-only">Scroll down</span>
        <Icon :name="config.icons.chevronDown" />
      </SelectScrollDownButton>

      <SelectArrow
        v-if="showArrow"
        data-slot="select-arrow"
        :class="variants.arrow({ size: rootContext?.size })"
      />
    </SelectContent>
  </SelectPortal>
</template>
