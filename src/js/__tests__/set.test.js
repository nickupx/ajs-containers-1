/* eslint-disable no-unused-expressions */
import Team, { Character } from '../set'

const team = new Team()
const gandalf = new Character('Gandalf', 'Magician')
const shurf = new Character('Shurf', 'Assasin')
const legolas = new Character('Legolas', 'Bowman')

test('should add', () => {
  team.add(gandalf)
  expect(() => { team.has(gandalf) }).toBeTruthy
})

test('should add multiple', () => {
  team.add(shurf, legolas)
  expect(() => { team.has(shurf) }).toBeTruthy
  expect(() => { team.has(legolas) }).toBeTruthy
})

test('should convert to array', () => {
  team.toArray()
  expect(() => { Array.isArray(team.members) }).toBeTruthy
})
