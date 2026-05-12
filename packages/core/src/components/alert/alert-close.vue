<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { type AlertCloseProps, type AlertCloseSlots, injectCentouiAlertRootContext } from '.'
import { default as config } from '#centoui/config'
import { Button } from '../button'
import { Icon } from '@iconify/vue'

const rootContext = injectCentouiAlertRootContext()

defineSlots<AlertCloseSlots>()

const props = withDefaults(defineProps<AlertCloseProps>(), {
  asChild: true,
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <Primitive
    data-centoui-slot="alert-close"
    v-bind="forwardedProps"
    :class="rootContext.styles.close({ class: props.class })"
    :data-centoui-status="rootContext.status"
    :data-centoui-orientation="rootContext.orientation"
    :data-centoui-open="rootContext.open"
    @click="rootContext.onClose()"
  >
    <slot>
      <Button
        size="sm"
        square
        :color="rootContext.status === 'neutral' ? 'primary' : rootContext.status"
        aria-label="Close alert"
        variant="link"
      >
        <Icon :icon="config.icons.close" />
      </Button>
    </slot>
  </Primitive>
</template>
