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
import { Button } from '../button'
import { Icon } from '../icon'
import { inputVariants } from '../input'
import { InputGroupAddon, InputGroupRoot } from '../input-group'

defineOptions({
  inheritAttrs: false,
})

const emits = defineEmits<ComboboxInputEmits>()

const props = withDefaults(defineProps<ComboboxInputProps>(), {
  showClear: false,
  showTrigger: true,
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

const buttonSize = computed(() => {
  switch (rootContext?.size) {
    case 'sm': {
      return '2xs'
    }
    default: {
      return 'xs'
    }
  }
})

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
    as-child
  >
    <InputGroupRoot :size="rootContext?.size">
      <ComboboxInput
        v-bind="{...$attrs,...forwardedPropsEmits}"
        data-slot="combobox-input"
        data-input-group-control
        :class="classNames.input"
      />

      <InputGroupAddon
        align="inline-end"
        as-child
      >
        <ComboboxCancel
          v-if="showClear"
          :class="classNames.cancel"
          data-slot="combobox-cancel"
          as-child
        >
          <Button
            variant="ghost"
            :size="buttonSize"
            square
          >
            <Icon :name="config.icons.x" />
          </Button>
        </ComboboxCancel>

        <ComboboxTrigger
          v-else-if="showTrigger"
          :class="classNames.trigger"
          data-slot="combobox-trigger"
          as-child
        >
          <Button
            variant="ghost"
            :size="buttonSize"
            square
          >
            <Icon :name="config.icons.chevronDown" />
          </Button>
        </ComboboxTrigger>
      </InputGroupAddon>
    </InputGroupRoot>
  </ComboboxAnchor>
</template>
