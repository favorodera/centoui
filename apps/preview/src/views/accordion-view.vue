<script setup lang="ts">
import { onMounted } from 'vue'
import { AccordionRoot, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from '#centoui/components/accordion'
import { usePreview } from '../utils/use-preview'
import type { PropsSchema } from '../components/props-panel.vue'
import ViewContainer from '../components/view-container.vue'

const { values, setPreviewState } = usePreview()

const schema: PropsSchema = {
  disabled: {
    type: 'boolean',
    label: 'Disabled',
    default: false,
  },
}

onMounted(() => {
  setPreviewState('Accordion', schema)
})
</script>

<template>
  <ViewContainer class="w-lg">
    <AccordionRoot
      type="single"
      collapsible
      :disabled="values.disabled"
      default-value="item-1"
    >

      <AccordionItem value="item-1">
        <AccordionHeader disabled>
          <AccordionTrigger>Product Information</AccordionTrigger>
        </AccordionHeader>
        
        <AccordionContent>
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p class="mt-2">
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionHeader>
          <AccordionTrigger>Shipping Details</AccordionTrigger>
        </AccordionHeader>
        
        <AccordionContent>
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p class="mt-2">
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem>

    </AccordionRoot>
  </ViewContainer>
</template>
