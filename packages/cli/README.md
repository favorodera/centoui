<div align="center">
  <h1>centoui-cli</h1>
  <p><strong>Manage CentoUI components from the terminal.</strong></p>
  <p>
    <a href="https://npmx.dev/package/centoui-cli"><img src="https://img.shields.io/npm/v/centoui-cli.svg?style=plastic&label=NPM%20Version&color=blue" alt="NPM Version"></a>
    <a href="https://npmx.dev/package/centoui-cli"><img src="https://img.shields.io/npm/dt/centoui-cli.svg?style=plastic&label=NPM%20Downloads&color=blue" alt="NPM Downloads"></a>
    <a href="https://npmx.dev/package/centoui-cli"><img src="https://img.shields.io/npm/unpacked-size/centoui-cli?style=plastic&label=NPM%20Unpacked%20Size&color=blue" alt="NPM Unpacked Size"></a>
  </p>
</div>

<br>

`centoui-cli` is the command-line interface for [CentoUI](../core). It initializes projects, pulls component source files from the registry into your codebase, resolves dependency trees automatically, and cleans up when you remove components.

## Commands

### `centoui init`

Scaffolds a new CentoUI project in your current directory.

```bash
pnpm dlx centoui init
```

**What it does:**

1. Prompts you for a component directory (default: `src/components/centoui`) and theme CSS path (default: `src/assets/css/centoui.css`).
2. Writes `centoui.config.ts` with your chosen paths and default icon mappings.
3. Fetches and writes the `centoui.css` theme file with all light/dark color tokens.
4. Writes the `centoui-utils.ts` file with all utility functions.
5. Creates the component directory.
6. Installs global peer dependencies (`vue`, `reka-ui`, `tailwindcss`, etc.).

---

### `centoui add <component> [component...]`

Adds one or more components to your project.

```bash
pnpm dlx centoui add button accordion select
```

**What it does:**

1. Fetches the component registry from GitHub.
2. Resolves the full dependency tree — if `select` depends on `popover`, both are installed.
3. Asks before overwriting any component that already exists.
4. Downloads `.vue` and `index.ts` files for each component into your configured directory.
5. Installs any npm packages required by the added components.

---

### `centoui remove <component>`

Removes an installed component and cleans up orphaned packages.

```bash
pnpm dlx centoui remove accordion
```

**What it does:**

1. Checks that the component is actually installed.
2. Blocks removal if other installed components depend on it (e.g., you can't remove `popover` while `select` is installed).
3. Deletes the component's directory.
4. Uninstalls npm packages that are no longer needed by any remaining component.

## Version-Locked Asset Fetching

Every network request the CLI makes — the registry index, individual component files, the theme CSS, and the default config — is resolved against the **exact git tag that matches the installed version of `centoui-cli`**.

The base URL for all assets is derived directly from the CLI's own `package.json` version at build time:

```plaintext
https://raw.githubusercontent.com/favorodera/centoui/refs/tags/v<VERSION>/packages/core/src
```

This means:

- If you have `centoui-cli@1.2.3` installed, all fetched assets come from the `v1.2.3` tag of the `centoui` repository — never from `main` or any other release.
- The registry, component source files, CSS theme, and config defaults are always in sync with each other and with the CLI you are running.
- Upgrading the CLI upgrades the version tag automatically — no separate step needed.

This design eliminates an entire class of version mismatch bugs where the CLI and the component source could drift out of sync.

## Configuration

After running `centoui init`, your project root will contain a `centoui.config.ts`:

```ts
import { defineConfig } from 'centoui'

export default defineConfig({
  componentsDir: './src/components/centoui',
  icons: {
    check: 'lucide:check',
    chevronDoubleLeft: 'lucide:chevrons-left',
    chevronDoubleRight: 'lucide:chevrons-right',
    chevronDown: 'lucide:chevron-down',
    chevronLeft: 'lucide:chevron-left',
    chevronRight: 'lucide:chevron-right',
    chevronUp: 'lucide:chevron-up',
    ellipsis: 'lucide:ellipsis',
    x: 'lucide:x',
  },
  themeFilePath: './src/assets/css/centoui.css',
})
```

The `icons` map lets you swap icon libraries without touching component code. Components reference icons by their slot name (e.g., `check`, `close`), and the config resolves them to [Iconify](https://iconify.design/) IDs.

## License

[MIT](../../LICENSE) &copy; [Favour Emeka](https://github.com/favorodera)