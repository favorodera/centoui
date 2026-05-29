import { Comment, Fragment, Text, type Slot, type VNode } from 'vue'

/**
 * Returns `true` if a slot is absent or renders no meaningful content.
 *
 * Vue 3 slots are always functions — a truthiness check always passes even
 * when nothing is slotted in. This util inspects the actual rendered VNodes.
 *
 * Treats the following as empty:
 * - Comments (Vue's v-if/v-show anchors)
 * - Whitespace-only text nodes
 * - Fragments whose every child is itself empty
 *
 * @param slot - The slot function from `useSlots()`, e.g. `slots.default`
 * @returns `true` if the slot has no renderable content
 *
 * @example
 * ```ts
 * const slots = useSlots() or defineSlots()
 * isSlotEmpty(slots.icon) // → true | false
 * ```
 */
export function isSlotEmpty(slot: Slot | undefined): boolean {
  if (!slot) return true

  const vnodes = slot()
  if (!vnodes.length) return true

  function hasNoContent(nodes: VNode[]): boolean {
    return nodes.every((vnode) => {
      if (vnode.type === Comment) return true
      if (vnode.type === Text) return typeof vnode.children === 'string' && !vnode.children.trim()
      if (vnode.type === Fragment) return Array.isArray(vnode.children) && hasNoContent(vnode.children as VNode[])
      return false
    })
  }

  return hasNoContent(vnodes)
}
