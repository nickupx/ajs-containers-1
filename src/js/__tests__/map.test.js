/* eslint-disable no-unused-expressions */
import ErrorRepository from '../set'

const myErrorRepo = new ErrorRepository()
myErrorRepo.add(404, 'Page not found')
myErrorRepo.add(500, 'Server error')

test('should return code', () => {
  expect(() => { myErrorRepo.translate(404) }).toBe('Page not found')
})