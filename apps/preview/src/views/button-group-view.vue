<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button } from '#centoui/components/button'
import { ButtonGroup, ButtonGroupSeparator, buttonGroupVariants } from '#centoui/components/button-group'
import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
} from '#centoui/components/select'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Button Group', {
  orientation: {
    type: 'array',
    label: 'Orientation',
    options: Object.keys(buttonGroupVariants.variants.orientation),
    default: buttonGroupVariants.defaultVariants.orientation,
  },
})
</script>

<template>
  <ViewContainer>

    <ButtonGroup :orientation="values.orientation">
      <template
        v-for="index in 2"
        :key="index"
      >
        <Button>
          Button {{ index }}
        </Button>
        <ButtonGroupSeparator v-if="index < 2" />
      </template>
    </ButtonGroup>

    <ButtonGroup :orientation="values.orientation">
      <ButtonGroup :orientation="values.orientation">
        <template
          v-for="index in 5"
          :key="index"
        >
          <Button
            variant="secondary"
          >
            {{ index }}
          </Button>
          <ButtonGroupSeparator v-if="index < 5 " />
        </template>
      </ButtonGroup>

      <ButtonGroup
        :orientation="values.orientation"
        class="w-full"
      >
        <Button
          variant="secondary"
          aria-label="Previous"
          square
        >
          <Icon icon="lucide:arrow-left" />
        </Button>

        <ButtonGroupSeparator />

        <Button
          variant="secondary"
          aria-label="Next"
          square
        >
          <Icon icon="lucide:arrow-right" />
        </Button>
      </ButtonGroup>
    </ButtonGroup>

    <ButtonGroup :orientation="values.orientation">
      <Button
        variant="outline"
        as="div"
      >
        Button
      </Button>

      
      <SelectRoot>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit..." />
          <SelectIcon />
        </SelectTrigger>

        <SelectPortal>
          <SelectContent>
            <SelectViewport>

              <SelectItem
                v-for="(fruit, index) in ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple']"
                :key="index"
                :value="fruit"
              >
                <SelectItemText>
                  {{ fruit }}
                </SelectItemText>
                <SelectItemIndicator />
              </SelectItem>

            </SelectViewport>

          </SelectContent>
        </SelectPortal>
      </SelectRoot>
    </ButtonGroup>

  </ViewContainer>
</template>
