"use strict";
(() => {
    let flash = {
        name: 'Barry All en',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['super velocidad'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return `${this.name} ${this.realName}`;
        }
    }
})();
(() => {
    const client = {
        name: 'Ulises',
        age: 26,
        address: {
            id: 255,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAdress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Melisa',
        age: 30,
        address: {
            city: 'Toronto',
            zip: 'K2S 123',
            id: 120
        },
        getFullAdress(id) {
            return this.address.zip;
        }
    };
})();
(() => {
    let addNumbersFuction;
    addNumbersFuction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map