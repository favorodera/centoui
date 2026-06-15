import { version } from '../package.json'

/** CentoUI current package version, sourced directly from package.json. */
export const VERSION = version

/** File name for the user-side CentoUI config (created by `centoui init`). */
export const CONFIG_FILE_NAME = 'centoui.config.ts'

/**
 * Base URL for the CentoUI core package source tree on GitHub.
 * Every other URL in this file is derived from this one.
 *
 * The path ends at `src/` so that registry and component paths from the
 * registry (e.g. `components/button/button.vue`) can be appended directly.
 */
export const BASE_URL = `https://raw.githubusercontent.com/favorodera/centoui/refs/tags/v${VERSION}/packages/core/src`

/**
 * HTTP headers required when fetching raw content from the GitHub API.
 * These ensure we get the raw file bytes, not GitHub's HTML wrapper.
 */
export const GITHUB_RAW_FETCH_HEADERS: Record<string, string> = {
  'Accept': 'application/vnd.github.raw+json',
  'X-GitHub-Api-Version': '2026-03-10',
}
