function Car (name, year) {
    this.name = name; //this === ford
    this.year = year;
}

Car.prototype.getAge = function() {
    return new Date().getFullYear() - this.year;
}

Car.prototype.color = 'black';

let ford = new Car('Ford', 2015);
let bmw = new Car('BMW', 2017);
console.log(ford);
console.log(bmw);

console.log('Взраст машины: ' + ford.getAge());
console.log('Взраст машины: ' + bmw.getAge());

console.log('Цвет машины - ' + ford.name + ' - ' + ford.color);
console.log('Цвет машины - ' + bmw.name + ' - ' + bmw.color);

//Но если хотим поменять цвет машины который по умолчанию

ford.color = 'red';
console.log('Цвет машины - ' + ford.name + ' - ' + ford.color);