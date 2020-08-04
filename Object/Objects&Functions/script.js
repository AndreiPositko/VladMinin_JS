let ford = Object.create({
    calculateDistancePerYear: function() {
        //car age + add new field to ford object
       Object.defineProperty(this, 'distansePerYear', {
           value: Math.ceil(this.distance / this.age),
           enumerable: false,
           writable: false,
           configurable: false
       })
    }
}, {
    name: {
        value: 'Ford',
        enumerable: true,
        writable: false,
        configurable: false
    },
    model: {
        value: 'Focus',
        enumerable: true,
        writable: false,
        configurable: false
    },
    year: {
        value: 2015,
        enumerable: true,
        writable: false,
        configurable: false
    },
    distance: {
        value: 120500,
        enumerable: true,
        writable: true,
        configurable: false
    },
    age: {
        enumerable: true,
        get: function() {
            console.log('Get age');
            return new Date().getFullYear() - this.year;
        },
        set: function() {
            console.log('Set new value');
        }
    }
})

console.log(ford);
ford.calculateDistancePerYear();

for (let key in ford) {
    if (ford.hasOwnProperty(key)) {
        console.log(key, ford[key]);
    }
}