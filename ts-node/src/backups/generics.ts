import { printObject, genericFunction, genericFunctionArrow } from '../generics/generics'
import { Villian, Hero } from '../interfaces'

 
// printObject(123)
// printObject(new Date())
// printObject({ a:1, b:2, c:3 })
// printObject([1, 2, 3])
// printObject('Ulises')

// console.log(genericFunction(3.1416).toFixed(2))
// console.log(genericFunctionArrow('Hola mundo'))

const deadpool = {
  name: 'Dead Pool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130
}

console.log(genericFunctionArrow<Villian>(deadpool) )