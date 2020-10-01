export default class ErrorRepository {
  constructor() {
    this.errors = new Map()
  }

  add(code, value) {
    this.errors.set(code, value)
  }

  translate(code) {
    return this.errors.has(code) ? this.errors.get(code) : 'Unknown error'
  }
}
