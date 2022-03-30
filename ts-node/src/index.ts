
import {Pokemon} from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander')

// (Pokemon.prototype as any).customName = ' Picachu'

charmander.publicApi = 'https://facebook.com'
console.log(charmander)
charmander.savePokemonToDB(1)
