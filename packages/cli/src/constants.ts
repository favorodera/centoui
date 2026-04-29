import { version } from '../package.json'

/** CentoUI current package version */
export const VERSION = version

/** CentoUI config file name */
export const CONFIG_FILE_NAME = 'centoui.config.ts'

/** CentoUI registry file name */
export const REGISTRY_FILE_NAME = 'index.json'

/** CentoUI core base API URL */
export const BASE_URL = `https://raw.githubusercontent.com/favorodera/centoui/refs/tags/v${VERSION}/packages/core/src`

/** CentoUI registry files URL */
export const REGISTRY_URL = `${BASE_URL}/registry`

/** CentoUI theme file URL */
export const THEME_URL = `${BASE_URL}/css/centoui.css`

/** GitHub API fetch headers */
export const FETCH_HEADERS = {
  'Accept': 'application/vnd.github.raw+json',
  'X-GitHub-Api-Version': '2026-03-10',
}
