let person = {
    name: 'Max',
    age: 28,
    job: 'Frontend'
}

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(key, person[key]);
//     }
// }

// let keys = Object.keys(person);
// console.log(keys);

Object.keys(person).forEach(function(key) {
    console.log(key, person[key]);
})
