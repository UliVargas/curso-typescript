// Las tuplas son arrays que tiene un orden de tipo de dato, ese orden lo defines tú despues de la declaración de la variable o constante

(() => {
   const hero: [string, number, boolean] = ['Dr Strange', 100, true]
   
   hero[0] = 'Ironman'
   hero[1] = 50
   hero[2] = false
   
   console.log(hero)
})()