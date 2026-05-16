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
import { usePreview } from '@/composables/use-preview'

const values = usePreview('Popover', {
  side: {
    type: 'select',
    label: 'Side',
    options: ['top', 'bottom', 'left', 'right'],
    default: 'top',
  },
  align: {
    type: 'select',
    label: 'Align',
    options: ['start', 'center', 'end'],
    default: 'center',
  },
  
})
</script>

<template>
  <ViewContainer>
    <PopoverRoot>

  
      <PopoverAnchor as-child>

        <PopoverTrigger as-child>
          <Button
            square
          >
            <Icon icon="lucide:settings-2" />
            Notifications Settings
          </Button>
        </PopoverTrigger>
      </PopoverAnchor>

      <PopoverPortal>
        <PopoverContent
          :side="values.side as any"
          :align="values.align as any"
        >
          <PopoverHeader>
            <PopoverTitle>Notification settings</PopoverTitle>
            <PopoverDescription>
              Choose what you'd like to be notified about.
            </PopoverDescription>

            <PopoverClose
              variant="outline"
              class="absolute top-0 right-4"
              size="sm"
              square
            >
              <Icon icon="lucide:x" />
            </PopoverClose>
          </PopoverHeader>

          <PopoverBody
            class="
              flex flex-col gap-2 text-sm
              *:flex *:items-center *:justify-between *:gap-4
            "
          >
            <label>
              <span>New followers</span>
              <input
                type="checkbox"
                checked
              >
            </label>
            <label>
              <span>Direct messages</span>
              <input
                type="checkbox"
                checked
              >
            </label>
            <label>
              <span>Product updates</span>
              <input type="checkbox">
            </label>
          </PopoverBody>

          <PopoverFooter>
            <Button
              variant="secondary"
              size="sm"
            >
              Reset to default
            </Button>
            <Button
              variant="primary"
              size="sm"
            >
              Save Changes
            </Button>
          </PopoverFooter>

          <PopoverArrow />
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>
  </ViewContainer>
</template>
