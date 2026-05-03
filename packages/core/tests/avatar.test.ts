import { Icon } from '@iconify/vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { axe } from 'vitest-axe'
import { h } from 'vue'
import { AvatarFallback, AvatarImage, AvatarRoot, getInitials } from '../src/components/avatar'

describe('getInitials', () => {
  test('returns two initials for full name', () => {
    expect(getInitials('John Doe')).toBe('JD')
  })

  test('returns one initial for single word', () => {
    expect(getInitials('Alice')).toBe('A')
  })

  test('handles consecutive separators', () => {
    expect(getInitials('John  Doe')).toBe('JD')
  })

  test('handles custom separator', () => {
    expect(getInitials('john-doe', '-')).toBe('JD')
  })

  test('returns empty string for blank input', () => {
    expect(getInitials('  ')).toBe('')
  })

  test('is unicode safe', () => {
    expect(getInitials('Ñoño Álvarez')).toBe('ÑÁ')
  })
})

describe('accessibility', () => {
  test('with valid src value', async () => {
    const wrapper = mount(AvatarRoot, {
      slots: {
        default: h(AvatarImage, { src: 'https://github.com/favorodera.jpg', alt: 'John Doe' }),
      },
    })

    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  test('invalid src value with text fallback', async () => {
    const wrapper = mount(AvatarRoot, {
      slots: {
        default: [
          h(AvatarImage, { src: '', alt: 'John Doe' }),
          h(AvatarFallback, {}, { default: () => 'JD' }),
        ],
      },
    })
    
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  test('invalid src value with icon fallback', async () => {
    const wrapper = mount(AvatarRoot, {
      slots: {
        default: [
          h(AvatarImage, { src: '', alt: 'John Doe' }),
          h(AvatarFallback, {}, { default: () => h(Icon, { icon: 'lucide:user' }) }),
        ],
      },
    })
    
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  test('disabled', async () => {
    const wrapper = mount(AvatarRoot, {
      props: { disabled: true },
      slots: {
        default: [
          h(AvatarImage, { src: 'https://github.com/favorodera.jpg', alt: 'John Doe' }),
          h(AvatarFallback, {}, { default: () => 'JD' }),
        ],
      },
    })
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })
})
