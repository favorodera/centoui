<script setup lang="ts">
import { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger } from '#centoui/components/accordion'
import { Icon } from '#centoui/components/icon'
import { Separator } from '#centoui/components/separator'
import { useStory } from '@/composables/use-story'

const controls = useStory('Accordion', {
  disabled: {
    default: false,
    label: 'Disabled',
    type: 'boolean',
  },
})
</script>

<template>
  <AccordionRoot
    type="single"
    collapsible
    :disabled="controls.disabled"
    default-value="item-1"
  >
    <AccordionItem
      v-slot="{open}"
      value="item-1"
    >
      <AccordionTrigger>
        Getting Started

        <Icon
          icon="lucide:chevron-down"
          class="transition-transform"
          :class="{
            'rotate-180':open
          }"
        />
      </AccordionTrigger>

      <AccordionContent>
        <p>
          Start by installing the package with your preferred package manager.
          Follow the setup guide to import the components and configure your
          application layout.
        </p>

        <p>
          Once installed, you can customize the accordion behavior and styles
          to fit your design system while keeping interactions accessible and
          responsive.
        </p>
      </AccordionContent>
    </AccordionItem>

    <Separator />

    <AccordionItem
      v-slot="{open}"
      value="item-2"
    >
      <AccordionTrigger>
        Best Practices
        <Icon
          icon="lucide:chevron-down"
          class="transition-transform"
          :class="{
            'rotate-180':open
          }"
        />
      </AccordionTrigger>

      <AccordionContent>
        <p>
          Use clear headings and concise descriptions for each accordion item.
          Keep content focused to help users scan sections quickly and find
          relevant information.
        </p>

        <p>
          Avoid overcrowding accordion panels, and reserve nested content for
          supplementary details that enhance the main message.
        </p>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
