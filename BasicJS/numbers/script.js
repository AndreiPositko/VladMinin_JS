console.log(42);
console.log(-42);
console.log(1.5);
console.log(-8 / 3);
console.log(0xAB);
console.log(2e3);
console.log(NaN);
console.log(typeof NaN);
console.log(123 / 0);

let fortyTwo = 42;
let delta = 8 / 3;


console.log(fortyTwo.toString());
console.log(delta.toFixed(2));
console.log(+delta.toFixed(2) + 4);
console.log(parseFloat(delta.toFixed(2)) + 10);
console.log(parseInt(delta.toFixed(2)) + 10);

console.log(isNaN(NaN));
console.log(isNaN(45));

console.log(isFinite(1 / 0));
console.log(isFinite(9999999));