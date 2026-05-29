<div align="center">
  <h1>centoui</h1>
  <p><strong>Vue components for elegant interfaces</strong></p>
  <p>
    <a href="https://npmx.dev/package/centoui" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/centoui.svg?style=plastic&label=NPM%20Version&color=blue" alt="NPM Version"></a>
    <a href="https://npmx.dev/package/centoui" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dw/centoui.svg?style=plastic&label=NPM%20Downloads&color=blue" alt="NPM Downloads"></a>
    <a href="https://npmx.dev/package/centoui" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/unpacked-size/centoui?style=plastic&label=NPM%20Unpacked%20Size&color=blue" alt="NPM Unpacked Size"></a>
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

- A **`.vue` file** — the template and script, built on <a href="https://reka-ui.com/" target="_blank" rel="noopener noreferrer">Reka UI</a> primitives for accessibility and behavior.
- An **`index.ts` file** — variant definitions using <a href="https://www.tailwind-variants.org/" target="_blank" rel="noopener noreferrer">Tailwind Variants</a>, TypeScript prop types, and the component export.

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
  utilsFilePath: "./src/utils/centoui-utils.ts",
  icons: {
    check: "lucide:check",
    close: "lucide:x",
    chevronDown: "lucide:chevron-down",
  },
})
```

## Peer Dependencies

CentoUI components rely on these runtime packages (automatically installed when you use the CLI):

- <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue 3</a>
- <a href="https://reka-ui.com/" target="_blank" rel="noopener noreferrer">Reka UI</a> — Accessible headless primitives
- <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS v4 + @tailwindcss/vite</a> — Styling engine
- <a href="https://www.tailwind-variants.org/" target="_blank" rel="noopener noreferrer">Tailwind Variants</a> — Variant-driven class composition
- <a href="https://github.com/dcastil/tailwind-merge" target="_blank" rel="noopener noreferrer">Tailwind Merge</a> — Class conflict resolution
- <a href="https://vueuse.org/" target="_blank" rel="noopener noreferrer">VueUse Core</a> — Composition utilities
- <a href="https://iconify.design/" target="_blank" rel="noopener noreferrer">Iconify Vue</a> — Icon rendering (optional)
- <a href="https://github.com/Wombosvideo/tw-animate-css" target="_blank" rel="noopener noreferrer">tw-animate-css</a> — Animation utilities

## License

[MIT](../../LICENSE) &copy; <a href="https://github.com/favorodera" target="_blank" rel="noopener noreferrer">Favour Emeka</a>