/* eslint-disable max-classes-per-file */
export default class Team1 {
  constructor() {
    this.members = new Set()
  }

  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character)
    } else throw new Error('Already in the team')
  }

  addAll(...characters) {
    for (const item of characters) {
      this.members.add(item)
    }
  }

  toArray() {
    return Array.from(this.members)
  }
}

export class Character {
  constructor(name, type) {
    this.name = name
    this.type = type
  }
}

// const team = new Team()
// const gandalf = new Character('Gandalf', 'Magician')
// const shurf = new Character('Shurf', 'Assasin')
// const legolas = new Character('Legolas', 'Bowman')
// const batman = new Character('Batman', 'Bat')

// team.add(gandalf)
// team.addAll(shurf, legolas)
// console.log(team)

// team.toArray()
// team.add(batman)

// console.log(team.members)
