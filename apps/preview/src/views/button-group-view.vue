<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onMounted } from 'vue'
import { Button } from '../../../../packages/core/src/components/button'
import { ButtonGroup, ButtonGroupSeparator, buttonGroupVariants } from '../../../../packages/core/src/components/button-group'
import type { PropsSchema } from '../components/props-panel.vue'
import ViewContainer from '../components/view-container.vue'
import { usePreview } from '../utils/use-preview'

const { values, setPreviewState } = usePreview()

const buttonGroupPropsSchema: PropsSchema = {
  orientation: {
    type: 'select',
    label: 'Orientation',
    options: Object.keys(buttonGroupVariants.variants.orientation),
    default: 'horizontal',
  },
}

onMounted(() => {
  setPreviewState('ButtonGroup', buttonGroupPropsSchema)
})
</script>

<template>
  <ViewContainer>

    <ButtonGroup :orientation="values.orientation">
      <Button
        variant="solid"
        size="sm"
      >
        Button 1
      </Button>
      <ButtonGroupSeparator />
      <Button
        variant="solid"
        size="sm"
      >
        Button 2
      </Button>
    </ButtonGroup>

    <ButtonGroup :orientation="values.orientation">
      <Button
        variant="soft"
        size="sm"
      >
        Button 1
      </Button>
      <ButtonGroupSeparator />
      <Button
        variant="soft"
        size="sm"
      >
        Button 2
      </Button>
    </ButtonGroup>

    <ButtonGroup>
      <ButtonGroup>
        <Button
          v-for="n in 5"
          :key="n"
          variant="subtle"
          size="sm"
        >
          {{ n }}
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button
          variant="subtle"
          size="sm"
          aria-label="Previous"
          square
        >
          <Icon icon="lucide:arrow-left" />
        </Button>
        <Button
          variant="subtle"
          size="sm"
          aria-label="Next"
          square
        >
          <Icon icon="lucide:arrow-right" />
        </Button>
      </ButtonGroup>
    </ButtonGroup>

  </ViewContainer>
</template>
