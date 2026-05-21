<template>
  <div
    class="
      scrollbar-thumb-rounded flex
      max-h-[calc(100dvh-(--spacing(11))-(--spacing(3)))] w-full max-w-3xl
      scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent
      flex-wrap items-center justify-center gap-8 overflow-auto bg-background
      p-3
    "
  >
    <slot />
  </div>
</template>
