<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type InputGroupRootProps, inputGroupVariants } from '.'

const props = defineProps<InputGroupRootProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { root } = inputGroupVariants()
const classNames = computed(() => root({ class: props.class }))

/**
 * Focuses the input group control when clicking anywhere on the root element.\
 * Bails early to avoid interference if the click originated on the control itself (handles its own focus)\
 * or on a button element (has its own interaction intent).
 * @param event The mouse click event.
 */
function handleInputGroupRootClick(event: MouseEvent): void {
  const target = event.target as HTMLElement
  const currentTarget = event.currentTarget as HTMLElement

  // If the click originated inside the control itself or a button, let it handle focus naturally
  if (target.closest('[data-slot=input-group-control], button, [role="button"]')) return

  // Otherwise focus the control — covers clicks on addons, padding, or label areas
  currentTarget.querySelector<HTMLElement>('[data-slot="input-group-control"]')?.focus()
}
</script>

<template>
  <Primitive
    data-slot="input-group-root"
    v-bind="forwardedProps"
    :class="classNames"
    role="group"
    @click="handleInputGroupRootClick"
  >
    <slot />
  </Primitive>
</template>
