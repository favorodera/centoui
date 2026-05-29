<div align="center">
  <h1>CentoUI</h1>
  <p><strong>Vue components for elegant interfaces</strong></p>
  <p>
    <a href="https://github.com/favorodera/centoui/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/license/favorodera/centoui.svg?style=plastic&label=License&color=blue" alt="License"></a>
    <a href="https://github.com/favorodera/centoui/stargazers" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/stars/favorodera/centoui.svg?style=plastic&label=Stars&color=blue" alt="GitHub Stars"></a>
    <a href="https://centoui.vercel.app/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-Documentation-blue?style=plastic" alt="CentoUI Documentation"></a>
  </p>
  <p>
    <a href="https://codewiki.google/github.com/favorodera/centoui" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-Ask%20Code%20Wiki-blue?style=plastic&logo=google-gemini&logoColor=white" alt="Ask Code Wiki" target="_blank" rel="noopener noreferrer"></a>
    <a href="https://deepwiki.com/favorodera/centoui" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-Ask%20Devin-blue?style=plastic&logo=windsurf&logoColor=white" alt="Ask Devin"></a>
  </p>
  <p>
    <a href="./packages/core"><img src="https://img.shields.io/badge/Core-blue?style=plastic&logo=vuedotjs&logoColor=white" alt="CentoUI Core"></a>
    <a href="./packages/cli"><img src="https://img.shields.io/badge/CLI-blue?style=plastic&logo=typescript&logoColor=white" alt="CentoUI CLI"></a>
    <a href="./packages/nuxt"><img src="https://img.shields.io/badge/Nuxt%20Module-blue?style=plastic&logo=nuxt&logoColor=white" alt="CentoUI Nuxt Module"></a>
  </p>
</div>

<br>

CentoUI is a copy-paste component library for Vue 3. You run a CLI command, the component source lands in your project, and you own every line. Styling is handled by a single CSS theme file powered by Tailwind CSS v4, so changing your entire look is one file edit away.

Under the hood, components are built on <a href="https://reka-ui.com/" target="_blank" rel="noopener noreferrer">Reka UI </a> for accessibility and behavior, <a href="https://www.tailwind-variants.org/" target="_blank" rel="noopener noreferrer">Tailwind Variants</a> for variant-driven styling, and TypeScript for end-to-end type safety.

## Features

- **You own the code** — Components are copied into your project, not imported from `node_modules`. Customize freely.
- **One CSS file, full control** — A single `centoui.css` theme file defines every color token. Light mode, dark mode, and custom palettes all live here.
- **CLI-first workflow** — `centoui init` scaffolds your project. `centoui add button accordion` pulls components and installs their dependencies. `centoui remove` cleans up.
- **Automatic dependency resolution** — Adding a component that depends on another component? The CLI resolves the full tree and installs everything.
- **Version-locked assets** — The CLI always fetches component source files, the registry, and the theme CSS from the exact release of `centoui` that matches its own installed version. You never get components from a different release than what you installed.
- **Nuxt-ready** — Drop in the [`centoui-nuxt`](./packages/nuxt) module for auto-registration, optional prefixing, and zero config.

## Monorepo Structure

This monorepo is managed with <a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">pnpm</a> workspaces and <a href="https://turbo.build/repo" target="_blank" rel="noopener noreferrer">Turborepo</a>.

| Path | Package | Description |
|------|---------|-------------|
| [`packages/core`](./packages/core) | `centoui` | Component source, registry, and theme defaults |
| [`packages/cli`](./packages/cli) | `centoui-cli` | CLI for initializing projects and managing components |
| [`packages/nuxt`](./packages/nuxt) | `centoui-nuxt` | Official Nuxt module with auto-registration |
| [`apps/preview`](./apps/preview) | `preview` | Component viewer for visual development |
| [`playgrounds/vue`](./playgrounds/vue) | `vue-playground` | Vue development sandbox |
| [`playgrounds/nuxt`](./playgrounds/nuxt) | `nuxt-playground` | Nuxt development sandbox |

## Development

### Prerequisites

- <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> v22 or later
- <a href="https://pnpm.io/installation" target="_blank" rel="noopener noreferrer">pnpm</a> v11 or later

### Getting Started

```bash
# Install all dependencies
pnpm install

# Start all packages in watch mode
pnpm dev

# Build everything
pnpm build

# Lint, typecheck, build, and test in one go
pnpm ready
```

### Useful Commands

| Command | What it does |
|---------|-------------|
| `pnpm dev` | Starts all packages in watch/dev mode via Turborepo |
| `pnpm build` | Production build of all packages |
| `pnpm lint` | Lint all packages with ESLint |
| `pnpm typecheck` | Type-check all packages with `vue-tsc` / `tsc` |
| `pnpm test` | Run all test suites with Vitest |
| `pnpm ready` | Full pipeline: install → lint → typecheck → build → test |

## License

[MIT](./LICENSE) &copy; <a href="https://github.com/favorodera" target="_blank" rel="noopener noreferrer">Favour Emeka</a>