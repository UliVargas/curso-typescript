// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface auto {
  encender: boolean
  velocidadMaxima: number
  acelear():void
}

const conducirBatimovil = ( auto: auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface guason {
  reir?: boolean
  comer?: boolean
  llorar?: boolean
}

const guason: guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface getCiudadanosLength {
  (ciudadanos: string[]):number
}

const ciudadGotica: getCiudadanosLength = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface PersonaInterface {
  nombre: string
  edad: number
  sexo: string
  estadoCivil: string
  imprimitBio():void
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements PersonaInterface {
  constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: string
  ) {}

  imprimitBio() {
    console.log('Esto es una breve descripción ')
  }
}