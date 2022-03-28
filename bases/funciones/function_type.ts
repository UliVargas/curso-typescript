(() => {
  const addNumber = (a: number, b: number): number =>   a + b
  const greet = (name: string): string => `Hola ${name}`
  const saveTheWorld = (): string =>  `El mundo está salvado`

  let myFunction: (number1: number, number2: number) => number

  myFunction = addNumber
  console.log(myFunction(1, 2))

  //* myFunction = greet
  //* console.log(myFunction('Ulises'))

  //? myFunction = saveTheWorld
  //? console.log(myFunction())
})()