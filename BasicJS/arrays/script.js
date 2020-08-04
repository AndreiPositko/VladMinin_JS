let cars = ['Ford', 'Mazda', 'Kia', 'BMW'];

console.log(cars);
console.log(cars[1]);

console.log(cars.length);

//добавляет в конец массива
cars.push('Audi');
console.log(cars);

//удаляет и возвращает последний элемент
let audi = cars.pop();
console.log(audi);
console.log(cars);

//удаляет и возвращает первый элемент
let ford = cars.shift();
console.log(cars, ford);

//добавляет в начало
cars.unshift(audi);
console.log(cars);

let index = cars.indexOf('Kia');
let kia = cars[index];

console.log(kia);






