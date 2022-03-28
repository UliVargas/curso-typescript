// El tipo de dato never se utiliza en funciones que necesitas regresar un error y que la función ya no siga ejecutandoce. Si necesitas que la función tenga la posibilidad de regresar un dato satisfactorio, puedes especificarlo en la declaración de la función.

(() => {
  const error = (message: string): (never | number) => {
    
    if(false) {
      throw new Error(message)
    }

    return 1
  }

  error('Auxilio!')
  console.log('Hola')
  
})()