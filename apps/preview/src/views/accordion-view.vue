<script setup lang="ts">
import { AccordionRoot, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from '#centoui/components/accordion'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Accordion', {
  disabled: {
    type: 'boolean',
    label: 'Disabled',
    default: false,
  },
})
</script>

<template>
  <ViewContainer>
    <AccordionRoot
      type="single"
      collapsible
      :disabled="values.disabled"
      default-value="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionHeader>
          <AccordionTrigger>Getting Started</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <p>
            Start by installing the package with your preferred package manager.
            Follow the setup guide to import the components and configure your
            application layout.
          </p>
          <p class="mt-2">
            Once installed, you can customize the accordion behavior and styles
            to fit your design system while keeping interactions accessible and
            responsive.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionHeader>
          <AccordionTrigger>Best Practices</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <p>
            Use clear headings and concise descriptions for each accordion item.
            Keep content focused to help users scan sections quickly and find
            relevant information.
          </p>
          <p class="mt-2">
            Avoid overcrowding accordion panels, and reserve nested content for
            supplementary details that enhance the main message.
          </p>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  </ViewContainer>
</template>
