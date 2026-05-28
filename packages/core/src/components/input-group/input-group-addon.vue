<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { injectCentouiInputGroupRootContext, inputGroupVariants, type InputGroupAddonProps } from '.'

const rootContext = injectCentouiInputGroupRootContext()

const props = withDefaults(defineProps<InputGroupAddonProps>(), {
  as: 'div',
  position: 'left',
})
const delegatedProps = reactiveOmit(props, 'class', 'position')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { addon } = inputGroupVariants({
    addonPosition: props.position,
    size: rootContext.size,
  })

  return addon({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="input-group-addon"
    :data-position="props.position"
    v-bind="forwardedProps"
    :class="classNames"
    role="group"
  >
    <slot />
  </Primitive>
</template>
