# centoui-cli

[![npm version](https://img.shields.io/npm/v/centoui-cli.svg?style=plastic)](https://npmx.dev/package/centoui-cli)
[![npm downloads](https://img.shields.io/npm/dm/centoui-cli.svg?style=plastic)](https://npmx.dev/package/centoui-cli)
[![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/centoui-cli?style=plastic)](https://npmx.dev/package/centoui-cli)

**Manage CentoUI Components with Ease.**

`centoui-cli` is the official command-line interface for [CentoUI](../core). It allows you to initialize CentoUI in your project, add new components, and manage their versions directly from your terminal.

## Commands

- **`init`**: Set up a new CentoUI project (generates `centoui.config.ts` and `centoui.css`).
- **`add [component]`**: Add specific components to your project. Peer dependencies install automatically.
- **`remove [component]`**: Cleanly remove components and their dependencies.

## Usage

```bash
# Initialize CentoUI in your project
pnpm dlx centoui init

# Add components
pnpm dlx centoui add button dialog input select
```

## Configuration

The CLI generates a `centoui.config.ts` file in your root directory. You can customize the component directory, theme directory, and utility directory here.

```ts
import { defineConfig } from "centoui"

export default defineConfig({
  componentsDir: "./src/components/centoui",
  themeFilePath: "./src/assets/css/centoui.css",
  icons: {
    check: "lucide:check",
    close: "lucide:x",
    menu: "lucide:menu",
  },
})
```
