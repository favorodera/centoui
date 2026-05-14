<script setup lang="ts">
import {
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '#centoui/components/alert-dialog'
import { Button } from '#centoui/components/button'
import ViewContainer from '@/components/view-container.vue'
import { usePreview } from '@/composables/use-preview'

usePreview('AlertDialog', {})
</script>

<template>
  <ViewContainer class="w-lg">
    <AlertDialogRoot>

      <AlertDialogTrigger as-child>
        <Button>
          Open Alert Dialog
        </Button>
      </AlertDialogTrigger>

      <AlertDialogPortal>
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>

        </AlertDialogContent>

      </AlertDialogPortal>
    </AlertDialogRoot>
  </ViewContainer>
</template>
