<script setup lang="ts">
import { SliderRoot, SliderRange, SliderThumb, SliderTrack, sliderVariants } from '#centoui/components/slider'
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from '#centoui/components/tooltip'
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

const singleModelValue = ref([50])
const multipleModelValue = ref([25, 75])
</script>

<template>
  <ViewContainer>
    <TooltipProvider :delay-duration="0">

      <SliderRoot
        v-model="singleModelValue"
        :max="100"
        :step="1"
        :orientation="values.orientation"
        :disabled="values.disabled"
      >

        <SliderTrack>
          <SliderRange />
        </SliderTrack>


        <TooltipRoot disable-closing-trigger>

          <TooltipTrigger as-child>
            <SliderThumb
              aria-label="Volume"
              :aria-invalid="values.invalid"
            />
          </TooltipTrigger>

          <TooltipPortal>
            <TooltipContent
              :side-offset="6"
            >
              {{ singleModelValue[0] }}

              <TooltipArrow />
            </TooltipContent>

          </TooltipPortal>

        </TooltipRoot>

      </SliderRoot>
    </TooltipProvider>

    <TooltipProvider :delay-duration="0">

      <SliderRoot
        v-model="multipleModelValue"
        :max="100"
        :step="1"
        :orientation="values.orientation"
        :disabled="values.disabled"
        :min-steps-between-thumbs="1"
      >

        <SliderTrack>
          <SliderRange />
        </SliderTrack>


        <TooltipRoot disable-closing-trigger>

          <TooltipTrigger as-child>
            <SliderThumb
              aria-label="Volume"
              :aria-invalid="values.invalid"
            />
          </TooltipTrigger>

          <TooltipPortal>
            <TooltipContent
              :side-offset="6"
            >
              {{ multipleModelValue[0] }}

              <TooltipArrow />
            </TooltipContent>

          </TooltipPortal>

        </TooltipRoot>

        <TooltipRoot disable-closing-trigger>

          <TooltipTrigger as-child>
            <SliderThumb
              aria-label="Volume"
              :aria-invalid="values.invalid"
            />
          </TooltipTrigger>

          <TooltipPortal>
            <TooltipContent
              :side-offset="6"
            >
              {{ multipleModelValue[1] }}

              <TooltipArrow />
            </TooltipContent>

          </TooltipPortal>

        </TooltipRoot>

      </SliderRoot>
    </TooltipProvider>
  </ViewContainer>
</template>
