<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { ComboboxAnchor, ComboboxCancel, ComboboxInput, ComboboxTrigger, injectComboboxRootContext, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import config from '#centoui/config'
import {
  type ComboboxInputEmits,
  type ComboboxInputProps,
  comboboxVariants,
  injectRootContext,
} from '.'
import { Icon } from '../icon'
import { inputVariants } from '../input'
import { InputGroupAddon, InputGroupRoot } from '../input-group'

defineOptions({
  inheritAttrs: false,
})

const emits = defineEmits<ComboboxInputEmits>()

const props = withDefaults(defineProps<ComboboxInputProps>(), {
  showClear: false,
})

const rootContext = injectRootContext()
const rekaRootContext = injectComboboxRootContext()

const delegatedProps = reactiveOmit(props, 'class', 'showClear')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const hasValue = computed(() => {
  const value = rekaRootContext.modelValue?.value
  const isMultipleValues = rekaRootContext.multiple?.value

  if (isMultipleValues) {
    return Array.isArray(value) && value.length > 0
  }

  return value !== undefined && value !== null && value !== ''
})

const showClear = computed(() => props.showClear && hasValue.value)

const { anchor, cancel, input, trigger } = comboboxVariants()

const { root } = inputVariants()

const classNames = computed(() => ({
  anchor: anchor({
    size: rootContext?.size,
  }),
  cancel: cancel({
    size: rootContext?.size,
  }),
  input: root({
    class: input({
      class: props.class,
    }),
    size: rootContext?.size,
  }),
  trigger: trigger({
    size: rootContext?.size,
  }),
}))
</script>

<template>
  <ComboboxAnchor
    :class="classNames.anchor"
    data-slot="combobox-anchor"
  >
    <InputGroupRoot :size="rootContext?.size">
      <ComboboxInput
        v-bind="{...$attrs,...forwardedPropsEmits}"
        data-slot="combobox-input"
        data-input-group-control
        :class="classNames.input"
      />

      <InputGroupAddon align="inline-end">
        <ComboboxCancel
          v-if="showClear"
          :class="classNames.cancel"
          data-slot="combobox-cancel"
        >
          <Icon :icon="config.icons.x" />
        </ComboboxCancel>

        <ComboboxTrigger
          v-else
          :class="classNames.trigger"
          data-slot="combobox-trigger"
        >
          <Icon :icon="config.icons.chevronDown" />
        </ComboboxTrigger>
      </InputGroupAddon>
    </InputGroupRoot>
  </ComboboxAnchor>
</template>
