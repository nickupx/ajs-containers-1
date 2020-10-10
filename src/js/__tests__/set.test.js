/* eslint-disable no-unused-expressions */
import Team, { Character } from '../set'

const team = new Team()
const gandalf = new Character('Gandalf', 'Magician')
const shurf = new Character('Shurf', 'Assasin')
const legolas = new Character('Legolas', 'Bowman')
const batman = new Character('Batman', 'Bat')

test('should add', () => {
  team.add(gandalf)
  expect(() => { team.members.has(gandalf) }).toBeTruthy
})

test('should throw error', () => {
  expect(() => { team.add(gandalf) }).toThrowError('Already in the team')
})

test('should add multiple', () => {
  team.addAll(shurf, legolas)
  expect(() => { team.members.has(shurf) }).toBeTruthy
  expect(() => { team.members.has(legolas) }).toBeTruthy
  expect(() => { team.members.has(batman) }).toBeFalsy
})

test('should convert to array', () => {
  team.toArray()
  expect(() => { Array.isArray(team.members) }).toBeTruthy
})
