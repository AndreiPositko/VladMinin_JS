let currentYear = 2020;
let carName = 'Ford';
let carYear = 2008;
let carAge = currentYear - carYear;

// если возраст машины меньше 5 лет ...
// если возраст машины больше или равно 5 лет и меньше или равно 10 лет ...
// иначе другое сообщение

if (carAge < 5) {
    console.log(carName + ' младше 5 лет');
} else if (carAge >= 5 && carAge <= 10) {
    console.log(carAge + ' старше 5лет, но младше 10');
}else {
    console.log(carAge + ' очень старый))');
}

// 0, null, undefined, '', NaN - false

let empty = '';
let str = 'Hello';

if (str) {
    console.log('Значение true');
} else {
    console.log('Значение false');
}

str ? console.log('Значение true') : console.log('Значение false');

let personAge = 20;
let message

// if (personAge < 18) {
//     message = 'Человек еще не совершеннолетний';
// } else {
//     message = 'Человек совершеннолетний';
// }

message = (personAge < 18) ? 'Человек еще не совершеннолетний' : 'Человек совершеннолетний';

console.log(message);
