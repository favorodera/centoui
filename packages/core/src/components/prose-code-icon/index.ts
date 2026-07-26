import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const proseCodeIconVariants = tv({
  slots: {
    root: `group/prose-code-icon`,
  },
})

// Component
export { default as ProseCodeIcon } from './prose-code-icon.vue'

// Utils
export { languageIconMap, resolveIconFromFilename } from './utils'

// Props
export interface ProseCodeIconProps {
  /**
   * The iconify or custom ID of the icon to display.
   * @see https://icon-sets.iconify.design/
   * @see https://iconify.design/docs/icon-components/vue/
   * @see https://github.com/nuxt/icon
   */
  icon?: string

  /**
   * Filename to associate the icon with
   * Used to determine the icon to display if none is provided
   */
  filename?: string

  /** Custom style class */
  class?: HTMLAttributes['class']
}
