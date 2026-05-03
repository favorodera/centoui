import * as matchers from 'vitest-axe/matchers'

import { expect } from 'vitest'
import { AxeMatchers, configureAxe } from 'vitest-axe'

// @ts-expect-error incomplete implementation
window.IntersectionObserver = class IntersectionObserver {
   
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

configureAxe({
  globalOptions: {
    rules: [{
      // Disable region rule as it doesn't work well with components rendered in isolation.
      id: 'region',
      enabled: false,
    }],
  },
})

expect.extend(matchers)

declare module 'vitest' {
  export interface Assertion extends AxeMatchers {}
  export interface AsymmetricMatchersContaining extends AxeMatchers {}
}
