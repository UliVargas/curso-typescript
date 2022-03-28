(() => {
  interface Xmen {
    realName: string
    mutantPower(id: number): string
  }

  interface Human {
    name: string
    age: number
  }

  class Mutant implements Xmen, Human {
    constructor(
      public age: number,
      public name: string,
      public realName: string
    ) {}

    mutantPower(id: number) {
      return `${this.name} ${this.realName}`
    }
  }
})()