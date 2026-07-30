<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  SheetClose,
  type SheetHeaderProps,
  sheetVariants,
} from '.'
import { Button } from '../button'
import { Icon, iconsConfig } from '../icon'

const props = withDefaults(defineProps<SheetHeaderProps>(), {
  showClose: true,
})

const delegatedProps = reactiveOmit(props, 'class', 'showClose')

const forwardedProps = useForwardProps(delegatedProps)

const variants = sheetVariants()
</script>

<template>
  <Primitive
    data-slot="sheet-header"
    v-bind="forwardedProps"
    :class="variants.header({
      class: normalizeClass(props.class),
    })"
  >
    <slot />

    <SheetClose
      v-if="showClose"
      :class="variants.headerClose()"
      data-slot="sheet-header-close"
      as-child
    >
      <Button
        variant="ghost"
        size="sm"
        square
      >
        <span class="sr-only">Close sheet</span>
        <Icon :name="iconsConfig.x" />
      </Button>
    </SheetClose>
  </Primitive>
</template>
