<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed, reactive, toRef } from 'vue'
import { inputGroupVariants, provideCentouiInputGroupRootContext, type InputGroupRootProps } from '.'

const props = withDefaults(defineProps<InputGroupRootProps>(), {
  as: 'div',
  size: 'md',
})
const delegatedProps = reactiveOmit(props, 'class', 'size')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { root } = inputGroupVariants({
    size: props.size,
  })

  return root({ class: props.class })
})

/**
 * Focuses the input group control when clicking anywhere on the root element.\
 * Bails early to avoid interference if the click originated on the control itself (handles its own focus)\
 * or on a button element (has its own interaction intent).
 *
 * @param event - The mouse click event.
 */
function handleInputGroupRootClick(event: MouseEvent): void {
  const target = event.target as HTMLElement
  const currentTarget = event.currentTarget as HTMLElement

  // If the click originated inside the control itself or a button, let it handle focus naturally
  if (target.closest('[input-group-control], button, [role="button"]')) return

  // Otherwise focus the control — covers clicks on addons, padding, or label areas
  currentTarget.querySelector<HTMLElement>('[input-group-control]')?.focus()
}

provideCentouiInputGroupRootContext(reactive({
  size: toRef(props, 'size'),
}))
</script>

<template>
  <Primitive
    data-slot="input-group-root"
    :data-size="size"
    v-bind="forwardedProps"
    :class="classNames"
    role="group"
    @click="handleInputGroupRootClick"
  >
    <slot />
  </Primitive>
</template>

