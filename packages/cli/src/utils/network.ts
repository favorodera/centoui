import { GITHUB_RAW_FETCH_HEADERS } from '../constants'

/**
 * Shared network helper that centralizes fetch error-handling across the CLI.
 * @param url The URL to fetch.
 * @param context A string describing the context (e.g., "fetchThemeCSSContent") for error messages.
 * @returns The Response object if the request is successful.
 * @throws An Error if the network request fails or the server returns a non-2xx status.
 */
export async function sendNetworkRequest(url: string, context: string) {
  let response: Response
  try {
    response = await fetch(url, { headers: GITHUB_RAW_FETCH_HEADERS })
  } catch (error) {
    throw new Error(`[${context}] Network request failed: ${error}`, { cause: error })
  }

  if (!response.ok) {
    throw new Error(`[${context}] Server responded with ${response.status} ${response.statusText} (URL: ${url})`)
  }

  return response
}