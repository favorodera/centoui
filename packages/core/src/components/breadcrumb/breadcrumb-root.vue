<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type BreadcrumbRootProps, breadcrumbVariants } from '.'

const props = withDefaults(defineProps<BreadcrumbRootProps>(), {
  as: 'nav',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = breadcrumbVariants()
</script>

<template>
  <Primitive
    data-slot="breadcrumb-root"
    v-bind="forwardedProps"
    :class="variants.root({
      class: normalizeClass(props.class),
    })"
    aria-label="breadcrumb"
  >
    <slot />
  </Primitive>
</template>
