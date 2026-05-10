<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import { computed } from 'vue'
import { type AlertCloseSlots, type AlertCloseProps, injectAlertRootContext, alertVariants } from '.'
import { default as config } from '#centoui/config'
import { Button } from '../button'
import { Icon } from '@iconify/vue'


defineSlots<AlertCloseSlots>()

const props = withDefaults(defineProps<AlertCloseProps>(), {
  asChild: true,
})

// Forward props.
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

// Inject AlertRoot's context
const alertContext = injectAlertRootContext()

// Style class string for the component.
const styles = computed(() => {
  const { close } = alertVariants({
    color: alertContext.color,
    variant: alertContext.variant,
    orientation: alertContext.orientation,
  })
  
  return close({ class: props.class })
})
</script>

<template>
  <Primitive
    data-centoui-slot="alert-close"
    v-bind="forwardedProps"
    :class="styles"
    :data-centoui-variant="alertContext.variant"
    :data-centoui-color="alertContext.color"
    :data-centoui-orientation="alertContext.orientation"
  >
    <slot>
      <Button
        size="sm"
        square
        :color="alertContext.color"
        :variant="alertContext.variant === 'solid' ? 'solid' : 'link'"
        aria-label="Close alert"
      >
        <Icon :icon="config.icons.close" />
      </Button>
    </slot>
  </Primitive>
</template>
