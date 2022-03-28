(() => {

  type hero = {
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
    name: 'Barry All en',
    age: 24,
    powers: ['super velocidad', 'viajar en el tiempo'],
    getName() {
      return this.name 
    }
  }
 
  console.log(flash) 
  

})()