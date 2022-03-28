(() => {
  class Apocalipsis {
    static instance: Apocalipsis
    private constructor(
      public name: string
    ) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el único')
      }
      return Apocalipsis.instance
    }

    changeName(newName: string): void {
      this.name = newName
    }
  }

  // const apocalipsis =  new Apocalipsis('Soy apocalipsis... el unico')
  const apocalipsis1 = Apocalipsis.callApocalipsis()
  apocalipsis1.changeName('Xavier')
  // console.log(apocalipsis1)
})()