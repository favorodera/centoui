import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { axe } from 'vitest-axe'
import { defineComponent, h, ref } from 'vue'
import { AlertActions, AlertClose, AlertDescription, AlertRoot, AlertTitle, AlertMedia } from '../src/components/alert'
import { Button } from '../src/components/button'
import { Icon } from '@iconify/vue'

const defaultSlot = [
  h(AlertMedia, {}, { default: () => h(Icon, { icon: 'lucide:bell' }) }),
  h(AlertTitle, {}, { default: () => 'Alert Title' }),
  h(AlertDescription, {}, { default: () => 'Alert description' }),
  h(AlertActions, {}, { default: () => h(Button, {}, { default: () => 'Learn more' }) }),
  h(AlertClose),
]

describe('accessibility', () => {
  test('basic usage', async () => {
    const wrapper = mount(AlertRoot, {
      slots: { default: defaultSlot },
    })
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })
})

describe('visibility', () => {
  test('toggles visibility when open prop changes', async () => {
    const wrapper = mount(AlertRoot, {
      slots: { default: defaultSlot },
    })

    expect(wrapper.find('[data-centoui-slot="alert-root"]').exists()).toBe(true)

    await wrapper.setProps({ open: false })

    expect(wrapper.find('[data-centoui-slot="alert-root"]').exists()).toBe(false)
  })

  test('toggles visibility when emits fire', async () => {
    const wrapper = mount(defineComponent(() => {
      const isAlertOpen = ref(true)

      return () => {
        return h('div', [
          !isAlertOpen.value ? h(Button, { onClick: () => { isAlertOpen.value = true } }, { default: () => 'Open alert' }) : null,

          h(AlertRoot,
            {
              'open': isAlertOpen.value,
              'onUpdate:open': value => isAlertOpen.value = value,
            },
            { default: () => defaultSlot },
          ),

        ])
      }
    }))

    await wrapper.find('[data-centoui-slot="alert-close"]').trigger('click')
    expect(wrapper.find('[data-centoui-slot="alert-root"]').exists()).toBe(false)

    await wrapper.find('[data-centoui-slot="button"]').trigger('click')
    expect(wrapper.find('[data-centoui-slot="alert-root"]').exists()).toBe(true)
  })
})
