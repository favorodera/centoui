import { BASE_URL, GITHUB_RAW_FETCH_HEADERS } from '../constants'

/**
 * Sends a network request to the CentoUI core package on GitHub.
 * @param path The relative path to the file from the base URL (i.e. core/src).
 * @param responseFormat The format of the response.
 * @param init The request options.
 * @returns The response from the server.
 * @throws An Error if the network request fails or the server returns a non-2xx status.
 */
export async function sendNetworkRequest<TResponse = string>(path: string, responseFormat: 'json' | 'text' = 'text', init?: RequestInit) {
  const url = `${BASE_URL}${path}`

  const resolvedInit: RequestInit = {
    ...init,
    headers: {
      ...GITHUB_RAW_FETCH_HEADERS,
      ...init?.headers,
    },
  }

  let response: Response

  try {
    response = await fetch(url, resolvedInit)
  } catch (error) {
    throw new Error('Network request failed', { cause: error })
  }

  if (!response.ok) {
    throw new Error(`Server responded with ${response.status} ${response.statusText} (URL: ${url})`)
  }

  let resolvedResponse: TResponse

  switch (responseFormat) {
    case 'json': {
      resolvedResponse = await response.json() as TResponse
      break
    }
    case 'text': {
      resolvedResponse = await response.text() as TResponse
      break
    }
  }

  return resolvedResponse
}
