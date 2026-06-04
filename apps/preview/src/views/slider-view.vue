<script setup lang="ts">
import { Slider, sliderVariants } from '#centoui/components/slider'
import { Label } from '#centoui/components/label'
import { Icon } from '#centoui/components/icon'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'
import { ref } from 'vue'

const values = useApp().preview.initPreview('Slider', {
  orientation: {
    type: 'array',
    label: 'Orientation',
    options: Object.keys(sliderVariants.variants.orientation),
    default: sliderVariants.defaultVariants.orientation,
  },
  disabled: {
    type: 'boolean',
    label: 'Disabled',
    default: false,
  },
  invalid: {
    type: 'boolean',
    label: 'Invalid',
    default: false,
  },
})

const volumeModelValue = ref([50])
const priceRangeModelValue = ref([250, 750])
</script>

<template>
  <ViewContainer>
    <div
      class="flex flex-1"
      :class="values.orientation === 'vertical' ? 'flex-col items-center gap-4' : `
        flex-col gap-4
      `"
    >
      <div
        class="flex w-full"
        :class="values.orientation === 'vertical' ? `
          flex-col items-center gap-1 text-center
        ` : `items-center justify-between`"
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
        class="flex"
        :class="values.orientation === 'vertical' ? `
          h-full flex-col items-center gap-4
        ` : `w-full items-center gap-4`"
      >
        <Icon
          v-if="values.orientation === 'vertical'"
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
          :orientation="values.orientation as any"
          :disabled="values.disabled"
          :aria-invalid="values.invalid"
        />
        <Icon
          v-if="values.orientation === 'vertical'"
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

    <div
      class="flex flex-1"
      :class="values.orientation === 'vertical' ? 'flex-col items-center gap-4' : `
        flex-col gap-4
      `"
    >
      <div
        class="flex w-full"
        :class="values.orientation === 'vertical' ? `
          flex-col items-center gap-1 text-center
        ` : `items-center justify-between`"
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
        :orientation="values.orientation as any"
        :disabled="values.disabled"
        :min-steps-between-thumbs="1"
        :aria-invalid="values.invalid"
      />
    </div>
  </ViewContainer>
</template>
