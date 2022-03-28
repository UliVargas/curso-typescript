(() => {
   // Hola
  type hero = {
     name: string,
     age: number,
     powers: string[],
     getName?: ()  => string
  }

  let myCustomVariable: (string | number | hero) = 'Ulises' 
  console.log(typeof myCustomVariable)

  myCustomVariable = 20
  console.log(typeof myCustomVariable)

  myCustomVariable = {
     name: 'Ulises',
     age: 26,
     powers: ['Codear']
  }
  console.log(typeof myCustomVariable)
})()