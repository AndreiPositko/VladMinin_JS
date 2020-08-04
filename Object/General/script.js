let car = {
    name: 'Ford',
    year: 2015,
    person: {

    }
}

let arr = [1,2];

//car.__proto__ => Object.prototype
//[] => Array => Object - например вызываем toString - смотрим в прототипе Array? если там не находим - смотрим в прототипе Object

console.log(car['year']);
console.log(car);
console.log(car.hasOwnProperty('name'));
console.log(car.toString);
console.log(car.__proto__ === Object.prototype);

console.log(arr.toString());
