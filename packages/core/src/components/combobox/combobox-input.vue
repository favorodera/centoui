<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { ComboboxAnchor, ComboboxInput, useForwardPropsEmits } from 'reka-ui'
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

const { anchor, input } = comboboxVariants()

const { root } = inputVariants()

const classNames = computed(() => ({
  anchor: anchor(),
  input: root({
    class: input({
      class: props.class,
    }),
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
        v-bind="{...forwardedPropsEmits,...$attrs}"
        data-slot="combobox-input"
        data-input-group-control
        :class="classNames.input"
      />

      <InputGroupAddon align="inline-end">
        <Icon :icon="config.icons.chevronDown" />
      </InputGroupAddon>
    </InputGroupRoot>
  </ComboboxAnchor>
</template>
