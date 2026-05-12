<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import { computed, reactive, toRef } from 'vue'
import { type AlertRootSlots, type AlertRootProps, alertVariants, provideCentouiAlertRootContext, type AlertRootEmits } from '.'

defineEmits<AlertRootEmits>()

defineSlots<AlertRootSlots>()

const props = withDefaults(defineProps<AlertRootProps>(), {
  as: 'div',
  status: 'neutral',
  orientation: 'vertical',
})
const delegatedProps = reactiveOmit(
  props,
  'class',
  'orientation',
  'status',
  'open',
)
const forwardedProps = useForwardProps(delegatedProps)

const openModel = defineModel<boolean>('open', { default: true })

const styles = computed(() => alertVariants({
  status: props.status,
  orientation: props.orientation,
}))

provideCentouiAlertRootContext(reactive({
  styles,
  status: toRef(props, 'status'),
  orientation: toRef(props, 'orientation'),
  open: openModel,
  onClose: () => openModel.value = false,
}))
</script>

<template>
  <Primitive
    v-if="openModel"
    data-centoui-slot="alert-root"
    :data-centoui-status="status"
    :data-centoui-orientation="orientation"
    :data-centoui-open="openModel"
    role="alert"
    v-bind="forwardedProps"
    :class="styles.root({ class: props.class })"
  >
    <slot />
  </Primitive>
</template>
