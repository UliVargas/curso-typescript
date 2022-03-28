(() => {
  let avenger: any = 123
  let exists
  let power
  
  avenger = 'Doctor Strange'
  console.log((avenger as string).charAt(0))

  avenger = 15.123455
  console.log(<number>avenger.toFixed(2))
  
  
})()