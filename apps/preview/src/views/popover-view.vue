<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { Icon } from '@iconify/vue'
import {
  PopoverAnchor,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverPortal,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
  PopoverBody,
} from '#centoui/components/popover'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Popover', {
  side: {
    type: 'array',
    label: 'Side',
    options: ['top', 'bottom', 'left', 'right'],
    default: 'top',
  },
  align: {
    type: 'array',
    label: 'Align',
    options: ['start', 'center', 'end'],
    default: 'center',
  },
  
})
</script>

<template>
  <ViewContainer>
    <PopoverRoot>
      <PopoverAnchor>
        <PopoverTrigger as-child>
          <Button square>
            <Icon icon="lucide:settings-2" />
            Notifications
          </Button>
        </PopoverTrigger>
      </PopoverAnchor>

      <PopoverPortal>
        <PopoverContent
          :side="values.side as any"
          :align="values.align as any"
          class="w-72"
        >
          <PopoverHeader>
            <PopoverTitle>Notification preferences</PopoverTitle>
            <PopoverDescription>
              Quickly review your alert settings and close when done.
            </PopoverDescription>
          </PopoverHeader>

          <PopoverBody class="space-y-3 text-sm">
            <p>Alerts for new followers and messages are enabled.</p>
            <p>Updates are sent only when relevant.</p>
          </PopoverBody>

          <PopoverFooter class="flex justify-end gap-2">
            <PopoverClose as-child>
              <Button
                variant="secondary"
              >
                Close
              </Button>
            </PopoverClose>
          </PopoverFooter>

          <PopoverArrow />
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>
  </ViewContainer>
</template>
