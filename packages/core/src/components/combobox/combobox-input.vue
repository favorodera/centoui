<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { ComboboxAnchor, ComboboxCancel, ComboboxInput, useForwardPropsEmits } from 'reka-ui'
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

const props = defineProps<ComboboxInputProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { anchor, cancel, input } = comboboxVariants()

const { root } = inputVariants()

const classNames = computed(() => ({
  anchor: anchor(),
  cancel: cancel(),
  input: root({
    class: input({
      class: props.class,
    }),
    size: rootContext?.size,
  }),
}))
</script>

<template>
  <ComboboxAnchor :class="classNames.anchor">
    <InputGroupRoot>
      <ComboboxInput
        v-bind="{...forwardedPropsEmits,...$attrs}"
        data-slot="input-group-control"
        :class="classNames.input"
      />

      <InputGroupAddon align="inline-end">
        <ComboboxCancel :class="classNames.cancel" />
        <Icon :icon="config.icons.chevronDown" />
      </InputGroupAddon>
    </InputGroupRoot>
  </ComboboxAnchor>
</template>
