# centoui-cli

[![npm version](https://img.shields.io/npm/v/centoui-cli.svg?style=flat-square)](https://www.npmjs.com/package/centoui-cli)
[![npm downloads](https://img.shields.io/npm/dm/centoui-cli.svg?style=flat-square)](https://www.npmjs.com/package/centoui-cli)
[![license](https://img.shields.io/github/license/favorodera/centoui.svg?style=flat-square)](https://github.com/favorodera/centoui/blob/main/LICENSE)

**CentoUI CLI: Manage your components with ease.**

`centoui-cli` is the official command-line interface for [CentoUI](https://github.com/favorodera/centoui). It allows you to initialize CentoUI in your project, add new components, and manage their versions directly from your terminal.

## Commands

- **`init`**: Set up a new CentoUI project (generates `centoui.config.ts` and `tokens.css`).
- **`add [component]`**: Add specific components to your project. Peer dependencies install automatically.
- **`remove [component]`**: Cleanly remove components and their dependencies.

## Usage

```bash
# Initialize CentoUI in your project
npx centoui init

# Add components
npx centoui add button dialog input select
```

## Configuration

The CLI generates a `centoui.config.ts` file in your root directory. You can customize the component directory, theme directory, and utility directory here.

```ts
import { defineConfig } from "centoui"

export default defineConfig({
  version: "1.0.0",
  componentsDir: "./src/components/centoui",
  themeFilePath: "./src/assets/css/centoui.css",
  icons: {
    check: "lucide:check",
    close: "lucide:x",
    menu: "lucide:menu",
  },
})
```

## License

[MIT](../../LICENSE) &copy; [Favour Emeka](https://github.com/favorodera)
