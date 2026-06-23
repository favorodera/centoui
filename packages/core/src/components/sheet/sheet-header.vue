<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import config from '#centoui/config'
import {
  SheetClose,
  type SheetHeaderProps,
  sheetVariants,
} from '.'
import { Button } from '../button'
import { Icon } from '../icon'

const props = withDefaults(defineProps<SheetHeaderProps>(), {
  showClose: true,
})

const delegatedProps = reactiveOmit(props, 'class', 'showClose')

const forwardedProps = useForwardProps(delegatedProps)

const { header, headerClose } = sheetVariants()

const classNames = computed(() => ({
  close: headerClose(),
  header: header({
    class: props.class,
  }),
}))
</script>

<template>
  <Primitive
    data-slot="sheet-header"
    v-bind="forwardedProps"
    :class="classNames.header"
  >
    <slot />

    <SheetClose
      v-if="showClose"
      :class="classNames.close"
      data-slot="sheet-header-close"
      as-child
    >
      <Button
        variant="ghost"
        size="sm"
        square
      >
        <span class="sr-only">Close sheet</span>
        <Icon :icon="config.icons.close" />
      </Button>
    </SheetClose>
  </Primitive>
</template>
