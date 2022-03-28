(() =>{

  // No se recomienda hacer metodos dentro de una interface, para eso es mejor hacerlo en una clase

  interface Client {
    name: string
    age?: number
    address: Address
    getFullAdress(id: string): string
  }

  interface Address {
    id: number
    zip: string
    city: string
  }

  const client: Client = {
    name: 'Ulises',
    age: 26,
    address: {
      id: 255,
      zip: 'KY2 SUD',
      city: 'Ottawa'
    },
    getFullAdress(id: string): string {
      return this.address.city
    }
  }

  const client2: Client = {
    name: 'Melisa',
    age: 30,
    address: {
      city: 'Toronto',
      zip: 'K2S 123',
      id: 120
    },
    getFullAdress(id: string): string {
      return this.address.zip
    }
  }
})()