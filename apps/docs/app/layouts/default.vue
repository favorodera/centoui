<template>
  <div
    class="
      mx-auto grid grid-rows-[auto_1fr_auto] min-block-full inline-full relative
    "
  >
    <header
      class="bg-background sticky inset-bs-0 z-50 backdrop-blur-sm top-0 py-4 h-14 lg:h-16"
    >
      <AppNav />
    </header>

    <main
      id="main"
      tabindex="-1"
      class="outline-none"
    >
      <NuxtRouteAnnouncer />
      <NuxtLoadingIndicator />
      <slot />
    </main>
  </div>
</template>
