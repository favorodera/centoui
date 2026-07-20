<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { injectRootContext, type InputGroupAddonProps, inputGroupVariants } from '.'

const props = withDefaults(defineProps<InputGroupAddonProps>(), {
  align: 'inline-start',
})

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class', 'align')

const forwardedProps = useForwardProps(delegatedProps)

const variants = inputGroupVariants()
</script>

<template>
  <Primitive
    data-slot="input-group-addon"
    :data-align="props.align"
    v-bind="forwardedProps"
    :class="variants.addon({
      addonAlignment: props.align,
      class: normalizeClass(props.class),
      size: rootContext?.size,
    })"
    role="group"
  >
    <slot />
  </Primitive>
</template>
