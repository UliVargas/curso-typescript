(() => {
  interface hero {
    name: string,
    age: number,
    powers: string[],
    getName?: ()  => string
  }

  let flash: hero  = {
    name: 'Barry All en',
    age: 24,
    powers: ['super velocidad', 'viajar en el tiempo']
  }

  let superman: hero = {
    name: 'Clark Kent',
    age: 60,
    powers: ['super velocidad'],
    getName() {
      return this.name
    }
  }

  // console.log(superman)
})()