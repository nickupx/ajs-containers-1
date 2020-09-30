import formatPhone from '../phone'

test('should format', () => {
  expect(formatPhone('8 (927) 000-00-00')).toBe('+79270000000')
  expect(formatPhone('+7 960 000 00 00')).toBe('+79600000000')
  expect(formatPhone('+86 000 000 0000')).toBe('+860000000000')
})

test('should error', () => {
  expect(() => formatPhone('8 (927) 00-00')).toThrow('Short number')
})
