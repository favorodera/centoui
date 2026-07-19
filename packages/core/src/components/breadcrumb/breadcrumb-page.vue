<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type BreadcrumbPageProps, breadcrumbVariants } from '.'

const props = withDefaults(defineProps<BreadcrumbPageProps>(), {
  as: 'span',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = breadcrumbVariants()
</script>

<template>
  <Primitive
    data-slot="breadcrumb-page"
    v-bind="forwardedProps"
    :class="variants.page({
      class: normalizeClass(props.class),
    })"
    role="link"
    aria-disabled="true"
    aria-current="page"
  >
    <slot />
  </Primitive>
</template>
