/**
 * Extracts initials from a given string by taking the first character
 * of up to two words, split by a given separator.
 *
 * @param text - The input string to extract initials from.
 * @param separator - The delimiter used to split the string into words. Defaults to `' '`.
 * @returns A 1–2 character uppercase string of initials, or an empty string if input is blank.
 *
 * @example
 * getInitials('John Doe')        // → 'JD'
 * getInitials('Alice')           // → 'A'
 * getInitials('Ñoño Álvarez')    // → 'ÑÁ'  (Unicode-safe)
 * getInitials('john-doe', '-')   // → 'JD'  (custom separator)
 * getInitials('  ')              // → ''    (blank input)
 */
export function getInitials(text: string, separator = ' '): string {
  const trimmed = text.trim()

  // Return early for blank/empty input to avoid producing undefined initials
  if (!trimmed) return ''

  // Filter out empty segments caused by consecutive separators (e.g. double spaces)
  const [firstWord, secondWord] = trimmed
    .split(separator)
    .filter(Boolean)

  // Use spread + index for correct Unicode / multi-byte support
  const firstLetter = firstWord ? [...firstWord][0].toUpperCase() : ''
  const secondLetter = secondWord ? [...secondWord][0].toUpperCase() : ''

  return secondLetter ? `${firstLetter}${secondLetter}` : firstLetter
}
