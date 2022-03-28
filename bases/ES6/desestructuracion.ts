(() => {

  type Avengers = {
    nick: string,
    iroman: string,
    vision: string,
    activo: boolean,
    poder: number
  }
  
   const avangers: Avengers = {
     nick: 'Samuel L. Jackson',
     iroman: 'Robert Downey Junior',
     vision: 'Paul Bettany',
     activo: true,
     poder: 1500.121343523 
   }

   const { poder, vision } = avangers
  //  console.log(poder.toFixed(2), vision.toUpperCase())


   const printAvenger = ({ vision, ...resto }: Avengers): void => {
    console.log('Impirmir avanger:', vision, resto )
   }

  //  printAvenger(avangers)
  
   const avangersArr: string[] = ['Cap. America', 'Iroman', 'Hulk']
   const [ ,iroman] = avangersArr
  
  //  console.log({ iroman  })


})()