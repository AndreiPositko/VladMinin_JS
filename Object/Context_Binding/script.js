function printObject(objName) {
    console.log('Printing object:', objName);
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            console.log('[' + key + ']', this[key]);
        }
    }
}

let person = {
    firstName: 'Max',
    job: 'Beckend',
    age: 29,
    friends: ['Elena', 'Igor']
}

let car = {
    name: 'Ford',
    model: 'Focus',
    year: 2017
}

let printPerson = printObject.bind(person);
printPerson('Person');

printObject.call(car, 'Car');

printObject.apply(person, ['Person']);