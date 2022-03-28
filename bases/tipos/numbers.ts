(() => {
  let avengers: number = 10
  console.log({ avengers })
  
  const villian = 20

  if (avengers < villian) {
    console.log('Estamos en problemas')
  } else {
    console.log('Estamos salvados')
  }
  avengers = Number('123a')
  console.log({ avengers })
  
})()