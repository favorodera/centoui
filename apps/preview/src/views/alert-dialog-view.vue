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
import { useApp } from '@/composables/use-app'

useApp().preview.initPreview('AlertDialog', {})
</script>

<template>
  <ViewContainer>
    <AlertDialogRoot>

      <AlertDialogTrigger as-child>
        <Button>Delete project</Button>
      </AlertDialogTrigger>

      <AlertDialogPortal>
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete project?</AlertDialogTitle>
            <AlertDialogDescription>Deleting a project is permanent and cannot be recovered.</AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Delete</AlertDialogAction>
          </AlertDialogFooter>

        </AlertDialogContent>

      </AlertDialogPortal>
    </AlertDialogRoot>
  </ViewContainer>
</template>
