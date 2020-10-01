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
