<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '#centoui/components/icon'
import { Label } from '#centoui/components/label'
import { Slider, sliderVariants } from '#centoui/components/slider'
import { useStory } from '@/composables/use-story'

const controls = useStory('Slider', {
  disabled: {
    default: false,
    label: 'Disabled',
    type: 'boolean',
  },
  invalid: {
    default: false,
    label: 'Invalid',
    type: 'boolean',
  },
  orientation: {
    default: sliderVariants.defaultVariants.orientation,
    label: 'Orientation',
    options: Object.keys(sliderVariants.variants.orientation),
    type: 'array',
  },
})

const volumeModelValue = ref([50])
const priceRangeModelValue = ref([
  250,
  750,
])
</script>

<template>
  <div class="flex flex-1 gap-4 flex-col items-center">
    <div
      class="flex inline-full items-center justify-between"
      :class="{
        'flex-col gap-1 text-center': controls.orientation === 'vertical',
      }"
    >
      <Label
        for="volume"
        class="font-medium"
      >
        Volume
      </Label>

      <span class="text-sm text-muted-foreground">{{ volumeModelValue[0] }}%</span>
    </div>

    <div
      class="flex gap-4 items-center"
      :class="{
        'block-full flex-col': controls.orientation === 'vertical',
        'inline-full': controls.orientation === 'horizontal',
      }"
    >
      <Icon
        v-if="controls.orientation === 'vertical'"
        icon="lucide:volume-2"
        class="text-muted-foreground"
      />

      <Icon
        v-else
        icon="lucide:volume-1"
        class="text-muted-foreground"
      />

      <Slider
        id="volume"
        v-model="volumeModelValue"
        :max="100"
        :step="1"
        :orientation="controls.orientation"
        :disabled="controls.disabled"
        :aria-invalid="controls.invalid"
      />

      <Icon
        v-if="controls.orientation === 'vertical'"
        icon="lucide:volume-1"
        class="text-muted-foreground"
      />

      <Icon
        v-else
        icon="lucide:volume-2"
        class="text-muted-foreground"
      />
    </div>
  </div>

  <div class="flex flex-1 gap-4 flex-col items-center">
    <div
      class="flex inline-full items-center justify-between"
      :class="{
        'flex-col gap-1 text-center': controls.orientation === 'vertical',
      }"
    >
      <Label
        for="price-range"
        class="font-medium"
      >
        Price Range
      </Label>

      <span class="text-sm text-muted-foreground">
        ${{ priceRangeModelValue[0] }} - ${{ priceRangeModelValue[1] }}
      </span>
    </div>

    <Slider
      id="price-range"
      v-model="priceRangeModelValue"
      :max="1000"
      :step="10"
      :orientation="controls.orientation"
      :disabled="controls.disabled"
      :min-steps-between-thumbs="1"
      :aria-invalid="controls.invalid"
    />
  </div>
</template>
