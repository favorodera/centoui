<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onMounted } from 'vue'
import { Button, buttonVariants } from '#centoui/components/button'
import { ButtonGroup, ButtonGroupSeparator, buttonGroupVariants } from '#centoui/components/button-group'
import type { PropsSchema } from '../components/props-panel.vue'
import ViewContainer from '../components/view-container.vue'
import { usePreview } from '../utils/use-preview'

const { values, setPreviewState } = usePreview()

const schema: PropsSchema = {
  orientation: {
    type: 'select',
    label: 'Orientation',
    options: Object.keys(buttonGroupVariants.variants.orientation),
    default: buttonGroupVariants.defaultVariants.orientation,
  },
  buttonVariant: {
    type: 'select',
    label: 'Button Variant',
    options: Object.keys(buttonVariants.variants.variant),
    default: buttonVariants.defaultVariants.variant,
  },
  buttonColor: {
    type: 'select',
    label: 'Button Color',
    options: Object.keys(buttonVariants.variants.color),
    default: buttonVariants.defaultVariants.color,
  },
  buttonSize: {
    type: 'select',
    label: 'Button Size',
    options: Object.keys(buttonVariants.variants.size),
    default: buttonVariants.defaultVariants.size,
  },
}

onMounted(() => {
  setPreviewState('Button Group', schema)
})
</script>

<template>
  <ViewContainer>

    <ButtonGroup :orientation="values.orientation">
      <template
        v-for="n in 2"
        :key="n"
      >
        <Button
          :variant="values.buttonVariant"
          :color="values.buttonColor"
          :size="values.buttonSize"
        >
          Button {{ n }}
        </Button>
        <ButtonGroupSeparator v-if="n < 2 && values.variant !== 'solid'" />
      </template>
    </ButtonGroup>

    <ButtonGroup :orientation="values.orientation">
      <ButtonGroup :orientation="values.orientation">
        <template
          v-for="n in 5"
          :key="n"
        >
          <Button
            :variant="values.buttonVariant"
            :color="values.buttonColor"
            :size="values.buttonSize"
          >
            {{ n }}
          </Button>
          <ButtonGroupSeparator v-if="n < 5 && values.variant !== 'solid'" />
        </template>
      </ButtonGroup>

      <ButtonGroup
        :orientation="values.orientation"
        class="w-full"
      >
        <Button
          :variant="values.buttonVariant"
          :color="values.buttonColor"
          :size="values.buttonSize"
          aria-label="Previous"
          square
        >
          <Icon icon="lucide:arrow-left" />
        </Button>

        <ButtonGroupSeparator v-if="values.variant !== 'solid'" />

        <Button
          :variant="values.buttonVariant"
          :color="values.buttonColor"
          :size="values.buttonSize"
          aria-label="Next"
          square
        >
          <Icon icon="lucide:arrow-right" />
        </Button>
      </ButtonGroup>
    </ButtonGroup>

    <ButtonGroup :orientation="values.orientation">
      <Button
        class="pointer-events-none"
        :variant="values.buttonVariant"
        :color="values.buttonColor"
        :size="values.buttonSize"
        as="div"
      >
        Text
      </Button>

      <ButtonGroupSeparator v-if="values.variant !== 'solid'" />
      
      <Button
        :variant="values.buttonVariant"
        :color="values.buttonColor"
        :size="values.buttonSize"
      >
        Button 2
      </Button>
    </ButtonGroup>

  </ViewContainer>
</template>
