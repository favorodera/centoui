import { describe, expect, test } from 'vitest'

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
