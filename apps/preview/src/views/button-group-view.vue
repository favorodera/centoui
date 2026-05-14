<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button, buttonVariants } from '#centoui/components/button'
import { ButtonGroup, ButtonGroupSeparator, buttonGroupVariants } from '#centoui/components/button-group'
import ViewContainer from '@/components/view-container.vue'
import { usePreview } from '@/composables/use-preview'

const values = usePreview('Button Group', {
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
  buttonSize: {
    type: 'select',
    label: 'Button Size',
    options: Object.keys(buttonVariants.variants.size),
    default: buttonVariants.defaultVariants.size,
  },
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
          :size="values.buttonSize"
        >
          Button {{ n }}
        </Button>
        <ButtonGroupSeparator v-if="n < 2 && values.buttonVariant !== 'outline'" />
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
            :size="values.buttonSize"
          >
            {{ n }}
          </Button>
          <ButtonGroupSeparator v-if="n < 5 && values.buttonVariant !== 'outline'" />
        </template>
      </ButtonGroup>

      <ButtonGroup
        :orientation="values.orientation"
        class="w-full"
      >
        <Button
          :variant="values.buttonVariant"
          :size="values.buttonSize"
          aria-label="Previous"
          square
        >
          <Icon icon="lucide:arrow-left" />
        </Button>

        <ButtonGroupSeparator v-if="values.buttonVariant !== 'outline'" />

        <Button
          :variant="values.buttonVariant"
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
        :size="values.buttonSize"
        as="div"
      >
        Text
      </Button>

      <ButtonGroupSeparator v-if="values.buttonVariant !== 'outline'" />
      
      <Button
        :variant="values.buttonVariant"
        :size="values.buttonSize"
      >
        Button 2
      </Button>
    </ButtonGroup>

  </ViewContainer>
</template>
