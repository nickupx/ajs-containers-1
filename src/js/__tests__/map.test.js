/* eslint-disable no-unused-expressions */
import ErrorRepository from '../map'

const myErrorRepo = new ErrorRepository()
myErrorRepo.add(404, 'Page not found')
myErrorRepo.add(500, 'Server error')

test('should return description', () => {
  expect(myErrorRepo.translate(404)).toBe('Page not found')
})

test('should return unknown', () => {
  expect(myErrorRepo.translate(100)).toBe('Unknown error')
})
