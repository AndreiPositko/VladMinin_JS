let str = '1,2,3,4,5,6,7,8';

let array = str.split(',');

// console.log(array);
// console.log(array.reverse());

array.splice(1, 0, '11');

let newArray = array.concat([1, 2]);
// console.log(newArray);
// console.log(array);

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

