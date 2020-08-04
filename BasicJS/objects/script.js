let person = {
    name: 'Василий',
    year: 1990,
    family: ['Elena', 'Igor'],
    car: {
        year: 2010,
        model: 'Ford'
    },
    calcAge: function() {
        let age = 2018 - this.year;
        console.log('Возраст', age);
    }
}
console.log(person);
console.log(person.name);
console.log(person['year']);
console.log(person.family[0]);

person.year = 2005;
console.log(person.year);

person.calcAge();
