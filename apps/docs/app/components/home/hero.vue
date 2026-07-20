<template>
  <section
    class="
      px-4 flex flex-col items-center gap-2 py-8 text-center

      sm:px-6

      md:px-8 md:py-16

      lg:px-12 lg:py-20

      xl:gap-4
    "
  >
    <h1
      class="
        text-3xl/tight font-semibold tracking-tight text-balance text-primary
        max-inline-4xl

        lg:leading-[1.1] lg:font-semibold

        xl:text-5xl xl:tracking-tighter
      "
    >
      Vue Components for Elegant Interfaces
    </h1>

    <p
      class="
        max-inline-4xl text-base text-balance text-muted-foreground

        sm:text-lg
      "
    >
      Ship accessible, type-safe interfaces faster. Every component is production-ready, and built for real-world applications.
    </p>

    <div class="flex flex-wrap items-center justify-center gap-3">
      <Button
        variant="primary"
      >
        Get Started
        <Icon name="lucide:arrow-right" />
      </Button>

      <Button
        variant="ghost"
      >
        View Components
      </Button>
    </div>
  </section>
</template>
