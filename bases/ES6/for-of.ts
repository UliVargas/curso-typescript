(() => {
  type Avenger = {
     name: string,
     weapon: string
  }

  const ironman: Avenger = {
    name: 'Iroman',
    weapon: 'Armorsuit' 
  }

  const captainAmerica: Avenger = {
    name: 'Cap. America',
    weapon: 'shield' 
  }

  const thor: Avenger = {
    name: 'thor',
    weapon: ' Mjölnir'
  }
   
  const avengers: Avenger[] = [ ironman, thor, captainAmerica ]

  for (const avenger of avengers) {
    console.log(avenger)
  }
})()