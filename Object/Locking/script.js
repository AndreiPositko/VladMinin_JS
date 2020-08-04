// let createCounter = function(counterName) {
//     let counter = 0;

//     return function() {
//         console.log(counterName, ++counter);
//     }
// }

let createCounter = function(counterName) {
    let counter = 0;

    return {
        increment: function() {
            counter++;
        },
        decrement: function() {
            counter--;
        },
        getCounter: function() {
            return counter;
        }
    }
}

let counterA = createCounter('Counter A');
let counterB = createCounter('Counter B');

counterA.increment();
counterA.increment();
counterA.increment();

counterB.decrement();
counterB.decrement();

console.log(counterA.getCounter());
console.log(counterB.getCounter());