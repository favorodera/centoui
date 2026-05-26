<div align="center">
  <h1>centoui</h1>
  <p><strong>Vue components for elegant interfaces</strong></p>
  <p>
    <a href="https://npmx.dev/package/centoui"><img src="https://img.shields.io/npm/v/centoui.svg?style=plastic&label=NPM%20Version&color=blue" alt="NPM Version"></a>
    <a href="https://npmx.dev/package/centoui"><img src="https://img.shields.io/npm/dw/centoui.svg?style=plastic&label=NPM%20Downloads&color=blue" alt="NPM Downloads"></a>
    <a href="https://npmx.dev/package/centoui"><img src="https://img.shields.io/npm/unpacked-size/centoui?style=plastic&label=NPM%20Unpacked%20Size&color=blue" alt="NPM Unpacked Size"></a>
  </p>
</div>

<br>

`centoui` is the core package of the CentoUI ecosystem. It contains every component's source code, the theme CSS, the component registry, and the `defineConfig` helper used by `centoui.config.ts`.

When you run `centoui add button`, the CLI fetches the button source files from this package's registry and copies them into your project. You get the full `.vue` file and its variant definitions — no black-box imports.

## Installation

```bash
pnpm add centoui
```

## How It Works

CentoUI follows a **copy-paste** model. Components are not consumed as runtime imports from `node_modules`. Instead, they are copied directly into your project by the [CLI](../cli), giving you full ownership and the freedom to customize.

Each component consists of:

- A **`.vue` file** — the template and script, built on [Reka UI](https://reka-ui.com/) primitives for accessibility and behavior.
- An **`index.ts` file** — variant definitions using [Tailwind Variants](https://www.tailwind-variants.org/), TypeScript prop types, and the component export.

### Version-Locked Fetching

The CLI fetches all component files, the registry index, and the theme CSS from the **exact tagged release of this package** that matches the installed `centoui-cli` version. The source base URL is pinned to `refs/tags/v<VERSION>` — never to `main` or a floating ref.

This guarantees that the files copied into your project always correspond to the same release as the CLI you ran, so there is no risk of getting a component from a newer or older version of this package.

### Theming

A single `centoui.css` file controls the entire visual identity. It defines semantic color tokens using `oklch` for both light and dark modes — `--primary`, `--secondary`, `--error`, `--surface`, and more. Changing your palette is one file edit.

```css
:root {
  --primary: oklch(0.09 0 0);
  --primary-foreground: oklch(0.98 0 0);
  /* ... */
}

.dark {
  --primary: oklch(0.98 0 0);
  --primary-foreground: oklch(0.08 0 0);
}
```

## Configuration

The `defineConfig` helper is re-exported from this package for use in `centoui.config.ts`:

```ts
import { defineConfig } from "centoui"

export default defineConfig({
  componentsDir: "./src/components/centoui",
  themeFilePath: "./src/assets/css/centoui.css",
  icons: {
    check: "lucide:check",
    close: "lucide:x",
    chevronDown: "lucide:chevron-down",
  },
})
```

## Peer Dependencies

CentoUI components rely on these runtime packages (automatically installed when you use the CLI):

- [`vue`](https://vuejs.org/) — Vue 3
- [`reka-ui`](https://reka-ui.com/) — Accessible headless primitives
- [`tailwindcss`](https://tailwindcss.com/) + [`@tailwindcss/vite`](https://tailwindcss.com/) — Styling engine
- [`tailwind-variants`](https://www.tailwind-variants.org/) — Variant-driven class composition
- [`tailwind-merge`](https://github.com/dcastil/tailwind-merge) — Class conflict resolution
- [`@vueuse/core`](https://vueuse.org/) — Composition utilities
- [`@iconify/vue`](https://iconify.design/) — Icon rendering (optional)
- [`tw-animate-css`](https://github.com/Wombosvideo/tw-animate-css) — Animation utilities

## License

[MIT](../../LICENSE) &copy; [Favour Emeka](https://github.com/favorodera)