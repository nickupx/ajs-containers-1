import Validator from '../validator'

test('should be truthy', () => {
  expect(new Validator('Vasya').validateUsername()).toBeTruthy()
  expect(new Validator('Va123-sya').validateUsername()).toBeTruthy()
  expect(new Validator('Va_123-sya').validateUsername()).toBeTruthy()
  expect(new Validator('Va_123sya').validateUsername()).toBeTruthy()
  expect(new Validator('V').validateUsername()).toBeTruthy()
  expect(new Validator('Va').validateUsername()).toBeTruthy()
  expect(new Validator('v_ya123v-_va273sya').validateUsername()).toBeTruthy()
})

test('should be falsy', () => {
  expect(new Validator('_Vasya').validateUsername()).toBeFalsy()
  expect(new Validator('Vas1234ya').validateUsername()).toBeFalsy()
  expect(new Validator('vasya_').validateUsername()).toBeFalsy()
  expect(new Validator('1').validateUsername()).toBeFalsy()
  expect(new Validator('vasya123').validateUsername()).toBeFalsy()
  expect(new Validator('Vas1234ya122').validateUsername()).toBeFalsy()
  expect(new Validator(23).validateUsername()).toBeFalsy()
})
