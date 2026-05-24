<script setup lang="ts">
import {
  BreadcrumbRoot,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '#centoui/components/breadcrumb'
import { Icon } from '#centoui/components/icon'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

useApp().preview.initPreview('Breadcrumb', {})
</script>

<template>
  <ViewContainer>
    <BreadcrumbRoot>
      <BreadcrumbList>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <Icon
              icon="lucide:folder-open"
              class="text-warning"
            />
            centoui
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <Icon
              icon="lucide:folder-open"
              class="text-warning"
            />
            breadcrumb
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage>
            <Icon
              icon="lucide:file-code"
              class="text-info"
            />
            index.ts
          </BreadcrumbPage>
        </BreadcrumbItem>

      </BreadcrumbList>
    </BreadcrumbRoot>
  </ViewContainer>
</template>
