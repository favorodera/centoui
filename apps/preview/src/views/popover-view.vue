<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { AvatarRoot, AvatarImage, AvatarFallback } from '#centoui/components/avatar'
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
          <AvatarRoot class="cursor-pointer">
            <AvatarImage
              src="https://github.com/favorodera.png"
              alt="Favour Emeka"
            />
            <AvatarFallback>FE</AvatarFallback>
          </AvatarRoot>
        </PopoverTrigger>
      </PopoverAnchor>

      <PopoverPortal>
        <PopoverContent
          :side="values.side as any"
          :align="values.align as any"
          class="w-64"
        >
          <PopoverHeader>
            <PopoverTitle>Favour Emeka</PopoverTitle>
            <PopoverDescription>favorodera@gmail.com</PopoverDescription>
          </PopoverHeader>

          <PopoverBody>
            <p class="text-sm text-muted-foreground">
              Member since Jan 2024
            </p>
          </PopoverBody>

          <PopoverFooter class="">
            <PopoverClose as-child>
              <Button
                variant="secondary"
                class="w-full"
              >
                <Icon icon="lucide:user" />
                View profile
              </Button>
            </PopoverClose>
          </PopoverFooter>

          <PopoverArrow />
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>
  </ViewContainer>
</template>
