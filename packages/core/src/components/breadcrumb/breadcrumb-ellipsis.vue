<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type BreadcrumbEllipsisProps, breadcrumbVariants } from '.'
import { Icon, iconsConfig } from '../icon'

const props = defineProps<BreadcrumbEllipsisProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = breadcrumbVariants()
</script>

<template>
  <Primitive
    data-slot="breadcrumb-ellipsis"
    v-bind="forwardedProps"
    :class="variants.ellipsis({
      class: normalizeClass(props.class),
    })"
    role="presentation"
    aria-hidden="true"
  >
    <slot>
      <Icon :name="iconsConfig.ellipsis" />
    </slot>
  </Primitive>
</template>
