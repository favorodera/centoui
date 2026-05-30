# Contributing to CentoUI

By participating you agree to the [Code of Conduct](./CODE_OF_CONDUCT.md).

---

## Project Overview

  CentoUI is a Vue 3 component library with a copy-paste model—components are copied into projects rather than imported from `node_modules`. This monorepo uses pnpm workspaces and Turborepo to manage three packages:

  - **core** — Component source, registry, and theme defaults
  - **cli** — CLI for initializing projects and managing components
  - **nuxt** — Official Nuxt module with auto-registration

---

## Setup

**Prerequisites:** Node.js v22+, pnpm v11+

```bash
git clone https://github.com/favorodera/centoui.git
cd centoui
pnpm install
pnpm dev
```

---

## Development Workflow

  | Command | What it does |
  |---------|-------------|
  | `pnpm dev` | Starts all packages in watch mode |
  | `pnpm build` | Production build of all packages |
  | `pnpm lint` | Lint all packages with ESLint |
  | `pnpm typecheck` | Type-check all packages |
  | `pnpm test` | Run all test suites |
  | `pnpm ready` | Full pipeline: install → lint → typecheck → build → test |

---

## Testing

- **Vitest** — Test runner
- **happy-dom** — DOM environment
- **Vue Test Utils** — Component testing utilities
- **vitest-axe** — Accessibility testing

Run tests with `pnpm test`.

---

## Pull Request

  1. `pnpm ready` — install → lint → typecheck → build → test.
  2. [Conventional Commits](https://www.conventionalcommits.org/).
  3. Update docs if behaviour changes.

---

## References

- [Documentation](https://centoui.vercel.app/)
- [Discussions](https://github.com/favorodera/centoui/discussions)
- [Core Package](./packages/core)
- [CLI Package](./packages/cli)
- [Nuxt Module](./packages/nuxt)
