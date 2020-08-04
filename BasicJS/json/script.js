let person = {
    name: 'Max',
    age: 26,
    car: {
        model: 'Ford'
    },
    job: 'Fronttend',
    friends: ['Elena', 'Igor']
}

let str = JSON.stringify(person);
console.log(str);
let par = JSON.parse(str);
console.log(par);

