function printToConsole(constructor: Function) {
  console.log(constructor)
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole
  } else {
    return () => {
    }
  }
}

const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}


function CheckValidPokemonId() {
  return function (target: any, propertyKey: string, desciptor: PropertyDescriptor) {
    const originalMethod = desciptor.value
    desciptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error('El Pokemon debe de estar entre el 1 y el 800')
      } else {
        originalMethod(id)
      }
    }
  }
}


function ReadOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string, desciptor: PropertyDescriptor) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this)
        return 'Ulises'
      },
      set(this, val) {
        // console.log(this)
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false
        })
      }
    }
    return descriptor
  }
}

@bloquearPrototipo
@printToConsoleConditional()
export class Pokemon {

  @ReadOnly()
  public publicApi: string = 'https://pokeaì.co'

  constructor(
    public name: string
  ) {
  }

  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon guardado en DB ${id}`)
  }
}