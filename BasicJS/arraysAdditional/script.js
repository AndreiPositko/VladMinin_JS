let str = '1,2,3,4,5,6,7,8';

let array = str.split(',');

// console.log(array);
// console.log(array.reverse());

array.splice(1, 0, '11');

let newArray = array.concat([1, 2]);
console.log('Concat - ', newArray);
// console.log(array);

//Concat Start
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = ['a', 'b', 'c', 'd', 'e'];
let newArr = [];
newArr = newArr.concat(arr1, arr2);
console.log('NewArray - ', newArr);
//Concat End


let objArr = [
    {name: 'Max', age: 27},
    {name: 'Elena', age: 18},
    {name: 'Victor', age: 20}
]

let foundPerson = objArr.find(function(person) {
    return person.age === 20;
})
console.log(foundPerson);
console.log(objArr);

let oddArray = [1,2,3,4,5,6,7,8,9].filter(function(i) {
    return i % 2 !== 0;
})
// console.log(oddArray);

let numArr = array.map(function(i) {
    return + i;
})
console.log('Map', numArr);

//Every Start
let evArr1 = [54, 63, 5, 18, 45, 95, 38];
let evArr2 = [122, 54, 84, 95, 231, 72, 96];

function isBigger(element, index, array) {
    return element >= 10;
}
console.log(evArr1.every(isBigger));
console.log(evArr2.every(isBigger));
//Every end

//Fill start
let fillArr = [54, 63, 5, 18, 45, 95, 38];
console.log(fillArr.fill(7, 3));
//Fill end

//Filter start
let filterArr = [54, 2, 5, 18, 45, 95, 38];
let result = filterArr.filter(num => num > 10);
console.log(result);

//ForEach Start
let forArr = [54, 2, 5, 18, 45, 95, 38];
forArr.forEach(el => console.log(el));
//ForEach end

//Includes Start
let incArr = [54, 2, 5, 18, 45, 95, 38];
console.log(incArr.includes(18));
//Includes End

//Join Start
let joArr = [54, 2, 5, 18, 45, 95, 38];
console.log(joArr.join(' + ' ));
//Join End

//Reduce Start
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
//Reduce End

//Slice Start
let sliceArr = ['Vasya', 'Kolya', 'Petya', 'Yura', 'Ihor'];
console.log(sliceArr.slice(2));
console.log(sliceArr.slice(2, 4));