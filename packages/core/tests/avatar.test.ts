import { describe, expect, it } from 'vitest'
import { getInitials } from '../src/components/avatar'

describe('getInitials', () => {
  it('returns two initials for full name', () => {
    expect(getInitials('John Doe')).toBe('JD')
  })

  it('returns one initial for single word', () => {
    expect(getInitials('Alice')).toBe('A')
  })

  it('handles consecutive separators', () => {
    expect(getInitials('John  Doe')).toBe('JD')
  })

  it('handles custom separator', () => {
    expect(getInitials('john-doe', '-')).toBe('JD')
  })

  it('returns empty string for blank input', () => {
    expect(getInitials('  ')).toBe('')
  })

  it('is unicode safe', () => {
    expect(getInitials('Ñoño Álvarez')).toBe('ÑÁ')
  })
})
