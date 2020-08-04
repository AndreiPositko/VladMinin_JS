let carName = 'Ford';
let carYear = 2015;
let personYear = 1990;

function calcAge(year) {
    let currentYear = 2018;
    let result = currentYear - year;
    return result;
}

function checkAndLogAge(year, name, compareTo) {
    if (calcAge(year) < compareTo) {
        console.log('Возраст ' + name +  ' меньше ' + compareTo +  ' лет');
    } else {
        console.log('Возраст ' + name +  ' больше ' + compareTo +  ' лет');
    } 
}

checkAndLogAge(carYear, 'cars', 5);
checkAndLogAge(personYear, 'persons', 15);



// if (calcAge(carYear) < 10) {
//     console.log('Возраст меньше 10 лет');
// } else {
//     console.log('Возраст больше 10 лет');
// }

// if (calcAge(personYear) < 10) {
//     console.log('Возраст меньше 10 лет');
// } else {
//     console.log('Возраст больше 10 лет');
// }

sayHelloTo('Игорь');

// let sayHelloTo = function (name) {
//     console.log('Привет ' + name);
// }

function sayHelloTo (name) {
    console.log('Привет ' + name);
}

