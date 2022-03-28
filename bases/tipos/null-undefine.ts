// Si quieres declarar una variable que necesites que sea undefined o null, pero, posteriormente le quieres asignar un valor, es mejor especificarlo en la definición

(() => {
  let nada: (undefined | number) = undefined
  let nada2: (undefined | number) = 10
  console.log({ nada, nada2 })
})()