/* eslint-disable max-classes-per-file */
export default class Team {
  constructor() {
    this.members = new Set()
  }

  add(character) {
    this.members.add(character)
  }

  addAll(...characters) {
    for (const item of characters) {
      this.members.add(item)
    }
  }

  toArray() {
    this.members = Array.from(this.members)
  }
}

export class Character {
  constructor(name, type) {
    this.name = name
    this.type = type
  }
}

// const gandalf = new Character('Gandalf', 'Magician')
// const shurf = new Character('Shurf', 'Assasin')
// const legolas = new Character('Legolas', 'Bowman')

// const team = new Team()
// console.log(team)
// team.add(gandalf)
// team.addAll(shurf, legolas, gandalf)
// console.log(team)
// console.log(Array.isArray(team.members))
// team.toArray()
// console.log(team)
// team.members.push(gandalf)
// console.log(Array.isArray(team.members))
